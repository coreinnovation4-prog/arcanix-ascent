import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";
import { PageShell, Reveal } from "@/components/arcanix/PageShell";
import { ArcaneButton, ArcaneLink } from "@/components/arcanix/ArcaneButton";
import { events, type ArcanixEvent, type Domain } from "@/data/arcanix";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Quests — Events at ARCANIX 2K26 | KSRCE IoT" },
      {
        name: "description",
        content:
          "Accept your quest: IoT, AI, robotics, software and cybersecurity events at ARCANIX 2K26, KSRCE Department of Internet of Things.",
      },
      { property: "og:title", content: "Quests — Events at ARCANIX 2K26" },
      {
        property: "og:description",
        content: "Six technical quests spanning IoT, AI, robotics, software, cyber and design.",
      },
    ],
  }),
  component: Events,
});

const domains: (Domain | "All")[] = ["All", "IoT", "AI", "Robotics", "Software", "Cyber", "Design"];

function Difficulty({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={`Difficulty ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`size-3.5 ${n <= level ? "fill-gold text-gold" : "text-border"}`}
          aria-hidden
        />
      ))}
    </span>
  );
}

function Events() {
  const [filter, setFilter] = useState<Domain | "All">("All");
  const [active, setActive] = useState<ArcanixEvent | null>(null);
  const list = filter === "All" ? events : events.filter((e) => e.domain === filter);

  return (
    <PageShell
      eyebrow="The Trials"
      title="Accept Your Quest"
      lead="Each event is a quest with its own difficulty, domain and reward. Open a quest to read its rules, rounds and coordinators."
    >
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div role="tablist" aria-label="Filter by domain" className="flex flex-wrap gap-2">
          {domains.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={filter === d}
              onClick={() => setFilter(d)}
              className={`border px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] transition-colors ${
                filter === d
                  ? "border-gold text-gold shadow-gold"
                  : "border-border/70 text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.06}>
              <article className="panel panel-glow rune-frame group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500">
                <span
                  aria-hidden
                  className={`absolute -right-20 -top-20 size-48 rounded-full blur-3xl transition-opacity duration-500 ${
                    e.path === "arcane" ? "bg-arcane/20" : "bg-gold/15"
                  } opacity-60 group-hover:opacity-100`}
                />
                <div className="relative flex items-center justify-between">
                  <p className="label-caps">{e.quest}</p>
                  <Difficulty level={e.difficulty} />
                </div>
                <h2 className="relative mt-4 font-display text-2xl text-foreground">{e.name}</h2>
                <p className="relative mt-3 text-sm text-muted-foreground">{e.short}</p>

                <dl className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-[0.62rem] uppercase tracking-[0.16em]">
                  {[
                    ["Domain", e.domain],
                    ["Mode", e.mode],
                    ["Duration", e.duration],
                    ["Prize", e.prize],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-muted-foreground/70">{k}</dt>
                      <dd className="mt-1 text-gold">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="relative mt-7 pt-1">
                  <ArcaneButton
                    variant={e.path === "arcane" ? "arcane" : "gold"}
                    onClick={() => setActive(e)}
                    aria-haspopup="dialog"
                  >
                    Accept Quest
                  </ArcaneButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>{active && <QuestModal event={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </PageShell>
  );
}

function QuestModal({ event, onClose }: { event: ArcanixEvent; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${event.name} details`}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(ev) => ev.stopPropagation()}
        className="panel rune-frame relative max-h-[85vh] w-full max-w-3xl overflow-y-auto p-7 sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quest details"
          className="absolute right-4 top-4 grid size-9 place-items-center border border-border/70 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
        >
          <X className="size-4" />
        </button>

        <p className="label-caps">{event.quest}</p>
        <h2 className="mt-3 font-display text-3xl text-gold-gradient">{event.name}</h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{event.description}</p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-[0.65rem] uppercase tracking-[0.16em] sm:grid-cols-3">
          {[
            ["Domain", event.domain],
            ["Mode", event.mode],
            ["Team size", event.teamSize],
            ["Duration", event.duration],
            ["Timing", event.timing],
            ["Venue", event.venue],
            ["Prize", event.prize],
            ["Eligibility", event.eligibility],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted-foreground/70">{k}</dt>
              <dd className="mt-1 normal-case tracking-normal text-foreground">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="label-caps">Rounds</h3>
            <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
              {event.rounds.map((r) => (
                <li key={r} className="border-l border-arcane/60 pl-3">
                  {r}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="label-caps">Rules</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {event.rules.map((r) => (
                <li key={r} className="border-l border-gold/50 pl-3">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="label-caps">Coordinators</h3>
          <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
            {event.coordinators.map((c) => (
              <li key={c.name}>
                {c.name} — {c.phone}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9">
          <ArcaneLink to="/register">Register for this quest</ArcaneLink>
        </div>
      </motion.div>
    </motion.div>
  );
}
