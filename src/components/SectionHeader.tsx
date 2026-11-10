import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string[];
  intro?: string;
  light?: boolean;
}

export function SectionHeader({ index, tag, title, intro, light = false }: SectionHeaderProps) {
  const lineColor = light ? "bg-ivory/25" : "bg-espresso/15";
  const tagColor = light ? "text-ivory/70" : "text-olive";
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className={`flex items-baseline justify-between gap-6 border-t ${light ? "border-ivory/25" : "border-espresso/15"} pt-4`}>
        <span className={`label-tag ${tagColor}`}>{index}</span>
        <span className={`label-tag ${tagColor} text-right`}>{tag}</span>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
        <h2
          className={`font-display text-balance text-4xl sm:text-5xl lg:text-6xl md:col-span-8 ${light ? "text-ivory" : "text-espresso"}`}
        >
          {title.map((line) => (
            <span className="mask-line" key={line}>
              <span>{line}</span>
            </span>
          ))}
        </h2>
        {intro ? (
          <p className={`rise rise-2 max-w-sm text-base leading-relaxed md:col-span-4 md:justify-self-end ${light ? "text-ivory/75" : "text-muted-foreground"}`}>
            {intro}
          </p>
        ) : null}
      </div>
      <div aria-hidden="true" className={`mt-10 hidden h-px w-full md:block ${lineColor}`} />
    </Reveal>
  );
}
