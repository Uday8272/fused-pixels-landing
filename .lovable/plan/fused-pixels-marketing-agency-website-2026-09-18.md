# Fused Pixels — marketing agency website

A three-page site in the "Ice glass fusion" style you picked: soft gradient light, frosted glass panels, Space Grotesk headlines over Inter body text, with a monospace accent used for labels and numbering. Copy is drafted so the site reads as a finished studio the moment it loads — you can rewrite any of it later.

## What you'll see

```text
/          Home      hero + "about the studio" + a short services teaser + a closing call to action
/services  Services  full list of offerings, each with what you get
/contact   Contact   enquiry form that really sends + direct email, phone and socials
```

The header (Fused Pixels mark, Home / Services / Contact, "Start a project") and the footer (contact line, nav) appear on every page.

## The look, carried over from your pick

- Background: the pale blue-to-pink diagonal gradient, with two large soft color blooms (ice blue, magenta) sitting behind the content.
- Surfaces: translucent white panels with heavy blur and hairline white borders; rounded corners, no hard shadows.
- Type: Space Grotesk bold for headlines, Inter for paragraphs, JetBrains Mono in small caps for the `(a) (b) (c)` labels, numbering and stats.
- Ink navy for primary buttons and text, magenta as the single hot accent, ice blue as the cool one.
- Motion: the hero headline lifts in, the side panel blurs into focus, list rows brighten and nudge their arrow on hover. Nothing else moves.
- The three principle rows on the home page stay as a numbered list, the services teaser stays as stacked rows, and the stats stay a row of three — same as the direction you chose.

## Content I'll write

- Home hero: positioning line, a two-sentence intro, and a glass "studio principle" panel.
- About section (on the home page): a heading plus three numbered principles and three stats.
- Services: brand identity, performance ads, web and content — expanded on the services page with deliverables for each, plus a short "how we work" strip.
- Contact: a line inviting an enquiry, the form, and direct details.
- Every page gets its own browser-tab title and social sharing description.

Placeholder details you should replace when you have them: email, phone number, and social handles. Nothing else needs your input before launch.

## Technical details

- TanStack Start routes: `src/routes/index.tsx` (home, with the about section inside it), `src/routes/services.tsx`, `src/routes/contact.tsx`; shared header/footer rendered around `<Outlet />` in `src/routes/__root.tsx` using `<Link>`.
- Design tokens go into `src/styles.css` as `oklch` variables (background, foreground, primary, accent, ice, mist, glass surface) mapped to Tailwind utilities — no hardcoded color classes in components. Fonts load from a `<link>` in the root route head.
- Backend: enable Lovable Cloud, add an `enquiries` table (name, email, company, message, created at) with row level security and the matching data-access grants, plus one policy allowing public submissions only.
- Form: React Hook Form + Zod on the client, validated again in a server function that inserts the row; success and failure both reported on the page. No admin login is built — you'd read submissions from the dashboard.
- Verification: lint/build output clean, then a Playwright pass through all three pages confirming navigation, hover states, and that a test submission lands in the table.
