import { useMemo, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router";
import { trpc } from "@/providers/trpc";
import { CONTACT, SERVICES } from "@/data/content";
import { Reveal, MaskedLines } from "@/components/Reveal";

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Something Else"];
const GUEST_OPTIONS = ["Up to 20", "20 to 50", "50 to 100", "100 to 200", "More than 200"];
const BUDGET_OPTIONS = ["Under 500", "500 to 1000", "1000 to 2500", "2500 and above", "Prefer to discuss"];

const inputClass =
  "min-h-12 w-full border border-espresso/25 bg-white px-4 text-base text-espresso placeholder:text-espresso/40 transition-colors focus:border-copper focus:outline-none";
const labelClass = "label-tag mb-2 block text-olive";

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  eventDate: string;
  eventTime: string;
  guests: string;
  location: string;
  budget: string;
  notes: string;
  consent: boolean;
}

export default function Contact() {
  const [params] = useSearchParams();
  const initialService = params.get("service") ?? "";
  const initialDishes = params.get("dishes") ?? "";

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceType: SERVICE_OPTIONS.includes(initialService) ? initialService : "",
    eventDate: "",
    eventTime: "",
    guests: "",
    location: "",
    budget: "",
    notes: "",
    consent: false,
  });
  const [dishes, setDishes] = useState(initialDishes);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [reference, setReference] = useState<number | null>(null);

  const mutation = trpc.enquiry.create.useMutation();

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (form.phone.trim().length < 7) next.phone = "Please enter a telephone number we can reach you on.";
    if (!form.serviceType) next.serviceType = "Please choose the type of service.";
    if (!form.eventDate) next.eventDate = "Please choose your event date.";
    if (!form.guests) next.guests = "Please estimate your number of guests.";
    if (form.location.trim().length < 2) next.location = "Please tell us where the event will take place.";
    if (!form.consent) next.consent = "Please confirm you are happy for us to contact you about this enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await mutation.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        serviceType: form.serviceType,
        eventDate: form.eventDate,
        eventTime: form.eventTime || null,
        guests: form.guests,
        location: form.location.trim(),
        budget: form.budget || null,
        dishes: dishes || null,
        notes: form.notes.trim() || null,
        consent: true,
      });
      setReference(res.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      /* error surfaced via mutation.error */
    }
  };

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  if (reference !== null) {
    return (
      <main className="mx-auto max-w-[1360px] px-5 pb-24 pt-32 md:px-10 md:pt-44">
        <Reveal className="is-inview max-w-2xl">
          <p className="label-tag text-copper">Enquiry Received</p>
          <h1 className="font-display mt-6 text-5xl text-espresso sm:text-6xl">
            <MaskedLines lines={["Thank You,", "We Will Be in Touch."]} />
          </h1>
          <p className="rise rise-2 mt-8 text-lg leading-relaxed text-muted-foreground">
            Your enquiry has been received with the reference number{" "}
            <span className="font-semibold text-espresso">THC {String(reference).padStart(4, "0")}</span>.
            Our team will review the details and reply with a tailored proposal, usually within two
            working days.
          </p>
          <p className="rise rise-3 mt-4 text-base leading-relaxed text-muted-foreground">
            If your occasion is sooner than that, call us directly on{" "}
            <a href={CONTACT.phoneHref} className="link-grow font-semibold text-copper">
              {CONTACT.phone}
            </a>
            .
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <Link
              to="/menus"
              className="inline-flex min-h-12 items-center rounded-full bg-espresso px-7 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-copper"
            >
              Browse the Menu Again
            </Link>
            <Link
              to="/"
              className="inline-flex min-h-12 items-center rounded-full border border-espresso/30 px-7 text-sm font-semibold tracking-wide text-espresso transition-colors hover:border-copper hover:text-copper"
            >
              Return Home
            </Link>
          </div>
        </Reveal>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1360px] px-5 pb-24 pt-32 md:px-10 md:pt-44">
      <Reveal className="is-inview">
        <div className="flex items-baseline justify-between gap-6 border-t border-espresso/15 pt-4">
          <span className="label-tag text-olive">Contact and Bookings</span>
          <span className="label-tag text-right text-olive">Replies Within Two Working Days</span>
        </div>
        <h1 className="font-display mt-10 max-w-3xl text-balance text-5xl text-espresso sm:text-6xl lg:text-7xl">
          <MaskedLines lines={["Plan Your", "Experience"]} />
        </h1>
        <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Tell us about your event so we can prepare a personalised proposal. Prefer to talk first?
          Call us on{" "}
          <a href={CONTACT.phoneHref} className="link-grow font-semibold text-copper">
            {CONTACT.phone}
          </a>
          .
        </p>
      </Reveal>

      {!privacyAccepted ? (
        <Reveal className="mt-14 max-w-2xl border border-espresso/20 bg-white p-6 sm:p-10">
          <p className="label-tag text-copper">Before We Begin</p>
          <h2 className="font-display mt-4 text-3xl text-espresso">Your Privacy Matters</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              The details you share in this form are used only to prepare your proposal and to
              contact you about your enquiry. They are stored securely, never sold and never shared
              with third parties for marketing.
            </p>
            <p>
              You can ask us to view, correct or delete your details at any time by writing to{" "}
              <a href={`mailto:${CONTACT.email}`} className="link-grow font-medium text-copper">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => setPrivacyAccepted(true)}
              className="inline-flex min-h-12 items-center rounded-full bg-espresso px-7 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-copper"
            >
              I Understand, Continue to the Form
            </button>
            <Link to="/privacy" className="link-grow text-sm font-semibold tracking-wide text-copper">
              Read the Full Privacy Policy
            </Link>
          </div>
        </Reveal>
      ) : (
        <Reveal className="is-inview mt-14">
          <form onSubmit={submit} noValidate className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-7">
              <fieldset>
                <legend className="label-tag mb-4 text-olive">Type of Service</legend>
                <div className="flex flex-wrap gap-3">
                  {SERVICE_OPTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => set("serviceType", s)}
                      aria-pressed={form.serviceType === s}
                      className={`min-h-11 rounded-full border px-5 text-sm font-medium tracking-wide transition-colors ${
                        form.serviceType === s
                          ? "border-espresso bg-espresso text-ivory"
                          : "border-espresso/25 text-espresso/80 hover:border-copper hover:text-copper"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {errors.serviceType ? <p className="mt-2 text-sm text-destructive">{errors.serviceType}</p> : null}
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="eventDate" className={labelClass}>Event Date</label>
                  <input
                    id="eventDate"
                    type="date"
                    min={minDate}
                    value={form.eventDate}
                    onChange={(e) => set("eventDate", e.target.value)}
                    className={inputClass}
                  />
                  {errors.eventDate ? <p className="mt-2 text-sm text-destructive">{errors.eventDate}</p> : null}
                </div>
                <div>
                  <label htmlFor="eventTime" className={labelClass}>Event Time, Optional</label>
                  <input
                    id="eventTime"
                    type="time"
                    value={form.eventTime}
                    onChange={(e) => set("eventTime", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="guests" className={labelClass}>Number of Guests</label>
                  <select
                    id="guests"
                    value={form.guests}
                    onChange={(e) => set("guests", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a range</option>
                    {GUEST_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  {errors.guests ? <p className="mt-2 text-sm text-destructive">{errors.guests}</p> : null}
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget Range, Optional</label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => set("budget", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Prefer to discuss</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="location" className={labelClass}>Event Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Venue, town or postcode area"
                  value={form.location}
                  onChange={(e) => set("location", e.target.value)}
                  className={inputClass}
                />
                {errors.location ? <p className="mt-2 text-sm text-destructive">{errors.location}</p> : null}
              </div>

              <div>
                <label htmlFor="dishes" className={labelClass}>Dishes You Would Love to See</label>
                <textarea
                  id="dishes"
                  rows={3}
                  placeholder="Choose dishes on Our Menus page or write them here"
                  value={dishes}
                  onChange={(e) => setDishes(e.target.value)}
                  className={`${inputClass} min-h-24 py-3`}
                />
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>Anything Else We Should Know</label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Dietary requirements, kitchen facilities, timings or special requests"
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className={`${inputClass} min-h-28 py-3`}
                />
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="space-y-6 border border-espresso/20 bg-white p-6 sm:p-8">
                <p className="label-tag text-copper">Your Details</p>
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name</label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={inputClass}
                  />
                  {errors.name ? <p className="mt-2 text-sm text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={inputClass}
                  />
                  {errors.email ? <p className="mt-2 text-sm text-destructive">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Telephone</label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className={inputClass}
                  />
                  {errors.phone ? <p className="mt-2 text-sm text-destructive">{errors.phone}</p> : null}
                </div>

                <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#A66C48]"
                  />
                  <span>
                    I agree to The Herts Cuisine contacting me about this enquiry, as described in
                    the{" "}
                    <Link to="/privacy" className="link-grow font-medium text-copper">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent ? <p className="text-sm text-destructive">{errors.consent}</p> : null}

                {mutation.error ? (
                  <p role="alert" className="text-sm text-destructive">
                    Something went wrong while sending your enquiry. Please try again, or call us on{" "}
                    {CONTACT.phone}.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-espresso px-7 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {mutation.isPending ? "Sending Your Enquiry" : "Request My Proposal"}
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Sending this form does not confirm a booking or a price. We reply with a tailored
                  proposal for you to review.
                </p>
              </div>
            </div>
          </form>
        </Reveal>
      )}
    </main>
  );
}
