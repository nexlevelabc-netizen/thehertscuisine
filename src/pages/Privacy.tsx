import { Link } from "react-router";
import { CONTACT } from "@/data/content";
import { PageHero } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

const SECTIONS = [
  {
    title: "What We Collect",
    body: "When you send us a booking enquiry we collect your name, email address, telephone number and the details of your event, including the date, location, number of guests and any menu preferences or dietary requirements you choose to share.",
  },
  {
    title: "How We Use It",
    body: "Your details are used only to prepare a tailored proposal, to communicate with you about your enquiry and, where agreed, to deliver your catering service. We do not use your details for unrelated marketing and we never sell them.",
  },
  {
    title: "How It Is Stored",
    body: "Enquiries are stored securely on protected servers with access limited to the team members who respond to you. Enquiry records are kept for up to twenty four months so we can honour repeat bookings, after which they are removed.",
  },
  {
    title: "Sharing",
    body: "We share your details only where it is necessary to deliver your event, for example with serving staff or a venue coordinator, and only with your knowledge. We never share your details with third parties for their own marketing.",
  },
  {
    title: "Your Rights",
    body: `You may ask to see, correct or delete the details we hold about you at any time. Write to ${CONTACT.email} or call ${CONTACT.phone} and we will respond promptly.`,
  },
  {
    title: "Cookies",
    body: "This website uses only the essential cookies required for it to function securely. We do not use advertising or tracking cookies.",
  },
];

export default function Privacy() {
  return (
    <main>
      <PageHero
        index="Privacy"
        tag="Plain and Simple"
        lines={["Privacy", "Policy"]}
        intro="How The Herts Cuisine looks after the details you share with us, written in plain language."
      />
      <section className="mx-auto max-w-[880px] px-5 pb-24 md:px-10">
        <div className="divide-y divide-espresso/10 border-t border-espresso/15">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} className="grid gap-4 py-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="label-tag text-copper">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display mt-3 text-2xl text-espresso">{s.title}</h2>
              </div>
              <p className="rise rise-1 text-base leading-relaxed text-muted-foreground md:col-span-8">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="text-base leading-relaxed text-muted-foreground">
            Questions about this policy? Write to{" "}
            <a href={`mailto:${CONTACT.email}`} className="link-grow font-medium text-copper">
              {CONTACT.email}
            </a>{" "}
            or{" "}
            <Link to="/contact" className="link-grow font-medium text-copper">
              send us an enquiry
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </main>
  );
}
