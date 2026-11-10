import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Lenis from "lenis";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/Shared";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Menus from "./pages/Menus";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[1360px] flex-col items-start justify-center px-5 py-32 md:px-10">
      <p className="label-tag text-copper">Page Not Found</p>
      <h1 className="font-display mt-6 text-5xl text-espresso sm:text-6xl">This Table Is Not Set</h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
        The page you are looking for has moved or never existed. Let us guide you back to the menu.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink to="/">Return Home</ButtonLink>
        <ButtonLink to="/contact" variant="secondary">
          Contact Us
        </ButtonLink>
      </div>
    </main>
  );
}

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
