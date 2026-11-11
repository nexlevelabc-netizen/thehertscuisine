import { Link } from "react-router";
import { CONTACT, OCCASIONS, SERVICES, STEPS, TESTIMONIALS, DISHES } from "@/data/content";
import { Reveal, MaskedLines } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ButtonLink, Parallax } from "@/components/Shared";
import { InstagramIcon } from "@/components/SocialIcons";

function Hero() {
  return (
    <section className="grid min-h-dvh md:grid-cols-2">
      <div className="flex flex-col justify-center px-5 pb-16 pt-28 md:px-10 md:pt-32 lg:pl-16 lg:pr-14">
        <Reveal className="is-inview">
          <div className="flex items-baseline justify-between gap-4 border-t border-espresso/15 pt-4">
            <span className="label-tag text-olive">Private Chef</span>
            <span className="label-tag text-right text-olive">Event Catering</span>
          </div>
          <h1 className="font-display mt-10 text-balance text-5xl text-espresso sm:text-6xl lg:text-[4.6rem]">
            <MaskedLines lines={["Authentic Flavours.", "Exceptional", "Experiences."]} />
          </h1>
          <p className="rise rise-2 mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Bringing the richness of Nigerian and Afro Caribbean cuisine to your table, your
            celebrations and your special occasions.
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <ButtonLink to="/services">Explore Our Services</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Book Your Experience
            </ButtonLink>
          </div>
          <p className="rise rise-3 mt-10 text-sm text-muted-foreground">
            Rated five stars by fifty eight reviewers on Yell.
          </p>
        </Reveal>
      </div>
      <div className="relative min-h-[70vh] md:min-h-dvh">
        <Parallax amount={64} className="absolute inset-0">
          <Reveal as="div" className="frame absolute inset-0 is-inview">
            <img src="/images/hero.jpg" alt="Party jollof rice with grilled sirloin and fried plantain" fetchPriority="high" />
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <Reveal className="md:col-span-5">
          <div className="frame aspect-[4/5]">
            <img src="/images/real/kitchen-action.jpg" alt="Fresh cooking in The Herts Cuisine kitchen" loading="lazy" />
          </div>
        </Reveal>
        <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="label-tag text-copper">The Brand</p>
            <h2 className="font-display mt-6 text-balance text-4xl text-espresso sm:text-5xl">
              <MaskedLines lines={["More Than Food.", "An Experience", "to Remember."]} />
            </h2>
            <p className="rise rise-2 mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              The Herts Cuisine began with a simple belief, that the food of a celebration should be
              as memorable as the occasion itself. Every menu is built around heritage recipes,
              careful sourcing and the kind of generosity that turns a meal into a moment.
            </p>
            <p className="rise rise-3 mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              From intimate dinners at home to weddings and corporate receptions, our team cooks,
              serves and cares for every detail.
            </p>
            <Link to="/about" className="link-grow rise rise-3 mt-8 inline-block text-sm font-semibold tracking-wide text-copper">
              Meet the Chef
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  const featured = SERVICES.slice(0, 4);
  const spans = [
    "md:col-span-7",
    "md:col-span-5 md:mt-24",
    "md:col-span-5",
    "md:col-span-7 md:-mt-24",
  ];
  return (
    <section className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
      <SectionHeader
        index="01"
        tag="Our Culinary Experiences"
        title={["Choose the Experience", "That Fits Your Occasion"]}
        intro="Four ways to bring The Herts Cuisine to your table, each shaped around your guests, your venue and your plans."
      />
      <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
        {featured.map((s, i) => (
          <Reveal key={s.id} className={spans[i]}>
            <Link to={`/services#${s.id}`} className="group block">
              <div className="frame aspect-[4/3]">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <h3 className="font-display text-3xl text-espresso transition-colors group-hover:text-copper">
                  {s.title}
                </h3>
                <span className="label-tag shrink-0 text-olive">{s.index}</span>
              </div>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="link-grow mt-4 inline-block text-sm font-semibold tracking-wide text-copper">
                View Experience
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SignatureDishes() {
  const dishes = DISHES.filter((d) => d.image).slice(0, 6);
  return (
    <section className="bg-espresso py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <SectionHeader
          index="02"
          tag="Signature Dishes"
          title={["A Taste of", "The Herts Cuisine"]}
          intro="The dishes our guests ask for by name, from smoky party jollof to peppered asun fresh off the grill."
          light
        />
      </div>
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-14 md:overflow-visible md:px-0">
          {dishes.map((d, i) => (
            <Reveal key={d.name} className="w-56 shrink-0 snap-start md:w-auto">
              <div className={`frame aspect-[4/5] ${i % 3 === 1 ? "md:mt-10" : ""}`}>
                <img src={d.image} alt={d.name} loading="lazy" />
              </div>
              <h3 className="font-display mt-4 text-xl text-ivory">{d.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ivory/65">{d.description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link to="/menus" className="link-grow text-sm font-semibold tracking-wide text-copper">
            Explore the Full Menu
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Occasions() {
  return (
    <section className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <Parallax amount={40}>
            <div className="frame aspect-[16/11]">
              <img src="/images/occasion-wide.jpg" alt="An elegant celebration tablescape with flowers and candles" loading="lazy" />
            </div>
          </Parallax>
        </Reveal>
        <div className="md:col-span-4 md:col-start-9">
          <Reveal>
            <p className="label-tag text-copper">Made for Every Occasion</p>
            <h2 className="font-display mt-6 text-4xl text-espresso sm:text-5xl">
              <MaskedLines lines={["Your Occasion,", "Our Table"]} />
            </h2>
            <ul className="rise rise-2 mt-8 divide-y divide-espresso/10">
              {OCCASIONS.map((o) => (
                <li key={o} className="py-3">
                  <span className="font-display text-2xl text-espresso">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeader
          index="03"
          tag="How Booking Works"
          title={["From First Message", "to Final Plate"]}
          intro="A simple, considered process that takes the effort out of planning your event."
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} className="border-t border-espresso/15 pt-6">
              <span className={`font-display-light block text-6xl text-copper/80`}>{s.n}</span>
              <h3 className="rise rise-1 mt-5 text-base font-semibold text-espresso">{s.title}</h3>
              <p className="rise rise-2 mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="sr-only">Step {i + 1} of 4</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const left = ["/images/real/asun-plantain.jpg", "/images/real/party-trays.jpg", "/images/real/beef-peppers.jpg"];
  const right = ["/images/real/kitchen-action.jpg", "/images/real/smallchops.jpg", "/images/real/plantain.jpg"];
  return (
    <section className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
      <SectionHeader
        index="04"
        tag="Gallery and Recent Events"
        title={["Recent Tables,", "Real Occasions"]}
        intro="A glimpse of the meals, the preparation and the celebrations we have had the pleasure of catering."
      />
      <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-8">
          {left.map((src) => (
            <Reveal key={src} className="frame aspect-[4/5]">
              <img src={src} alt="" loading="lazy" />
            </Reveal>
          ))}
        </div>
        <div className="flex flex-col gap-6 sm:mt-20 md:mt-32 md:gap-8">
          {right.map((src) => (
            <Reveal key={src} className="frame aspect-[4/5]">
              <img src={src} alt="" loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
        <Link to="/gallery" className="link-grow text-sm font-semibold tracking-wide text-copper">
          View the Full Gallery
        </Link>
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-espresso/70 hover:text-espresso"
        >
          <InstagramIcon className="h-[1.1rem] w-[1.1rem] text-copper transition-colors group-hover:text-espresso" />
          <span className="link-grow">Follow on Instagram</span>
        </a>
      </Reveal>
    </section>
  );
}

function Quotes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeader
          index="05"
          tag="What Our Customers Say"
          title={["Kind Words From", "Recent Tables"]}
        />
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <Reveal as="figure" key={t.name} className="flex flex-col border-t border-espresso/15 pt-6">
              <blockquote className="font-display-light text-xl leading-relaxed text-espresso">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-espresso">{t.name}</span>
                <span className="block">{t.event}, {t.source}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link to="/testimonials" className="link-grow text-sm font-semibold tracking-wide text-copper">
            Read More Testimonials
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/cta-wide.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/85 to-espresso/60" />
      </div>
      <div className="relative mx-auto flex max-w-[1360px] flex-col items-start px-5 py-28 md:px-10 md:py-40">
        <Reveal className="is-inview">
          <p className="label-tag text-ivory/70">Begin Your Booking</p>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl text-ivory sm:text-5xl lg:text-6xl">
            <MaskedLines lines={["Let Us Make Your Next", "Occasion Unforgettable."]} />
          </h2>
          <p className="rise rise-2 mt-6 max-w-lg text-lg leading-relaxed text-ivory/80">
            From intimate private dining to memorable celebrations, discover a catering experience
            designed around you.
          </p>
          <div className="rise rise-3 mt-10">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-copper px-8 text-sm font-semibold tracking-wide text-ivory transition-colors duration-200 hover:bg-ivory hover:text-espresso"
            >
              Plan Your Event
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Experiences />
      <SignatureDishes />
      <Occasions />
      <Steps />
      <GalleryPreview />
      <Quotes />
      <FinalCta />
    </main>
  );
}
