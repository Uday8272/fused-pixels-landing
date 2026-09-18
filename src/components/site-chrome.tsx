import { useState } from "react";
import { Link } from "@tanstack/react-router";

const activeLink = "bg-glass-strong text-foreground";
const idleLink = "text-muted-foreground hover:bg-glass hover:text-foreground";

function Mark() {
  return (
    <span className="relative grid size-7 place-items-center rounded-md bg-accent">
      <span className="relative size-3.5 rounded-[4px] bg-ice mix-blend-multiply" aria-hidden="true" />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-glass-border bg-glass backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Fused Pixels — home"
          onClick={() => setOpen(false)}
        >
          <Mark />
          <span className="font-display text-lg font-bold tracking-tight">Fused Pixels</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: `rounded-full px-4 py-2 text-sm font-medium ${activeLink}` }}
            inactiveProps={{ className: `rounded-full px-4 py-2 text-sm font-medium ${idleLink}` }}
          >
            Home
          </Link>
          <Link
            to="/services"
            activeProps={{ className: `rounded-full px-4 py-2 text-sm font-medium ${activeLink}` }}
            inactiveProps={{ className: `rounded-full px-4 py-2 text-sm font-medium ${idleLink}` }}
          >
            Services
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: `rounded-full px-4 py-2 text-sm font-medium ${activeLink}` }}
            inactiveProps={{ className: `rounded-full px-4 py-2 text-sm font-medium ${idleLink}` }}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/85 sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid size-9 place-items-center rounded-full border border-glass-border bg-glass-strong transition-colors hover:bg-glass md:hidden"
          >
            <span className="flex flex-col gap-1" aria-hidden="true">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-glass-border px-6 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium hover:bg-glass"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium hover:bg-glass"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium hover:bg-glass"
            >
              Contact
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-glass-border bg-glass backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="flex items-center gap-2.5">
            <Mark />
            <span className="font-display text-lg font-bold tracking-tight">Fused Pixels</span>
          </span>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            hello@fusedpixels.studio &middot; +1 (415) 555-0132 &middot; @fusedpixels
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link
            to="/services"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70">
          &copy; 2026 Fused Pixels Studio
        </p>
      </div>
    </footer>
  );
}
