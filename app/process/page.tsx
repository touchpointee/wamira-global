import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Process",
  description: "The Wamira Global execution framework."
};

const steps = [
  ["Strategic Discovery", "A private consultation to understand your objectives, requirements, and long-term goals."],
  ["Structural Mapping", "We define the jurisdictional and entity blueprint, including relevant holding and governance considerations."],
  ["Professional Alignment", "We coordinate the necessary legal, tax, accounting, banking, compliance, and government-service professionals around your project."],
  ["Execution Management", "We oversee document flow, approvals, communication, and implementation."],
  ["Ongoing Stewardship", "We remain available for ongoing coordination, expansion, restructuring, and strategic advisory."]
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="The Execution Framework."
        breadcrumb="Process"
        image={images.desk}
        subtitle="Our process is defined by discipline, confidentiality, and accountability."
      />
      <section className="bg-ivory-warm py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionLabel>Process</SectionLabel>
          <div className="space-y-5">
            {steps.map(([title, text], index) => (
              <article key={title} className="grid gap-5 border border-black/10 bg-white p-7 shadow-sm md:grid-cols-[90px_1fr]">
                <span className="font-serif text-5xl text-gold-champagne">{index + 1}.</span>
                <div>
                  <h2 className="font-serif text-3xl text-teal-deep">{title}</h2>
                  <p className="mt-3 text-base leading-7 text-charcoal/75">{text}</p>
                </div>
              </article>
            ))}
          </div>
          <Button href="/contact" className="mt-10">Initiate Your Private Consultation</Button>
        </div>
      </section>
    </>
  );
}
