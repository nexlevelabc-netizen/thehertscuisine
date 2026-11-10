import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { createEnquiry } from "./queries/enquiries";
import { notifyNewEnquiry } from "./mailer";

const enquiryInput = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(190),
  phone: z.string().trim().min(7).max(40),
  serviceType: z.string().trim().min(2).max(80),
  eventDate: z.string().trim().min(4).max(20),
  eventTime: z.string().trim().max(20).optional().nullable(),
  guests: z.string().trim().min(1).max(40),
  location: z.string().trim().min(2).max(190),
  budget: z.string().trim().max(60).optional().nullable(),
  dishes: z.string().trim().max(2000).optional().nullable(),
  notes: z.string().trim().max(4000).optional().nullable(),
  consent: z.literal(true),
});

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),

  enquiry: createRouter({
    create: publicQuery.input(enquiryInput).mutation(async ({ input }) => {
      const { consent, ...data } = input;
      const { id } = await createEnquiry({ ...data, consent: "yes" });
      await notifyNewEnquiry(data);
      return { id };
    }),
  }),
});

export type AppRouter = typeof appRouter;
