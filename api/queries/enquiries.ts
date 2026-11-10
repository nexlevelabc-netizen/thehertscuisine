import { getDb } from "./connection";
import { enquiries } from "@db/schema";

export type NewEnquiry = typeof enquiries.$inferInsert;

export async function createEnquiry(data: NewEnquiry) {
  const db = getDb();
  const [row] = await db.insert(enquiries).values(data).returning({ id: enquiries.id });
  return { id: row.id };
}
