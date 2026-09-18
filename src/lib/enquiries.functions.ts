import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100, "That name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().max(120, "That company name is too long").optional(),
  message: z
    .string()
    .trim()
    .min(10, "A sentence or two helps us reply properly")
    .max(2000, "Please keep it under 2000 characters"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      // Opaque sb_ keys are not JWTs; send only apikey, not a bearer token.
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabase.from("enquiries").insert({
      name: data.name,
      email: data.email,
      company: data.company?.length ? data.company : null,
      message: data.message,
    });

    if (error) {
      console.error("enquiry_insert_failed", error.message);
      return {
        ok: false,
        error: "We couldn't send that just now. Please try again, or email hello@fusedpixels.studio.",
      };
    }

    return { ok: true, error: null };
  });
