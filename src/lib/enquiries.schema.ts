import { z } from "zod";

export const enquirySchema = z.object({
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
