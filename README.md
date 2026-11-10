# The Herts Cuisine

Premium private chef and Afro Caribbean / Nigerian event catering website.

## Stack

React 19, TypeScript, Vite, Tailwind CSS, Hono, tRPC 11, Drizzle ORM, PostgreSQL (Neon on Render).

## Develop

```bash
npm install
npm run dev
```

## Build and run

```bash
npm run build
npm start
```

## Deploy on Render

Connect this repo as a Blueprint. render.yaml provisions the web service.
Set DATABASE_URL (Neon), then run `npx drizzle-kit push` from the Render Shell once to create the enquiries table.
Optional SMTP_HOST / SMTP_USER / SMTP_PASS / SMTP_FROM enable enquiry notification emails to info@thehertscuisine.com.
