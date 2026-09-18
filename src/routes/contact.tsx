import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiry } from "@/lib/enquiries.functions";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiries.schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fused Pixels" },
      {
        name: "description",
        content:
          "Tell Fused Pixels what you're working on. Enquiries get a real reply from the studio within one working day.",
      },
      { property: "og:title", content: "Contact — Fused Pixels" },
      {
        property: "og:description",
        content:
          "Send a paragraph about the problem. A designer and a strategist will read it and reply within one working day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "h-11 rounded-xl border-glass-border bg-glass-strong px-4 text-sm text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ice";

function ContactPage() {
  const sendEnquiry = useServerFn(submitEnquiry);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    try {
      const result = await sendEnquiry({ data: values });
      if (result.ok) {
        setSent(true);
        reset();
      } else {
        setFormError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setFormError("Something went wrong. Please try again, or email hello@fusedpixels.studio.");
    }
  });

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            (a) Say hello
          </span>
          <h1 className="animate-rise mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl">
            Tell us what you're fusing.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-pretty text-muted-foreground">
            One paragraph is enough. A designer and a strategist read every enquiry, and you'll hear
            back within one working day &mdash; even if the answer is "not us, but talk to this
            studio".
          </p>

          <div className="animate-fuse mt-8 rounded-3xl border border-glass-border bg-glass p-6 backdrop-blur-2xl md:p-8">
            {sent ? (
              <div role="status" aria-live="polite" className="py-6 text-center">
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  That's landed. Thank you.
                </h2>
                <p className="mx-auto mt-3 max-w-[40ch] text-pretty text-muted-foreground">
                  Your enquiry is with the studio. Expect a reply from a person, not an autoresponder,
                  within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-glass-border bg-glass-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-glass"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="mb-2 font-mono text-xs uppercase tracking-wide">
                      Name
                    </Label>
                    <Input
                      id="name"
                      autoComplete="name"
                      placeholder="Ada Sundar"
                      aria-invalid={Boolean(errors.name)}
                      className={fieldClass}
                      {...register("name")}
                    />
                    {errors.name ? (
                      <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 font-mono text-xs uppercase tracking-wide">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className={fieldClass}
                      {...register("email")}
                    />
                    {errors.email ? (
                      <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="mb-2 font-mono text-xs uppercase tracking-wide">
                    Company <span className="text-muted-foreground/70">(optional)</span>
                  </Label>
                  <Input
                    id="company"
                    autoComplete="organization"
                    placeholder="Where you work"
                    aria-invalid={Boolean(errors.company)}
                    className={fieldClass}
                    {...register("company")}
                  />
                  {errors.company ? (
                    <p className="mt-2 text-xs text-destructive">{errors.company.message}</p>
                  ) : null}
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 font-mono text-xs uppercase tracking-wide">
                    What's the project?
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="A new brand, a relaunch, a paid push that isn't working — tell us the shape of it."
                    aria-invalid={Boolean(errors.message)}
                    className="rounded-xl border-glass-border bg-glass-strong px-4 py-3 text-sm text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ice"
                    {...register("message")}
                  />
                  {errors.message ? (
                    <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>
                  ) : null}
                </div>

                {formError ? (
                  <p role="alert" className="text-sm text-destructive">
                    {formError}
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-none transition-all hover:-translate-y-0.5 hover:bg-primary/85"
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry"}
                  </Button>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Replies in 1 working day
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="rounded-3xl border border-glass-border bg-glass p-6 backdrop-blur-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                (b) Or reach us directly
              </span>
              <dl className="mt-4 divide-y divide-foreground/10">
                <div className="py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:hello@fusedpixels.studio"
                      className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
                    >
                      hello@fusedpixels.studio
                    </a>
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+14155550132"
                      className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
                    >
                      +1 (415) 555-0132
                    </a>
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Social
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold tracking-tight">
                    @fusedpixels
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-glass-border bg-glass p-6 backdrop-blur-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                (c) Good to know
              </span>
              <ul className="mt-3 space-y-3 text-sm text-pretty text-muted-foreground">
                <li>We take on two new projects a month, so timelines start when a slot opens.</li>
                <li>Typical engagements run from 4 weeks to a monthly retainer.</li>
                <li>
                  Not sure what to ask for? Read{" "}
                  <Link to="/services" className="text-foreground underline underline-offset-4">
                    what we fuse
                  </Link>{" "}
                  first.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
