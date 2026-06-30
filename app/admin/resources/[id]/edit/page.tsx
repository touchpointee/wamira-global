import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ResourceArticleForm from "@/components/ResourceArticleForm";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAdminResourceById } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Edit Resource",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default async function EditResourcePage({ params }: { params: { id: string } }) {
  if (!isAdminAuthenticated()) redirect("/admin/login");
  const article = await getAdminResourceById(params.id);
  if (!article) notFound();

  return (
    <section className="min-h-screen px-5 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Admin Portal</p>
        <h1 className="mt-3 font-serif text-5xl text-ivory">Edit Resource</h1>
        <p className="mb-8 mt-2 text-muted">Update article content, image, category, and publish status.</p>
        <ResourceArticleForm article={article} />
      </div>
    </section>
  );
}
