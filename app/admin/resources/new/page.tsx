import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ResourceArticleForm from "@/components/ResourceArticleForm";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "New Resource",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default function NewResourcePage() {
  if (!isAdminAuthenticated()) redirect("/admin/login");

  return (
    <section className="min-h-screen px-5 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-champagne">Admin Portal</p>
        <h1 className="mt-3 font-serif text-5xl text-teal-deep">New Resource</h1>
        <p className="mb-8 mt-2 text-muted">Add a new public article to the Resources page.</p>
        <ResourceArticleForm />
      </div>
    </section>
  );
}
