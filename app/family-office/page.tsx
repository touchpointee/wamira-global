import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";
import { BookOpen, Building2, GraduationCap, Handshake, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Family Office",
  description: "Comprehensive support for family wealth, needs, privacy, and long-term vision."
};

const sections = [
  { title: "Governance & Advisory", text: "Support for family structures, decision-making, and trusted advisor coordination.", icon: Building2 },
  { title: "Lifestyle & Asset Coordination", text: "Coordinated support for properties, assets, travel, and daily family requirements.", icon: Sparkles },
  { title: "Legacy & Succession Planning", text: "Long-term planning support to preserve values, vision, and continuity.", icon: BookOpen },
  { title: "Philanthropy Support", text: "Helping families create meaningful impact through structured giving.", icon: HeartHandshake },
  { title: "Education Planning", text: "Guidance for the next generation's academic and personal development.", icon: GraduationCap },
  { title: "Lifestyle Management", text: "Dedicated support for family members' daily and global needs.", icon: Users }
];

const values = [
  { title: "Discretion", text: "Complete privacy in every family matter.", icon: ShieldCheck },
  { title: "Expertise", text: "A trusted network for specialist support.", icon: Handshake },
  { title: "Independence", text: "Objective coordination around your priorities.", icon: Building2 },
  { title: "Commitment", text: "Long-term attention for evolving family needs.", icon: HeartHandshake }
];

export default function FamilyOfficePage() {
  return (
    <>
      <PageHero title="Family Office" breadcrumb="Family Office" image={images.family} />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>Private Family Support</SectionLabel>
          <h2 className="font-serif text-5xl leading-tight text-ivory">
            Comprehensive support for your family's wealth, needs and long-term vision.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Wamira Global supports families with structured private office solutions designed to
            simplify administration, protect privacy, and preserve legacy across generations.
          </p>
        </div>
        <div className="relative min-h-[460px] overflow-hidden rounded border border-gold/20">
          <Image src={images.lounge} alt="Family office lounge" fill className="object-cover" />
        </div>
      </section>
      <section className="bg-midnight/60 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3">
          {sections.map((item) => <FeatureCard key={item.title} {...item} />)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h2 className="mb-10 font-serif text-5xl text-ivory">Family Office Values</h2>
        <div className="grid gap-5 md:grid-cols-4">
          {values.map((value) => <FeatureCard key={value.title} {...value} />)}
        </div>
      </section>
      <CTASection title="Let's Build Your Legacy Together" text="We are here to support your family's private office needs." button="Get in Touch" />
    </>
  );
}
