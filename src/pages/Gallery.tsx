import { useRef } from "react";
import { CONTACT, GALLERY, GALLERY_VIDEOS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Shared";
import { InstagramIcon } from "@/components/SocialIcons";

function VideoCard({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  return (
    <figure className="group">
      <div className="frame aspect-[4/5] bg-espresso">
        <video
          ref={ref}
          src={src}
          poster={poster}
          controls
          muted
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
          onMouseEnter={() => ref.current?.play().catch(() => {})}
          onMouseLeave={() => ref.current?.pause()}
        />
      </div>
      <figcaption className="label-tag mt-3 text-olive">{label}</figcaption>
    </figure>
  );
}

export default function Gallery() {
  const left = GALLERY.filter((_, i) => i % 2 === 0);
  const right = GALLERY.filter((_, i) => i % 2 === 1);

  return (
    <main>
      <PageHero
        index="Gallery"
        tag="Food, Events, People"
        lines={["Moments From", "Recent Tables"]}
        intro="Real dishes and real occasions from our Instagram kitchen. Tap a film to watch it play."
      />

      <section className="mx-auto max-w-[1360px] px-5 md:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-t border-espresso/15 pt-4">
            <span className="label-tag text-olive">Films</span>
            <span className="label-tag text-right text-olive">From the Kitchen</span>
          </div>
        </Reveal>
        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 lg:grid-cols-6">
          {GALLERY_VIDEOS.map((v) => (
            <Reveal key={v.src} className="w-44 shrink-0 snap-start md:w-auto">
              <VideoCard {...v} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 pb-24 pt-16 md:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-t border-espresso/15 pt-4">
            <span className="label-tag text-olive">Photographs</span>
            <span className="label-tag text-right text-olive">Recent Events</span>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-6 md:gap-10">
            {left.map((g) => (
              <Reveal key={g.src} className={`frame ${g.tall ? "aspect-[4/5]" : "aspect-[16/11]"}`}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-6 sm:mt-16 md:mt-28 md:gap-10">
            {right.map((g) => (
              <Reveal key={g.src} className={`frame ${g.tall ? "aspect-[4/5]" : "aspect-[16/11]"}`}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-4 border-t border-espresso/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            New dishes and recent events appear first on Instagram.
          </p>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-espresso px-7 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-copper"
          >
            <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
            Follow {CONTACT.instagramLabel}
          </a>
        </Reveal>
      </section>
    </main>
  );
}
