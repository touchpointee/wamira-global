import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  subject: z.string().min(2, "Please enter a subject."),
  message: z.string().min(10, "Please enter at least 10 characters.")
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address.")
});

export const resourceArticleSchema = z.object({
  title: z.string().min(2, "Title is required."),
  slug: z
    .string()
    .min(2, "Slug is required.")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens."),
  category: z.enum(["Insights", "Guides", "News"]),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters."),
  content: z.string().min(20, "Content must be at least 20 characters."),
  image: z.string().url("Enter a valid image URL."),
  publishedDate: z.coerce.date(),
  isPublished: z.boolean().default(true)
});

export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ResourceArticleInput = z.infer<typeof resourceArticleSchema>;
