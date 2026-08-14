import { useEffect, useRef, useState } from "react";

/** Lightweight gold/purple cursor aura + a few floating motes. Disabled for touch & reduced motion. */
export function CursorAura() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      if (ref.current) ref.current.style.transform = `translate3d(${cx - 160}px, ${cy - 160}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] size-80 rounded-full opacity-70 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent) 0%, color-mix(in oklab, var(--arcane) 16%, transparent) 38%, transparent 68%)",
      }}
    />
  );
}

/** Sparse floating particles — GPU transforms only, count kept low. */
export function Motes({ count = 14 }: { count?: number }) {
  const motes = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    delay: `${(i % 7) * 0.9}s`,
    size: i % 3 === 0 ? 3 : 2,
    gold: i % 2 === 0,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m, i) => (
        <span
          key={i}
          className={`absolute animate-float rounded-full ${m.gold ? "bg-gold/70" : "bg-arcane/70"}`}
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            boxShadow: "0 0 8px currentColor",
          }}
        />
      ))}
    </div>
  );
}
