import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "The Legacy Standard philosophy of Wamira Global."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="The Legacy Standard"
        breadcrumb="About"
        image={images.lounge}
        subtitle="Legacy is shaped through intention, structure, and disciplined execution."
      />
      <section className="bg-ivory-warm py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden border border-gold-champagne/35 bg-cream-soft">
            <Image src={images.office} alt="Private advisory office" fill className="object-cover" />
          </div>
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">The Legacy Standard</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-charcoal/75">
              <p>Legacy is shaped through intention, structure, and disciplined execution.</p>
              <p>At Wamira Global, we believe the way you enter the UAE determines your ability to grow, protect continuity, and build long-term value.</p>
              <p>Our approach is defined by discreet coordination, strategic thinking, and a commitment to helping you build something designed to endure.</p>
            </div>
            <Button href="/contact" className="mt-8">Initiate Your Private Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
