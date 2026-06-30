import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import { services, trustFeatures } from "@/data/services";
import { images } from "@/lib/utils";
import { BriefcaseBusiness, Building, Plane, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Structuring & UAE Business Setup | Wamira Global",
  description: "Discreet and professional corporate structuring, business setup, licensing, and residency visas in the UAE."
};

const pillars = [
  {
    title: "Corporate Strategy & Compliance",
    text: "Selecting the optimal jurisdiction (mainland or freezone structure) for your specific business activities, while insulating you from tax and legal risks.",
    icon: ShieldCheck
  },
  {
    title: "Licensing & Banking",
    text: "Securing your official corporate license and expertly guiding your company profile through the banking onboarding process.",
    icon: Building
  },
  {
    title: "Visas & Property Advisory",
    text: "Coordinating executive residency and providing independent real estate investment advisory, entirely free from broker pressure.",
    icon: Plane
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-32 flex items-center">
        <Image src={images.hero} alt="Luxury corporate offices in Dubai" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/40" />
        <div className="absolute inset-0 bg-luxury-radial" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
                Wamira Global <span className="text-muted font-normal">|</span> <span className="italic font-serif normal-case font-medium tracking-normal text-gold-light/90">Building Legacies.</span>
              </p>
            </div>
            
            <h1 className="font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-8xl">
              Corporate Structuring <br />
              <span className="text-gold-light">& UAE Business Setup</span>
            </h1>
            
            <h2 className="mt-8 font-serif text-xl md:text-3xl text-ivory/80 italic leading-relaxed max-w-3xl">
              Strategic planning. Institutional execution. One point of contact.
            </h2>
            
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              Wamira Global assists international founders, trading enterprises, and family offices in 
              establishing their corporate presence in the UAE. Whether you require a standard commercial 
              operating company, a holding structure, or asset protection, we manage the entire process with 
              absolute discretion.
            </p>
            
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              We handle corporate licensing, tax compliance strategy, bank account coordination, and 
              residency visas under a single point of accountability. You focus on your commercial objectives; 
              we manage the regulatory framework and deliver an operationally ready business.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row items-start sm:items-center">
              <Button href="/contact">Arrange a Private Consultation</Button>
              <Button href="/services" variant="secondary">Discover Our Services</Button>
            </div>
          </div>
        </div>

        {/* Floating Trust Indicators */}
        <div className="absolute inset-x-0 bottom-0 hidden lg:block border-t border-white/5 bg-obsidian/40 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/5">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 p-6">
                <feature.icon className="h-6 w-6 text-gold shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-ivory">{feature.title}</h3>
                  <p className="text-xs text-muted mt-0.5">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features on Mobile */}
      <section className="block lg:hidden border-y border-white/5 bg-[#091615]">
        <div className="grid gap-px sm:grid-cols-2">
          {trustFeatures.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 bg-obsidian p-6">
              <feature.icon className="h-6 w-6 text-gold shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-ivory">{feature.title}</h3>
                <p className="text-xs text-muted mt-0.5">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Pillars Section */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionLabel>Core Foundations</SectionLabel>
          <h2 className="font-serif text-5xl leading-tight text-ivory">
            Our Pillars of <span className="text-gold-light">Execution</span>
          </h2>
          <p className="mt-5 text-muted">
            We operate at the intersection of business strategy, regulatory governance, and private advisory to secure your long-term success.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="group relative rounded border border-white/10 bg-white/[0.03] p-8 shadow-dark transition duration-300 hover:-translate-y-1 hover:border-gold/30">
              <div className="absolute top-0 right-0 p-4 font-serif text-4xl text-white/[0.02] transition group-hover:text-gold/[0.04] font-bold">
                0{i + 1}
              </div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 text-gold-light transition group-hover:bg-gold/20">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl text-ivory">{pillar.title}</h3>
              <p className="text-muted leading-7 text-sm">{pillar.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Core Services Preview */}
      <AnimatedSection className="bg-midnight/60 py-24 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel>Services Overview</SectionLabel>
            <h2 className="font-serif text-5xl leading-tight text-ivory">
              Setup Strategy & <span className="text-gold-light">Compliance</span>
            </h2>
            <p className="mt-5 text-muted">
              Explore our core corporate services engineered for global citizens, asset holding, and active commercial operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary">View All Core Services</Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Outcome & Timeline Highlights */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-24 text-center">
        <div className="mx-auto max-w-4xl rounded border border-gold/35 bg-gradient-to-b from-white/[0.04] to-transparent px-8 py-16 shadow-gold">
          <SectionLabel>Mandate Timeline</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-ivory leading-tight max-w-3xl mx-auto">
            From private conversation to <span className="text-gold-light">handover</span>.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted max-w-2xl mx-auto">
            From our first private conversation to handing over your fully operational corporate structure, 
            most mandates are completed within <strong>6 to 10 weeks</strong>, subject to government and banking timelines.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button href="/contact">Arrange a Private Consultation</Button>
            <p className="text-xs text-muted tracking-wide max-w-md mt-2">
              Based in the UAE — serving clients across Europe, Asia, Africa, and the Middle East.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <CTASection 
        title="Arrange a Private Consultation" 
        text="Protect your interests, insulate your assets, and build a lasting corporate foundation in the UAE." 
        button="Get In Touch"
      />
    </>
  );
}
