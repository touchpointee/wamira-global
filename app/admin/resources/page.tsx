import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AdminLogoutButton from "@/components/AdminLogoutButton";
import DeleteResourceButton from "@/components/DeleteResourceButton";
import Button from "@/components/Button";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAdminResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Manage Resources",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default async function AdminResourcesPage() {
  if (!isAdminAuthenticated()) redirect("/admin/login");
  const resources = await getAdminResources();

  return (
    <section className="min-h-screen px-5 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Admin Portal</p>
            <h1 className="mt-3 font-serif text-5xl text-ivory">Resources</h1>
            <p className="mt-2 text-muted">Create, edit, publish, and remove public resource articles.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/admin/resources/new">New Resource</Button>
            <AdminLogoutButton />
          </div>
        </div>

        <div className="overflow-hidden rounded border border-white/10 bg-white/[0.04] shadow-dark">
          <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr_0.7fr_1fr] gap-4 border-b border-white/10 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-light max-lg:hidden">
            <span>Title</span>
            <span>Category</span>
            <span>Date</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
          {resources.length === 0 ? (
            <div className="px-5 py-12 text-center text-muted">No resources in MongoDB yet. Create your first article.</div>
          ) : (
            resources.map((article) => (
              <div
                key={article.id}
                className="grid gap-4 border-b border-white/10 px-5 py-5 last:border-b-0 lg:grid-cols-[1.6fr_0.8fr_0.8fr_0.7fr_1fr] lg:items-center"
              >
                <div>
                  <h2 className="font-semibold text-ivory">{article.title}</h2>
                  <p className="mt-1 text-sm text-muted">/{article.slug}</p>
                </div>
                <p className="text-sm text-muted">{article.category}</p>
                <p className="text-sm text-muted">{article.date}</p>
                <span className={`w-fit rounded-sm border px-3 py-1 text-xs ${article.isPublished ? "border-gold/40 text-gold-light" : "border-white/10 text-muted"}`}>
                  {article.isPublished ? "Published" : "Draft"}
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href={`/admin/resources/${article.id}/edit`} className="rounded-sm border border-gold/40 px-3 py-2 text-sm text-gold-light transition hover:bg-gold/10">
                    Edit
                  </Link>
                  <DeleteResourceButton id={article.id} title={article.title} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
