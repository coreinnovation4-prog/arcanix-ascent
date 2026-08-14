import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CursorAura } from "./CursorAura";

type Props = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  chrome?: boolean;
};

export function PageShell({ eyebrow, title, lead, children, chrome = true }: Props) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CursorAura />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 arcane-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-0 -z-10 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-arcane/15 blur-[120px] animate-pulse-glow"
      />
      {chrome && <SiteHeader />}
      <main className={chrome ? "pt-28 lg:pt-36" : ""}>
        {title && (
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl px-4 pb-10 sm:px-6"
          >
            {eyebrow && <p className="label-caps">{eyebrow}</p>}
            <h1 className="mt-3 font-display text-4xl leading-tight text-gold-gradient sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {lead && <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{lead}</p>}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/60 via-arcane/40 to-transparent" />
          </motion.header>
        )}
        {children}
      </main>
      {chrome && <SiteFooter />}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
