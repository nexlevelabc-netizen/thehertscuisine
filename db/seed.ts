import { getDb } from "../api/queries/connection";

async function seed() {
  // Add seed data here as the project grows.
  getDb();
  console.log("Seed complete");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
