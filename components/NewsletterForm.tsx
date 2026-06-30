"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterInput) {
    setMessage("");
    setError("");
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.message || "Subscription failed. Please try again.");
      return;
    }
    setMessage(data.message || "Thank you for subscribing.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full rounded-sm border border-white/10 bg-obsidian/70 px-4 py-3 text-ivory outline-none transition placeholder:text-muted focus:border-gold/60"
        />
        {errors.email && <p className="mt-2 text-left text-xs text-red-300">{errors.email.message}</p>}
        {message && <p className="mt-2 text-left text-xs text-gold-light">{message}</p>}
        {error && <p className="mt-2 text-left text-xs text-red-300">{error}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}
