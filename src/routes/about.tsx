import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Reveal } from "@/components/arcanix/PageShell";
import { ArcaneLink } from "@/components/arcanix/ArcaneButton";
import { PathEmblem } from "@/routes/index";
import { brand, paths } from "@/data/arcanix";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Academy — About ARCANIX 2K26 | KSRCE IoT" },
      {
        name: "description",
        content:
          "About ARCANIX 2K26: the vision, the two paths and the host — Department of Internet of Things, K.S.R. College of Engineering.",
      },
      { property: "og:title", content: "The Academy — About ARCANIX 2K26" },
      {
        property: "og:description",
        content: "The vision behind ARCANIX 2K26, the Arcane and Forge paths, and the hosting department.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell
      eyebrow="The Academy"
      title="Enter the Academy"
      lead="ARCANIX is an academy of makers — a place where software intelligence and connected hardware are studied as two halves of one craft."
    >
      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
        {[
          {
            t: "The Vision",
            d: "A symposium built as a journey: every event is a quest, every workshop a scroll, every winner an ascension. Beneath the fantasy, it is a serious technical platform for students to build, compete and learn.",
          },
          {
            t: "The Host",
            d: `${brand.department}, ${brand.college}, ${brand.location}. The department focuses on connected systems — sensors, embedded intelligence and the software that binds them.`,
          },
          {
            t: "Who May Enter",
            d: "Undergraduate students from any institution with a valid college ID. Individual and team quests are both available; details for each are listed on the Events page.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.08}>
            <article className="panel rune-frame relative h-full p-7">
              <h2 className="font-serif text-xl text-gold">{c.t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-gold-gradient sm:text-4xl">The Two Paths</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <article className="panel panel-glow relative h-full overflow-hidden p-8 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <PathEmblem kind={p.id} />
                  <h3 className={`font-display text-2xl ${p.id === "arcane" ? "text-arcane" : "text-gold"}`}>
                    {p.title}
                  </h3>
                </div>
                <p className="mt-5 font-serif text-lg text-foreground/90">{p.line}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.skills.map((s) => (
                    <li key={s} className="border border-border/60 px-3 py-2">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <Reveal>
          <div className="panel rune-frame relative flex flex-wrap items-center justify-between gap-6 p-8">
            <p className="max-w-md font-serif text-xl text-foreground/90">
              Ready to take your place in the arena?
            </p>
            <div className="flex flex-wrap gap-4">
              <ArcaneLink to="/events" variant="arcane">
                View quests
              </ArcaneLink>
              <ArcaneLink to="/register">Register now</ArcaneLink>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
