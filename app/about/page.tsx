import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";
import { Layers, ShieldAlert, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Discreet, Precise, Trusted | About Wamira Global",
  description: "Learn why Wamira Global exists, our compliance-first mindset, unified oversight, and dedication to building correct corporate foundations."
};

const reasons = [
  {
    title: "Unified Oversight",
    text: "We eliminate the friction of managing separate registration agents, legal advisors, and accountants. We handle the entire ecosystem for you.",
    icon: Layers
  },
  {
    title: "Compliance-First Mindset",
    text: "We ensure your business is perfectly positioned for UAE Corporate Tax and international regulatory standards from day one.",
    icon: Award
  },
  {
    title: "Principal Accountability",
    text: "Every mandate is directed personally by the Principal. You receive a dedicated, senior point of contact and absolute confidentiality.",
    icon: FileText
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="Discreet. Precise. Trusted." 
        subtitle="We build correct, resilient corporate foundations."
        breadcrumb="About Us" 
        image={images.lounge} 
      />
      
      {/* Core Copy Section */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionLabel>Our Identity</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ivory leading-tight">
              A private corporate coordination office based in Dubai.
            </h2>
            <p className="mt-8 text-lg leading-8 text-muted">
              Wamira Global delivers tailored business setup, entity structuring, and compliance 
              management for clients who value precision and long-term security.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              We do not offer mass-market, transactional registrations. Instead, we evaluate your 
              commercial model first to design the correct corporate framework. We then manage every 
              moving part—licenses, corporate banking setups, and residency pathways—under unified leadership.
            </p>
          </div>
          
          <div className="relative min-h-[380px] overflow-hidden rounded border border-white/10 lg:col-span-5 bg-white/[0.02]">
            <Image src={images.office} alt="Bespoke private office interior" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="bg-midnight/60 py-24 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel>Operating Framework</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory">
              Why Wamira Global <span className="text-gold-light">Exists</span>
            </h2>
            <p className="mt-5 text-muted">
              We replace administrative friction with unified leadership and strict regulatory alignment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded border border-white/10 bg-obsidian p-8 transition duration-300 hover:border-gold/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-gold/10 text-gold-light">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-serif text-2xl text-ivory">{reason.title}</h3>
                <p className="text-sm leading-7 text-muted">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality & Engagement Section */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center">
        <div className="rounded border border-gold/20 bg-white/[0.02] p-8 md:p-12 shadow-dark">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-3xl text-ivory">Confidentiality & Engagement</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Mutual confidentiality is observed from first contact, and formal NDAs are provided on request. 
            We accept a limited number of client engagements annually where discretion, proper structure, 
            and coordinated execution are essential to the outcome.
          </p>
        </div>
      </section>

      <CTASection 
        title="Arrange a Private Consultation" 
        text="Discuss your corporate structure, compliance strategy, and residency requirements under strict confidentiality." 
        button="Get In Touch"
      />
    </>
  );
}
