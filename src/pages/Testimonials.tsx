import { TESTIMONIALS, STATS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { PageHero, ButtonLink } from "@/components/Shared";

export default function Testimonials() {
  return (
    <main>
      <PageHero
        index="Testimonials"
        tag="Five Stars on Yell"
        lines={["What Our", "Customers Say"]}
        intro="Feedback from the dinners, celebrations and events we have had the pleasure of catering, shared with permission."
      />

      <section className="mx-auto max-w-[1360px] px-5 pb-10 md:px-10">
        <Reveal className="flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-espresso/15 pt-8">
          <span className="font-display text-6xl text-espresso sm:text-7xl">{STATS[0].value}</span>
          <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
            reviews on Yell, every one of them five stars.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 pb-24 md:px-10">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              className={`border-t border-espresso/15 pt-6 ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <span className="label-tag text-copper">{t.event}</span>
              <blockquote className="font-display-light mt-4 text-2xl leading-relaxed text-espresso">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-espresso">{t.name}</span>
                <span className="block">{t.source}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col items-start gap-6 bg-espresso px-6 py-12 text-ivory sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Your Occasion Could Be Next</h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ivory/75">
              Tell us what you are planning and we will prepare a proposal shaped around it.
            </p>
          </div>
          <ButtonLink to="/contact" className="bg-copper hover:bg-ivory hover:text-espresso">
            Start Your Enquiry
          </ButtonLink>
        </Reveal>
      </section>
    </main>
  );
}
