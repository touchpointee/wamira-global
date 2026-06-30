import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";
import { Award, Gem, Handshake, LockKeyhole } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "A private office and concierge partner built around discretion, trust, and legacy."
};

const values = [
  { title: "Discretion", text: "We protect your privacy with absolute care.", icon: LockKeyhole },
  { title: "Integrity", text: "We act with honesty and transparency.", icon: Handshake },
  { title: "Excellence", text: "We deliver beyond expectations.", icon: Award },
  { title: "Commitment", text: "We are dedicated to your success.", icon: Gem }
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" breadcrumb="About Us" image={images.lounge} />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Wamira Global</SectionLabel>
          <h2 className="font-serif text-5xl text-ivory">A Private Office Built Around Trust</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Wamira Global is a private office and concierge partner dedicated to simplifying complex
            lives. We support individuals, families, entrepreneurs, and global citizens with discreet,
            tailored solutions that protect time, enhance comfort, and preserve legacy.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded border border-gold/20">
            <Image src={images.office} alt="Private office card and desk" fill className="object-cover" />
          </div>
          <div className="grid gap-6">
            <div className="rounded border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-serif text-3xl text-ivory">Our Mission</h3>
              <p className="text-muted">To enhance life by managing the details with discretion, precision, and care.</p>
            </div>
            <div className="rounded border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-serif text-3xl text-ivory">Our Vision</h3>
              <p className="text-muted">To be the world's most trusted partner for high-net-worth individuals and families.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-midnight/60 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h2 className="mb-10 font-serif text-5xl text-ivory">Our Values</h2>
          <div className="grid gap-5 md:grid-cols-4">
            {values.map((value) => <FeatureCard key={value.title} {...value} />)}
          </div>
        </div>
      </section>
      <CTASection title="Let's Build Your Legacy Together" text="Contact us today to discover how we can support you." />
    </>
  );
}
