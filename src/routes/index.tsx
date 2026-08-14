import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { PageShell, Reveal } from "@/components/arcanix/PageShell";
import { Motes } from "@/components/arcanix/CursorAura";
import { ArcaneButton, ArcaneLink } from "@/components/arcanix/ArcaneButton";
import { CinematicEntry } from "@/components/arcanix/CinematicEntry";
import { brand, events, paths, timeline } from "@/data/arcanix";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARCANIX 2K26 — The Arcane Ascension | KSRCE IoT Symposium" },
      {
        name: "description",
        content:
          "ARCANIX 2K26, The Arcane Ascension — the technical symposium of the Department of Internet of Things, K.S.R. College of Engineering, Tiruchengode.",
      },
      { property: "og:title", content: "ARCANIX 2K26 — The Arcane Ascension" },
      {
        property: "og:description",
        content:
          "Enter the arena: quests, arcane scrolls and the Hall of Champions at the KSRCE IoT technical symposium.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("arcanix-entered") === "1") {
      setEntered(true);
    }
  }, []);

  const onEnter = useCallback(() => {
    try {
      sessionStorage.setItem("arcanix-entered", "1");
    } catch {
      /* storage unavailable */
    }
    setEntered(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!entered && <CinematicEntry onEnter={onEnter} muted={muted} onToggleSound={() => setMuted((m) => !m)} />}
      </AnimatePresence>

      {entered && (
        <PageShell>
          <Academy muted={muted} onToggleSound={() => setMuted((m) => !m)} />
        </PageShell>
      )}
    </>
  );
}

function Academy({ muted, onToggleSound }: { muted: boolean; onToggleSound: () => void }) {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Motes />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="label-caps">{brand.college}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-gold-gradient sm:text-6xl lg:text-8xl">
            ARCANIX 2K26
          </h1>
          <p className="mt-4 font-serif text-xl uppercase tracking-[0.34em] text-arcane sm:text-2xl">
            The Arcane Ascension
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Where innovation meets imagination.</p>

          <ul className="mt-8 flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            {["KSRCE", brand.department, "Technical Symposium", brand.dateLabel].map((t) => (
              <li key={t} className="panel rune-frame relative px-4 py-2">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ArcaneLink to="/about">Enter the Academy</ArcaneLink>
            <ArcaneLink to="/events" variant="arcane">
              Browse Quests
            </ArcaneLink>
            <button
              type="button"
              onClick={onToggleSound}
              aria-label={muted ? "Enable ambient sound" : "Mute ambient sound"}
              className="grid size-11 place-items-center rounded-full border border-border text-gold transition-colors hover:border-gold"
            >
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
          </div>
        </motion.div>
      </section>

      <section className="relative border-y border-border/50 bg-navy/25 py-16">
        <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="label-caps">The Invitation</p>
          <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl">
            “Welcome to ARCANIX 2K26 — a technical journey where ideas become inventions, challenges become
            opportunities, and innovators rise beyond limits.”
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="label-caps">Choose your discipline</p>
          <h2 className="mt-3 font-display text-3xl text-gold-gradient sm:text-4xl">Two Paths, One Ascension</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <article className="panel panel-glow rune-frame relative h-full overflow-hidden p-8 transition-all duration-500">
                <span
                  aria-hidden
                  className={`absolute -right-16 -top-16 size-52 rounded-full blur-3xl ${
                    p.id === "arcane" ? "bg-arcane/25" : "bg-gold/20"
                  }`}
                />
                <div className="relative flex items-center gap-4">
                  <PathEmblem kind={p.id} />
                  <h3
                    className={`font-display text-2xl ${p.id === "arcane" ? "text-arcane" : "text-gold"}`}
                  >
                    {p.title}
                  </h3>
                </div>
                <p className="relative mt-5 font-serif text-lg text-foreground/90">{p.line}</p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <li
                      key={s}
                      className="border border-border/70 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
            ARCANIX unites software intelligence with physical innovation — arcane computation on one side, the forge of
            connected machines on the other.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal>
          <p className="label-caps">Featured quests</p>
          <h2 className="mt-3 font-display text-3xl text-gold-gradient sm:text-4xl">The Trials Await</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <article className="panel panel-glow rune-frame relative h-full p-6 transition-all duration-500">
                <p className="label-caps">{e.quest}</p>
                <h3 className="mt-3 font-serif text-xl text-foreground">{e.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{e.short}</p>
                <p className="mt-5 text-[0.62rem] uppercase tracking-[0.22em] text-gold">
                  {e.domain} · {e.mode}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <ArcaneLink to="/events">See all quests</ArcaneLink>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <Reveal>
          <p className="label-caps">The road ahead</p>
          <h2 className="mt-3 font-display text-3xl text-gold-gradient sm:text-4xl">Stages of the Ascension</h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map((t, i) => (
            <Reveal key={t.stage} delay={i * 0.06}>
              <li className="panel relative p-6">
                <p className="label-caps">{t.stage}</p>
                <p className="mt-2 font-serif text-lg text-foreground">{t.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <ArcaneLink to="/timeline" variant="arcane">
              Full timeline
            </ArcaneLink>
            <ArcaneLink to="/register">Choose your destiny</ArcaneLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export function PathEmblem({ kind }: { kind: "arcane" | "forge" }) {
  const stroke = kind === "arcane" ? "var(--arcane)" : "var(--gold)";
  return (
    <svg viewBox="0 0 64 64" className="size-12 shrink-0" aria-hidden>
      <g fill="none" stroke={stroke} strokeWidth="1.2">
        <circle cx="32" cy="32" r="26" strokeDasharray="4 6" />
        <circle cx="32" cy="32" r="19" opacity="0.6" />
        {kind === "arcane" ? (
          <>
            <path d="M32 10 L50 42 H14 Z" />
            <path d="M32 22 v20 M24 34 h16" opacity="0.8" />
            <circle cx="32" cy="32" r="3" fill={stroke} />
          </>
        ) : (
          <>
            <path d="M32 8 L36 24 L32 56 L28 24 Z" />
            <path d="M20 28 h24" />
            <path d="M24 40 h16 M26 46 h12" opacity="0.7" />
          </>
        )}
      </g>
    </svg>
  );
}

export { ArcaneButton };
