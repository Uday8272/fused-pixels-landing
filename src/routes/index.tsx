import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fused Pixels — Design-led Marketing Studio" },
      {
        name: "description",
        content:
          "We press strategy, design and media together until they fuse. An independent marketing studio for brands that refuse to look like everyone else.",
      },
      { property: "og:title", content: "Fused Pixels — Design-led Marketing Studio" },
      {
        property: "og:description",
        content:
          "Strategy, design and media in one studio. See who we are, what we fuse, and start a project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const principles = [
  {
    index: "01",
    title: "Strategy and pixels, one table.",
    body: "No account-manager telephone game. The people who think the idea are the people who build it.",
  },
  {
    index: "02",
    title: "We show, we don't narrate.",
    body: "Every engagement ends in something live — a site, a launch, a campaign — not a folder of files.",
  },
  {
    index: "03",
    title: "Bright beats safe.",
    body: "If two of your competitors look identical, that's the problem we're paid to fix.",
  },
];

const stats = [
  { value: "120+", label: "Launches shipped" },
  { value: "9 yrs", label: "Fusing pixels" },
  { value: "38", label: "Awards & mentions" },
];

const teaser = [
  {
    index: "01",
    title: "Brand identity",
    body: "Naming, systems, and the words that make it stick.",
  },
  {
    index: "02",
    title: "Performance ads",
    body: "Paid social and search, measured to the last click.",
  },
  {
    index: "03",
    title: "Web & content",
    body: "Sites and social that keep the story moving.",
  },
];

function Index() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              (a) Independent marketing studio
            </span>
            <h1 className="animate-rise mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl">
              We press two colors together until they fuse.
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg text-pretty text-muted-foreground">
              Fused Pixels is a marketing studio that blends strategy, design and media into one
              bright, workable identity. We don't hand you a deck &mdash; we build the thing that
              ships.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/85"
              >
                Book a discovery call
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-glass-border bg-glass-strong px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-glass"
              >
                See what we do
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="animate-fuse flex h-full flex-col justify-end rounded-3xl border border-glass-border bg-glass p-6 backdrop-blur-2xl">
              <p className="font-display text-xl font-medium leading-snug tracking-tight">
                &ldquo;Fusion is our method: strategy + design, never a hand-off between two
                teams.&rdquo;
              </p>
              <span className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                &mdash; Studio principle 01
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              (b) The studio
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              A small team that treats your brand like its own.
            </h2>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-foreground/10">
              {principles.map((principle) => (
                <li key={principle.index} className="flex gap-5 py-4">
                  <span className="font-mono text-sm text-muted-foreground">{principle.index}</span>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight">
                      {principle.title}
                    </p>
                    <p className="mt-1 text-sm text-pretty text-muted-foreground">{principle.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-glass-border bg-glass p-4 backdrop-blur-xl"
                >
                  <p className="font-display text-3xl font-bold tracking-tight">{stat.value}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              (c) Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              What we fuse
            </h2>
          </div>
          <Link
            to="/services"
            className="hidden font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Full list &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {teaser.map((item) => (
            <Link
              key={item.index}
              to="/services"
              className="group flex items-center justify-between rounded-2xl border border-glass-border bg-glass px-6 py-5 backdrop-blur-xl transition-colors hover:bg-glass-strong"
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-sm text-muted-foreground">{item.index}</span>
                <div>
                  <p className="font-display text-xl font-semibold tracking-tight">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="relative overflow-hidden rounded-3xl border border-glass-border bg-glass p-8 backdrop-blur-2xl md:p-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/20 blur-[90px]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Have something worth fusing?
              </h2>
              <p className="mt-2 max-w-[40ch] text-pretty text-muted-foreground">
                Tell us where you're headed. We'll tell you how we'd get you there &mdash; and
                whether we're the right studio for it.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/85"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
