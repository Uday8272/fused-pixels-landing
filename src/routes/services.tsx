import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fused Pixels" },
      {
        name: "description",
        content:
          "Brand identity, performance ads, and web & content — what Fused Pixels delivers and how each engagement runs.",
      },
      { property: "og:title", content: "Services — Fused Pixels" },
      {
        property: "og:description",
        content:
          "Three ways we work: brand identity, performance advertising, and web & content. See what's included in each.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    index: "01",
    title: "Brand identity",
    summary:
      "Naming, positioning and the visual system that makes a business unmistakable across every touchpoint.",
    deliverables: [
      "Positioning and messaging line",
      "Logo suite and color system",
      "Type pairing and layout rules",
      "A brand guide your team can actually use",
    ],
    timing: "4–6 weeks",
  },
  {
    index: "02",
    title: "Performance ads",
    summary:
      "Paid social and search built around a real return target, with creative treated as the first lever.",
    deliverables: [
      "Account and audience audit",
      "Creative concepts and ad variants",
      "Weekly testing and budget shifts",
      "A reporting view you can read in two minutes",
    ],
    timing: "Monthly retainer",
  },
  {
    index: "03",
    title: "Web & content",
    summary:
      "Sites and social that keep the story moving, built to load fast and turn visitors into enquiries.",
    deliverables: [
      "Site or landing page design and build",
      "Editorial calendar and content prompts",
      "Production and motion assets",
      "Ongoing iteration from real traffic",
    ],
    timing: "Sprints of 2 weeks",
  },
];

const howWeWork = [
  {
    index: "a",
    title: "Fuse",
    body: "One working session with the people who own the outcome. We leave with the brief, the target, and the thing that makes you different.",
  },
  {
    index: "b",
    title: "Build",
    body: "Strategy and design happen in the same room and the same week. You see live work, not a status update.",
  },
  {
    index: "c",
    title: "Measure",
    body: "We watch the numbers that were agreed on day one, and keep fusing until they move.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              (a) Capabilities
            </span>
            <h1 className="animate-rise mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl">
              What we fuse.
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="mt-6 text-lg text-pretty text-muted-foreground md:mt-16">
              Three ways we work, and they are meant to overlap. Most clients start with one and end
              up needing the other two &mdash; that's the point of a studio that does all of it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <article
              key={service.index}
              className="grid gap-6 rounded-3xl border border-glass-border bg-glass p-7 backdrop-blur-2xl md:grid-cols-12 md:p-9"
            >
              <div className="md:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-muted-foreground">{service.index}</span>
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-4 max-w-[38ch] text-pretty text-muted-foreground">
                  {service.summary}
                </p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {service.timing}
                </p>
              </div>
              <div className="md:col-span-7">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  What you get
                </span>
                <ul className="mt-3 divide-y divide-foreground/10">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-baseline gap-4 py-3">
                      <span className="font-mono text-xs text-muted-foreground">&middot;</span>
                      <span className="text-pretty text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          (b) How we work
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Three moves, every engagement.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {howWeWork.map((step) => (
            <div
              key={step.index}
              className="rounded-3xl border border-glass-border bg-glass p-6 backdrop-blur-xl"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ({step.index})
              </span>
              <p className="mt-3 font-display text-xl font-semibold tracking-tight">{step.title}</p>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="relative overflow-hidden rounded-3xl border border-glass-border bg-glass p-8 backdrop-blur-2xl md:p-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-ice/25 blur-[90px]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Not sure which one you need?
              </h2>
              <p className="mt-2 max-w-[40ch] text-pretty text-muted-foreground">
                Send a paragraph about the problem. We'll tell you which of these &mdash; or none of
                them &mdash; is the right first move.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/85"
            >
              Ask us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
