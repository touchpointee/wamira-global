import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { getPublicResourceBySlug } from "@/lib/resources";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getPublicResourceBySlug(params.slug);

  if (!article) {
    return {
      title: "Resource Not Found"
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }]
    }
  };
}

export default async function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const article = await getPublicResourceBySlug(params.slug);

  if (!article) notFound();

  const paragraphs = (article.content || article.excerpt)
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <>
      <article>
        <section className="relative min-h-[560px] overflow-hidden pt-32">
          <Image src={article.image} alt={article.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/86 to-obsidian/45" />
          <div className="absolute inset-0 bg-luxury-radial" />
          <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-24">
            <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition hover:text-gold">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
              <span>{article.category}</span>
              <span className="h-px w-10 bg-gold/50" />
              <span>{article.date}</span>
            </div>
            <h1 className="font-serif text-5xl leading-tight text-ivory md:text-7xl">{article.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">{article.excerpt}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20">
          <div className="rounded border border-white/10 bg-white/[0.035] p-6 shadow-dark md:p-10">
            <div className="space-y-7 text-lg leading-9 text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-white/10 pt-8">
              <Button href="/resources" variant="secondary">
                Back to Resources
              </Button>
            </div>
          </div>
        </section>
      </article>
      <CTASection title="Need Private Guidance?" text="Our team is here to support your world with discretion and care." button="Get In Touch" />
    </>
  );
}
