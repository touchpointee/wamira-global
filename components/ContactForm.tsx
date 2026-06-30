"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { services } from "@/data/services";
import { contactSchema, type ContactInput } from "@/lib/validations";

export default function ContactForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setServerError("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    if (!response.ok) {
      setServerError(data.message || "We could not send your message. Please try again.");
      return;
    }
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded border border-white/10 bg-white/[0.04] p-6 shadow-dark">
      <div className="grid gap-4">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input {...register("fullName")} />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input type="email" {...register("email")} />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} />
        </Field>
        <Field label="Service Interest" error={errors.serviceInterest?.message}>
          <select {...register("serviceInterest")} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>{service.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <input {...register("subject")} />
        </Field>
        <Field label="Your Message" error={errors.message?.message}>
          <textarea rows={6} {...register("message")} />
        </Field>
      </div>
      {serverError && <p className="mt-4 text-sm text-red-300">{serverError}</p>}
      <Button type="submit" disabled={isSubmitting} className="mt-6 w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactElement;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <div className="[&_input]:w-full [&_input]:rounded-sm [&_input]:border [&_input]:border-white/10 [&_input]:bg-obsidian/70 [&_input]:px-4 [&_input]:py-3 [&_input]:text-ivory [&_input]:outline-none [&_input]:transition [&_input]:placeholder:text-muted [&_input]:focus:border-gold/60 [&_select]:w-full [&_select]:rounded-sm [&_select]:border [&_select]:border-white/10 [&_select]:bg-obsidian/70 [&_select]:px-4 [&_select]:py-3 [&_select]:text-ivory [&_select]:outline-none [&_select]:focus:border-gold/60 [&_textarea]:w-full [&_textarea]:rounded-sm [&_textarea]:border [&_textarea]:border-white/10 [&_textarea]:bg-obsidian/70 [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-ivory [&_textarea]:outline-none [&_textarea]:focus:border-gold/60">
        {React.cloneElement(children, { placeholder: label })}
      </div>
      {error && <span className="mt-2 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
