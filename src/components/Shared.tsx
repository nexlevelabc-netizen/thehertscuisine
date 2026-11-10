import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, MaskedLines } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export const primaryCta =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-espresso px-7 text-sm font-semibold tracking-wide text-ivory transition-colors duration-200 hover:bg-copper focus-visible:bg-copper";

export const secondaryCta =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-espresso/30 px-7 text-sm font-semibold tracking-wide text-espresso transition-colors duration-200 hover:border-copper hover:text-copper";

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link to={to} className={`${variant === "primary" ? primaryCta : secondaryCta} ${className}`}>
      {children}
    </Link>
  );
}

export function Parallax({
  children,
  className = "",
  amount = 56,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      el,
      { y: amount / 2 },
      {
        y: -amount / 2,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [amount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function PageHero({
  index,
  tag,
  lines,
  intro,
}: {
  index: string;
  tag: string;
  lines: string[];
  intro: string;
}) {
  return (
    <section className="mx-auto max-w-[1360px] px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-44">
      <Reveal className="is-inview">
        <div className="flex items-baseline justify-between gap-6 border-t border-espresso/15 pt-4">
          <span className="label-tag text-olive">{index}</span>
          <span className="label-tag text-right text-olive">{tag}</span>
        </div>
        <h1 className="font-display mt-10 max-w-4xl text-balance text-5xl text-espresso sm:text-6xl lg:text-7xl">
          <MaskedLines lines={lines} />
        </h1>
        <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </Reveal>
    </section>
  );
}
