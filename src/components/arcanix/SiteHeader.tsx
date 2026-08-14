import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/data/arcanix";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative grid size-9 place-items-center">
            <span className="absolute inset-0 animate-rune rounded-full border border-gold/50 border-dashed" />
            <span className="size-2 rotate-45 bg-gold" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-sm tracking-[0.3em] text-gold-gradient">ARCANIX 2K26</span>
            <span className="label-caps mt-1 block text-[0.55rem] text-muted-foreground">{brand.tagline}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/register"
            className="hidden rounded-sm border border-gold/60 bg-background/40 px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-gold transition-all hover:border-gold hover:shadow-gold sm:inline-block"
          >
            Register Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-sm border border-border text-gold lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-background/97 arcane-grid lg:hidden"
          >
            <nav aria-label="Mobile" className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    to={l.to}
                    className="block border-b border-border/40 py-4 font-serif text-2xl tracking-wide text-foreground"
                    activeProps={{ className: "text-gold" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/register"
                className="mt-6 rune-frame relative block border border-gold/70 py-4 text-center text-sm uppercase tracking-[0.3em] text-gold"
              >
                Register Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
