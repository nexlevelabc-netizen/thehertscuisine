import { log } from "./lib/logger";

export const ENQUIRY_INBOX = "info@thehertscuisine.com";

interface EnquiryEmail {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  eventDate: string;
  eventTime?: string | null;
  guests: string;
  location: string;
  budget?: string | null;
  dishes?: string | null;
  notes?: string | null;
}

/**
 * Notification layer for new booking enquiries. When SMTP credentials are
 * provided through environment variables the enquiry is delivered to the
 * business inbox automatically; without them the notification is recorded
 * in the application log so nothing is ever lost.
 */
export async function notifyNewEnquiry(e: EnquiryEmail) {
  const lines = [
    `New booking enquiry from ${e.name}`,
    ``,
    `Service: ${e.serviceType}`,
    `Event date: ${e.eventDate}${e.eventTime ? ` at ${e.eventTime}` : ""}`,
    `Guests: ${e.guests}`,
    `Location: ${e.location}`,
    `Budget: ${e.budget || "Not specified"}`,
    `Preferred dishes: ${e.dishes || "None selected"}`,
    `Notes: ${e.notes || "None"}`,
    ``,
    `Reply to: ${e.name} <${e.email}>`,
    `Telephone: ${e.phone}`,
  ].join("\n");

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    try {
      const nodemailer = await import("nodemailer");
      const transport = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_PORT === "465",
        auth: { user, pass },
      });
      await transport.sendMail({
        from: process.env.SMTP_FROM || user,
        to: ENQUIRY_INBOX,
        replyTo: e.email,
        subject: `New Enquiry, ${e.serviceType}, ${e.eventDate}`,
        text: lines,
      });
      log.info("enquiry notification emailed", { to: ENQUIRY_INBOX });
      return;
    } catch (err) {
      log.error("enquiry email failed, recorded to log instead", err);
    }
  }

  log.info("enquiry notification queued", { enquiry: lines });
}
