import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./router";
import { createContext } from "./context";
import { log } from "./lib/logger";
import { serveStaticFiles } from "./lib/vite";
import { requestContext } from "./lib/requestcontext";
import { clientLogRouter } from "./lib/clientlog";
import { scrubbedError } from "./lib/scrub";

const app = new Hono();

app.use("*", requestContext);
app.route("/api/log", clientLogRouter);

app.use(
  "/api/trpc/*",
  trpcServer({
    router: appRouter,
    createContext,
  })
);

app.all("/api/*", (c) => c.json({ error: "Not Found" }, 404));

app.onError((err, c) => {
  log.error("unhandled request error", err);
  return scrubbedError(c, err);
});

serveStaticFiles(app);

const port = Number(process.env.PORT || 3000);
serve({ fetch: app.fetch, port }, () => {
  log.info(`Server running on http://localhost:${port}/`);
});
