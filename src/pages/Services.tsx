import { Link } from "react-router";
import { SERVICES } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Shared";

export default function Services() {
  return (
    <main>
      <PageHero
        index="Services"
        tag="Six Ways to Gather"
        lines={["Catering Shaped", "Around You"]}
        intro="Private chefs, celebration catering and corporate hospitality, each service planned around your occasion, your venue and your guests."
      />

      <div className="mx-auto max-w-[1360px] px-5 pb-24 md:px-10">
        {SERVICES.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-t border-espresso/15 py-16 md:py-24 ${i % 2 === 1 ? "bg-transparent" : ""}`}
          >
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <Reveal className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}>
                <div className="frame aspect-[4/3]">
                  <img src={s.image} alt={s.alt} loading="lazy" />
                </div>
              </Reveal>
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : "md:col-start-7"}`}>
                <Reveal>
                  <div className="flex items-baseline justify-between gap-6">
                    <span className="label-tag text-copper">Service {s.index}</span>
                    <span className="label-tag text-right text-olive">{s.title}</span>
                  </div>
                  <h2 className="font-display mt-6 text-4xl text-espresso sm:text-5xl">{s.title}</h2>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <div className="mt-10">
                    <p className="label-tag text-olive">What Is Included</p>
                    <ul className="mt-5 divide-y divide-espresso/10">
                      {s.includes.map((item) => (
                        <li key={item} className="py-3 text-base text-espresso">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <p className="label-tag text-olive">Questions Guests Ask</p>
                    <div className="mt-4 divide-y divide-espresso/10">
                      {s.faqs.map((f) => (
                        <details key={f.q} className="group py-4">
                          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-espresso transition-colors hover:text-copper [&::-webkit-details-marker]:hidden">
                            {f.q}
                            <span className="label-tag shrink-0 text-olive transition-transform duration-200 group-open:rotate-45">
                              Plus
                            </span>
                          </summary>
                          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/contact?service=${encodeURIComponent(s.title)}`}
                    className="link-grow mt-8 inline-block text-sm font-semibold tracking-wide text-copper"
                  >
                    Request a Quote for {s.title}
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
