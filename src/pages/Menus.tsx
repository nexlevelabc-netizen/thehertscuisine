import { useMemo, useState } from "react";
import { Link } from "react-router";
import { DISHES } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Shared";

const CATEGORIES = ["All", "Rice", "Soups and Stews", "Grills", "Small Chops", "Sides"] as const;

export default function Menus() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [selected, setSelected] = useState<string[]>([]);

  const dishes = useMemo(
    () => (category === "All" ? DISHES : DISHES.filter((d) => d.category === category)),
    [category]
  );

  const toggle = (name: string) =>
    setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));

  return (
    <main>
      <PageHero
        index="Menus"
        tag="Choose, Then We Quote"
        lines={["Explore", "Our Menu"]}
        intro="Browse the dishes our guests love most. Select your favourites and include them in your enquiry, and we will prepare a tailored quotation. Final menus and pricing are always confirmed with the chef."
      />

      <section className="mx-auto max-w-[1360px] px-5 pb-24 md:px-10">
        <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filter dishes by category">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium tracking-wide transition-colors ${
                category === c
                  ? "border-espresso bg-espresso text-ivory"
                  : "border-espresso/25 text-espresso/80 hover:border-copper hover:text-copper"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => {
            const active = selected.includes(d.name);
            return (
              <Reveal key={d.name} className={d.image ? "" : "sm:col-span-1"}>
                <article className="group">
                  {d.image ? (
                    <div className="frame aspect-[4/5]">
                      <img
                        src={d.image}
                        alt={d.name}
                        loading="lazy"
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/5] items-end bg-secondary p-6">
                      <span className="label-tag text-olive">Prepared to Order</span>
                    </div>
                  )}
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-2xl text-espresso">{d.name}</h2>
                    <span className="label-tag shrink-0 text-olive">{d.category}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                  <button
                    type="button"
                    onClick={() => toggle(d.name)}
                    aria-pressed={active}
                    className={`link-grow mt-3 min-h-11 text-sm font-semibold tracking-wide transition-colors ${
                      active ? "text-copper" : "text-espresso/70 hover:text-copper"
                    }`}
                  >
                    {active ? "Added to Your Enquiry" : "Add to Your Enquiry"}
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        {selected.length > 0 ? (
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-espresso/15 bg-cream/95 px-5 py-4 backdrop-blur-sm md:px-10">
            <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-espresso">
                <span className="font-semibold">{selected.length}</span>{" "}
                {selected.length === 1 ? "dish" : "dishes"} selected for your enquiry
              </p>
              <Link
                to={`/contact?dishes=${encodeURIComponent(selected.join(", "))}`}
                className="inline-flex min-h-11 items-center rounded-full bg-espresso px-6 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-copper"
              >
                Continue to Your Enquiry
              </Link>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
