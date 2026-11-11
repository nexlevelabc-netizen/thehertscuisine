import { STATS } from "@/data/content";
import { Reveal, MaskedLines } from "@/components/Reveal";
import { PageHero, ButtonLink, Parallax } from "@/components/Shared";

export default function About() {
  return (
    <main>
      <PageHero
        index="About"
        tag="The Chef and the Story"
        lines={["Cooking Rooted", "in Heritage"]}
        intro="The Herts Cuisine is built on family recipes, generous hospitality and a deep love for the food of Nigeria and the Caribbean."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="flex flex-col justify-center md:col-span-6">
            <Reveal>
              <p className="label-tag text-copper">Our Philosophy</p>
              <h2 className="font-display mt-6 text-balance text-4xl text-espresso sm:text-5xl">
                <MaskedLines lines={["Food That Carries", "a Story"]} />
              </h2>
              <p className="rise rise-2 mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
                Every dish we serve begins long before the event itself. Recipes passed down through
                families, ingredients chosen with care, and slow cooking that cannot be rushed. Our
                kitchen honours the smoky depth of party jollof, the patience of a proper egusi and
                the fire of a well made asun.
              </p>
              <p className="rise rise-3 mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                We believe catering is an act of hospitality. When you invite us to your occasion,
                you are inviting a team that treats your guests as our own.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-5 md:col-start-8">
            <Parallax amount={40}>
              <div className="frame aspect-[4/5]">
                <img src="/images/chef.jpg" alt="The chef at work, plating with care" loading="lazy" />
              </div>
            </Parallax>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-t border-espresso/15 pt-4">
            <span className="label-tag text-olive">In Numbers</span>
            <span className="label-tag text-right text-olive">Why Guests Return</span>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <Reveal key={s.label} className="border-t border-espresso/15 pt-6">
              <span className="font-display block text-6xl text-espresso">{s.value}</span>
              <p className="rise rise-1 mt-3 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-5">
            <div className="frame aspect-[4/5]">
              <img src="/images/gallery-table.jpg" alt="Guests sharing platters at a private dinner" loading="lazy" />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="label-tag text-copper">How We Work</p>
              <h2 className="font-display mt-6 text-balance text-4xl text-ivory sm:text-5xl">
                <MaskedLines lines={["Considered From", "Start to Finish"]} />
              </h2>
              <ul className="rise rise-2 mt-8 space-y-5 text-base leading-relaxed text-ivory/80">
                <li className="border-b border-ivory/15 pb-5">
                  Menus designed around your guests, including dietary and cultural requirements.
                </li>
                <li className="border-b border-ivory/15 pb-5">
                  Clear proposals with food, service and logistics set out before you commit.
                </li>
                <li className="border-b border-ivory/15 pb-5">
                  A calm, professional team on the day, so you can be a guest at your own event.
                </li>
                <li>Honest cooking, generous portions and presentation that respects the occasion.</li>
              </ul>
              <div className="rise rise-3 mt-10">
                <ButtonLink to="/services">Discover Our Services</ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
