import {
  pgTable,
  pgEnum,
  bigserial,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const enquiryStatus = pgEnum("enquiry_status", [
  "new_enquiry",
  "under_review",
  "quote_sent",
  "awaiting_confirmation",
  "confirmed",
  "completed",
  "cancelled",
]);

export const enquiries = pgTable("enquiries", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 190 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  serviceType: varchar("service_type", { length: 80 }).notNull(),
  eventDate: varchar("event_date", { length: 20 }).notNull(),
  eventTime: varchar("event_time", { length: 20 }),
  guests: varchar("guests", { length: 40 }).notNull(),
  location: varchar("location", { length: 190 }).notNull(),
  budget: varchar("budget", { length: 60 }),
  dishes: text("dishes"),
  notes: text("notes"),
  status: enquiryStatus("status").notNull().default("new_enquiry"),
  consent: varchar("consent", { length: 10 }).notNull().default("yes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
