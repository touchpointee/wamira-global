"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { resourceArticleSchema } from "@/lib/validations";
import type { AdminResourceArticle } from "@/lib/resources";

const emptyValues = {
  title: "",
  slug: "",
  category: "Insights" as const,
  excerpt: "",
  content: "",
  image: "",
  publishedDate: new Date().toISOString().slice(0, 10),
  isPublished: true
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ResourceArticleForm({ article }: { article?: AdminResourceArticle }) {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<any>({
    resolver: zodResolver(resourceArticleSchema),
    defaultValues: article
      ? {
          title: article.title,
          slug: article.slug,
          category: article.category,
          excerpt: article.excerpt,
          content: article.content,
          image: article.image,
          publishedDate: new Date(article.publishedDate),
          isPublished: article.isPublished
        }
      : emptyValues
  });
  const errorMessage = (name: string) => {
    const message = errors[name]?.message;
    return typeof message === "string" ? message : undefined;
  };

  async function onSubmit(values: any) {
    setServerError("");
    const response = await fetch(article ? `/api/admin/resources/${article.id}` : "/api/admin/resources", {
      method: article ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        publishedDate: new Date(values.publishedDate).toISOString()
      })
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setServerError(data.message || "Unable to save article.");
      return;
    }

    router.push("/admin/resources");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded border border-black/5 bg-white p-6 shadow-dark">
      <Field label="Title" error={errorMessage("title")}>
        <input
          {...register("title")}
          onBlur={(event) => {
            const slug = slugify(event.target.value);
            if (slug) setValue("slug", slug, { shouldValidate: true });
          }}
        />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Slug" error={errorMessage("slug")}>
          <input {...register("slug")} />
        </Field>
        <Field label="Category" error={errorMessage("category")}>
          <select {...register("category")}>
            <option value="Insights">Insights</option>
            <option value="Guides">Guides</option>
            <option value="News">News</option>
          </select>
        </Field>
      </div>
      <Field label="Excerpt" error={errorMessage("excerpt")}>
        <textarea rows={3} {...register("excerpt")} />
      </Field>
      <Field label="Content" error={errorMessage("content")}>
        <textarea rows={9} {...register("content")} />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Image URL" error={errorMessage("image")}>
          <input {...register("image")} />
        </Field>
        <Field label="Published Date" error={errorMessage("publishedDate")}>
          <input type="date" {...register("publishedDate", { valueAsDate: true })} />
        </Field>
      </div>
      <label className="flex items-center gap-3 text-sm text-muted">
        <input type="checkbox" {...register("isPublished")} className="h-4 w-4 accent-gold-champagne" />
        Published on public Resources page
      </label>
      {serverError && <p className="text-sm text-red-300">{serverError}</p>}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Resource"}
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.push("/admin/resources")}>
          Cancel
        </Button>
      </div>
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
      <span className="mb-2 block text-sm font-semibold text-teal-deep">{label}</span>
      <div className="[&_input]:w-full [&_input]:rounded-sm [&_input]:border [&_input]:border-black/10 [&_input]:bg-ivory-warm [&_input]:px-4 [&_input]:py-3 [&_input]:text-charcoal [&_input]:outline-none [&_input]:transition [&_input]:focus:border-gold-champagne/60 [&_select]:w-full [&_select]:rounded-sm [&_select]:border [&_select]:border-black/10 [&_select]:bg-ivory-warm [&_select]:px-4 [&_select]:py-3 [&_select]:text-charcoal [&_select]:outline-none [&_select]:focus:border-gold-champagne/60 [&_textarea]:w-full [&_textarea]:rounded-sm [&_textarea]:border [&_textarea]:border-black/10 [&_textarea]:bg-ivory-warm [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-charcoal [&_textarea]:outline-none [&_textarea]:focus:border-gold-champagne/60">
        {React.cloneElement(children, { placeholder: label })}
      </div>
      {error && <span className="mt-2 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
