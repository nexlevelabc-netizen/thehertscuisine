import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { NAV } from "@/data/content";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center leading-none" aria-label="The Herts Cuisine, home">
      <img
        src={light ? "/logo-light.png" : "/logo.png"}
        alt="The Herts Cuisine"
        className="h-10 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03] md:h-11"
        width={1155}
        height={640}
      />
    </Link>
  );
}

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastY.current + 6 && y > 120 && !open) setHidden(true);
      else if (y < lastY.current - 4 || y <= 120) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[transform,background-color,box-shadow] duration-300 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-ivory/95 shadow-[0_1px_0_0_hsl(var(--espresso)/0.1)] backdrop-blur-sm" : "bg-ivory"}`}
      >
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
          <Wordmark />
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `link-grow text-[0.8125rem] font-medium tracking-wide transition-colors ${
                    isActive ? "text-copper" : "text-espresso/80 hover:text-espresso"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="link-grow flex min-h-11 items-center px-1 text-[0.8125rem] font-semibold tracking-wide text-copper sm:hidden"
            >
              Book
            </Link>
            <Link
              to="/contact"
              className="hidden rounded-full bg-espresso px-5 py-2.5 text-[0.8125rem] font-semibold tracking-wide text-ivory transition-colors hover:bg-copper focus-visible:bg-copper sm:inline-block"
            >
              Book Your Experience
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="label-tag flex min-h-11 items-center px-2 text-espresso lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-espresso px-6 pb-10 pt-5 text-ivory"
        >
          <div className="flex items-center justify-between">
            <Wordmark light />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="label-tag flex min-h-11 items-center px-2 text-ivory/80 transition-colors hover:text-ivory"
            >
              Close
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-10 flex flex-1 flex-col justify-center gap-1">
            {[{ label: "Home", to: "/" }, ...NAV].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="group flex min-h-14 items-baseline justify-between border-b border-ivory/15 py-3"
              >
                <span className="font-display text-3xl text-ivory transition-colors group-hover:text-copper sm:text-4xl">
                  {item.label}
                </span>
                <span className="label-tag text-ivory/50">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-copper px-6 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-espresso"
          >
            Book Your Experience
          </Link>
        </div>
      ) : null}
    </>
  );
}
