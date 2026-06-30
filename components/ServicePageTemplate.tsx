import Image from "next/image";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import type { Service } from "@/data/services";

export default function ServicePageTemplate({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <>
      <PageHero title={service.title} breadcrumb={service.title} image={service.image} />
      
      {/* Overview Section */}
      <AnimatedSection className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[430px] overflow-hidden rounded border border-gold-champagne/20 shadow-dark">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/70 to-transparent" />
        </div>
        <div>
          <SectionLabel>What We Provide</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-teal-deep md:text-5xl">{service.fullDescription}</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm text-charcoal font-medium">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-gold-champagne/40 text-gold-champagne shrink-0">
                  <Check className="h-4 w-4" />
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How We Help Section */}
      <AnimatedSection className="bg-cream-soft py-20 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 text-center">
            <SectionLabel>How We Help</SectionLabel>
            <h2 className="font-serif text-4xl text-teal-deep">Quiet Expertise, Carefully Applied</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {service.helpCards.map((card) => (
              <div key={card.title} className="rounded border border-black/5 bg-white p-7 transition duration-300 hover:border-gold-champagne/45">
                <Icon className="mb-5 h-9 w-9 text-gold-champagne" />
                <h3 className="mb-3 text-lg font-semibold text-charcoal">{card.title}</h3>
                <p className="text-sm leading-6 text-muted">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why It Matters Section */}
      <AnimatedSection className="mx-auto max-w-4xl px-5 py-20 text-center">
        <SectionLabel>Why It Matters</SectionLabel>
        <p className="font-serif text-3xl leading-snug text-charcoal md:text-5xl italic">"{service.why}"</p>
      </AnimatedSection>

      <CTASection title={service.ctaTitle} text={service.ctaText} button={service.ctaButton} />
    </>
  );
}
