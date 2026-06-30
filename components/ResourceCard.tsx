import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PublicResourceArticle } from "@/lib/resources";

export default function ResourceCard({ article }: { article: PublicResourceArticle }) {
  return (
    <article className="group overflow-hidden rounded border border-white/8 bg-white/[0.04] shadow-dark transition duration-300 hover:-translate-y-1 hover:border-gold/40">
      <div className="relative h-52 overflow-hidden">
        <Image src={article.image} alt={article.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-gold-light">
          <span>{article.category}</span>
          <span className="h-px w-8 bg-gold/50" />
          <span>{article.date}</span>
        </div>
        <h3 className="mb-3 font-serif text-2xl text-ivory">{article.title}</h3>
        <p className="mb-5 text-sm leading-6 text-muted">{article.excerpt}</p>
        <Link href={`/resources/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
