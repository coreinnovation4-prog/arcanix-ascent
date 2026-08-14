import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden border px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.28em] transition-all duration-300 focus-visible:outline-none";

const variants = {
  gold: "rune-frame border-gold/60 bg-background/50 text-gold hover:border-gold hover:scale-[1.03] hover:shadow-gold",
  arcane:
    "rune-frame border-arcane/60 bg-background/50 text-foreground hover:border-arcane hover:scale-[1.03] hover:shadow-arcane",
  ghost: "border-border/70 bg-transparent text-muted-foreground hover:border-gold/60 hover:text-gold",
} as const;

function Shimmer() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-gold/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-shimmer group-hover:opacity-100" />
    </span>
  );
}

type Variant = keyof typeof variants;

export function ArcaneLink({
  children,
  variant = "gold",
  className,
  arrow = true,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean; children: ReactNode }) {
  return (
    <Link {...props} className={cn(base, variants[variant], className)}>
      <Shimmer />
      <span className="relative">{children}</span>
      {arrow && (
        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </Link>
  );
}

export function ArcaneButton({
  children,
  variant = "gold",
  className,
  arrow = true,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; arrow?: boolean; children: ReactNode }) {
  return (
    <button {...props} className={cn(base, variants[variant], className)}>
      <Shimmer />
      <span className="relative">{children}</span>
      {arrow && (
        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </button>
  );
}
