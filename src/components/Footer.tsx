import { Link } from "react-router";
import { CONTACT, NAV, SERVICES } from "@/data/content";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

const SOCIALS = [
  { label: "Instagram", handle: "@thehertscuisine", href: CONTACT.instagram, Icon: InstagramIcon },
  { label: "YouTube", handle: "The Herts Cuisine", href: CONTACT.youtube, Icon: YoutubeIcon },
  { label: "Facebook", handle: "The Herts Cuisine", href: CONTACT.facebook, Icon: FacebookIcon },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1360px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" aria-label="The Herts Cuisine, home" className="inline-block">
              <img src="/logo-light.png" alt="The Herts Cuisine" className="h-24 w-auto" width={1155} height={640} />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/70">
              Premium private chef and event catering, bringing the richness of Nigerian and Afro
              Caribbean cuisine to your table, your celebrations and your special occasions.
            </p>
            <ul className="mt-7 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${label}, opens in a new tab`}
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory/80 transition-all duration-300 hover:border-copper hover:bg-copper hover:text-ivory"
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <p className="label-tag text-ivory/50">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-grow text-sm text-ivory/80 transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label-tag text-ivory/50">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="link-grow text-sm text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-tag text-ivory/50">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>
                <a href={CONTACT.phoneHref} className="link-grow transition-colors hover:text-ivory">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-grow break-all transition-colors hover:text-ivory">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-ivory/60">{CONTACT.areas}</li>
              <li className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-ivory/80 transition-colors hover:text-ivory"
                  >
                    <Icon className="h-4 w-4 text-copper transition-colors group-hover:text-ivory" />
                    <span className="link-grow">{label}</span>
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p>The Herts Cuisine. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacy" className="link-grow transition-colors hover:text-ivory">
              Privacy Policy
            </Link>
            <span>Serving {CONTACT.areas}</span>
            <span>
              Created by{" "}
              <span className="font-semibold text-ivory/80">Genfeel</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
