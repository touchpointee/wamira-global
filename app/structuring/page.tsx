import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Structuring",
  description: "Sophisticated UAE structures for governance, continuity, and ownership clarity."
};

const areas = [
  ["Foundation-Based Structures", "Governance and continuity planning for structured ownership."],
  ["Holding & SPV Layers", "Structures for ownership clarity and strategic asset organization."],
  ["Operating Companies", "Frameworks for founders and businesses establishing an active UAE presence."],
  ["Multi-Jurisdictional Frameworks", "Alignment of UAE entities with international interests to reduce cross-border complexity."]
];

export default function StructuringPage() {
  return (
    <>
      <PageHero
        title="Sophisticated Structures for Long-Term Control."
        breadcrumb="Structuring"
        image={images.office}
        subtitle="We go beyond standard company formation by coordinating structures designed around governance, continuity, and ownership clarity."
      />
      <section className="bg-ivory-warm py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>Our Structuring Areas</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Built Around Ownership, Control, and Continuity.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map(([title, text], index) => (
              <article key={title} className="border border-black/10 bg-white p-8 shadow-sm transition hover:border-gold-champagne/50">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-champagne">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-3xl text-teal-deep">{title}</h3>
                <p className="mt-4 text-base leading-7 text-charcoal/75">{text}</p>
              </article>
            ))}
          </div>
          <Button href="/contact" className="mt-10">Schedule a Private Consultation</Button>
        </div>
      </section>
    </>
  );
}
