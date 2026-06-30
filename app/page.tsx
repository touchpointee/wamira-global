import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import { services, trustFeatures } from "@/data/services";
import { images } from "@/lib/utils";
import { Building, Plane, ShieldCheck } from "lucide-react";

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
      <section className="relative flex min-h-[100svh] overflow-hidden pt-24 lg:h-[100svh] lg:items-center">
        <Image src={images.hero} alt="Luxury corporate offices in Dubai" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/85 to-teal-dark/40" />
        <div className="absolute inset-0 bg-luxury-radial opacity-60" />
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-8 sm:pb-28 md:pt-10 lg:pb-24">
          <div className="sm:hidden">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-champagne/70" />
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-gold-champagne">
                Wamira Global
              </p>
            </div>

            <h1 className="font-serif text-[2.9rem] leading-[0.95] text-white">
              UAE Business <span className="block text-gold-champagne">Setup</span>
            </h1>

            <p className="mt-4 font-serif text-xl italic leading-snug text-white/90">
              Strategic planning. Institutional execution. One accountable partner.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-white/82">
              We help founders, trading enterprises, and family offices establish UAE corporate structures with discretion, compliance, and operational clarity.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {[
                "Licensing",
                "Banking",
                "Tax strategy",
                "Residency visas"
              ].map((item) => (
                <div key={item} className="border border-white/15 bg-teal-dark/55 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button href="/contact" className="w-full">Private Consultation</Button>
              <Button href="/services" variant="secondary" className="w-full border-white text-white hover:bg-white/10">View Services</Button>
            </div>
          </div>

          <div className="hidden max-w-3xl sm:block">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-champagne/60" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-champagne">
                Wamira Global <span className="text-white/40 font-normal">|</span> <span className="italic font-serif normal-case font-medium tracking-normal text-white/90">Building Legacies.</span>
              </p>
            </div>
            
            <h1 className="font-serif text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Corporate Structuring <br />
              <span className="text-gold-champagne">& UAE Business Setup</span>
            </h1>
            
            <h2 className="mt-5 max-w-3xl font-serif text-lg italic leading-relaxed text-white/90 md:text-2xl">
              Strategic planning. Institutional execution. One point of contact.
            </h2>
            
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
              Wamira Global assists international founders, trading enterprises, and family offices in 
              establishing their corporate presence in the UAE. Whether you require a standard commercial 
              operating company, a holding structure, or asset protection, we manage the entire process with 
              absolute discretion.
            </p>
            
            <div className="mt-5 hidden max-w-3xl overflow-hidden border-y border-white/15 bg-teal-dark/45 py-3 backdrop-blur-sm sm:block">
              <div className="hero-marquee flex whitespace-nowrap text-sm font-medium text-white/85">
                <span className="pr-12">
                  We handle corporate licensing, tax compliance strategy, bank account coordination, and residency visas under a single point of accountability. You focus on your commercial objectives; we manage the regulatory framework and deliver an operationally ready business.
                </span>
                <span className="pr-12" aria-hidden="true">
                  We handle corporate licensing, tax compliance strategy, bank account coordination, and residency visas under a single point of accountability. You focus on your commercial objectives; we manage the regulatory framework and deliver an operationally ready business.
                </span>
              </div>
            </div>
            
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">Arrange a Private Consultation</Button>
              <Button href="/services" variant="secondary" className="border-white text-white hover:bg-white/10">Discover Our Services</Button>
            </div>
          </div>
        </div>

        {/* Floating Trust Indicators (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 hidden lg:block border-t border-white/10 bg-teal-dark/65 backdrop-blur-xl z-20">
          <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 p-4">
                <feature.icon className="h-6 w-6 text-gold-champagne shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                  <p className="text-xs text-white/60 mt-0.5">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features (Mobile) */}
      <section className="block lg:hidden border-b border-black/5 bg-cream-soft">
        <div className="grid gap-px sm:grid-cols-2">
          {trustFeatures.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 bg-white p-6 border-b border-black/5 last:border-b-0 sm:border-b-0">
              <feature.icon className="h-6 w-6 text-gold-champagne shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-charcoal">{feature.title}</h3>
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
          <h2 className="font-serif text-5xl leading-tight text-teal-deep">
            Our Pillars of <span className="text-gold-champagne">Execution</span>
          </h2>
          <p className="mt-5 text-muted leading-8">
            We operate at the intersection of business strategy, regulatory governance, and private advisory to secure your long-term success.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="group relative rounded border border-black/5 bg-white p-8 shadow-dark transition duration-300 hover:-translate-y-0.5 hover:border-gold-champagne/40">
              <div className="absolute top-0 right-0 p-4 font-serif text-4xl text-black/[0.02] transition group-hover:text-gold-champagne/[0.08] font-bold">
                0{i + 1}
              </div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-gold-champagne/10 text-gold-champagne transition group-hover:bg-gold-champagne/20">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl text-charcoal group-hover:text-teal-deep transition">{pillar.title}</h3>
              <p className="text-muted leading-7 text-sm">{pillar.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Core Services Preview */}
      <AnimatedSection className="bg-cream-soft py-24 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel>Services Overview</SectionLabel>
            <h2 className="font-serif text-5xl leading-tight text-teal-deep">
              Setup Strategy & <span className="text-gold-champagne">Compliance</span>
            </h2>
            <p className="mt-5 text-muted leading-8">
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
        <div className="mx-auto max-w-4xl rounded border border-gold-champagne/30 bg-white px-8 py-16 shadow-gold">
          <SectionLabel>Mandate Timeline</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-charcoal leading-tight max-w-3xl mx-auto">
            From private conversation to <span className="text-teal-deep">handover</span>.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted max-w-2xl mx-auto">
            From our first private conversation to handing over your fully operational corporate structure, 
            most mandates are completed within <strong className="text-teal-deep">6 to 10 weeks</strong>, subject to government and banking timelines.
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
