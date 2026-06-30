import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import ResourceCard from "@/components/ResourceCard";
import SectionLabel from "@/components/SectionLabel";
import { getPublicResources } from "@/lib/resources";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resources",
  description: "Insights, guidance, and expert perspectives on private office, wealth, and global mobility."
};

export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  const resources = await getPublicResources();

  return (
    <>
      <PageHero
        title="Resources"
        breadcrumb="Resources"
        image={images.desk}
        subtitle="Insights, guidance, and expert perspectives on private office, wealth, and global mobility."
      />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <SectionLabel>Insights</SectionLabel>
          <h2 className="font-serif text-5xl text-teal-deep">Guidance for Global Lives</h2>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {["All", "Insights", "Guides", "News"].map((tab) => (
            <span key={tab} className="rounded-sm border border-black/5 bg-white px-4 py-2 text-sm text-muted first:border-gold-champagne/50 first:text-gold-champagne">
              {tab}
            </span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((article) => <ResourceCard key={article.slug} article={article} />)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded border border-gold-champagne/30 bg-cream-soft px-6 py-12 text-center">
          <h2 className="font-serif text-4xl text-teal-deep">Stay Informed</h2>
          <p className="mt-3 text-muted">Subscribe to receive the latest insights and updates.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
