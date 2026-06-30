import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive private office and concierge services designed around your life."
};

export default function ServicesPage() {
  const tabs = ["All Services", "Lifestyle", "Family Office", "Mobility", "Support"];
  return (
    <>
      <PageHero
        title="Our Services"
        breadcrumb="Services"
        image={images.procurement}
        subtitle="Comprehensive private office and concierge services designed around your life."
      />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-8 text-center">
          <SectionLabel>Private Office Services</SectionLabel>
          <h2 className="font-serif text-5xl text-ivory">Designed Around Your World</h2>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <span key={tab} className="rounded-sm border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted first:border-gold/50 first:text-gold-light">
              {tab}
            </span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => <ServiceCard key={service.slug} service={service} withImage />)}
        </div>
      </section>
      <CTASection title="Need Something Else?" text="Our team is here to create a solution tailored just for you." button="Contact Us" />
    </>
  );
}
