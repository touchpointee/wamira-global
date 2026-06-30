import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info, CheckCircle2, ShieldCheck, Briefcase, Building, Plane, Home } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Core Services | UAE Business Setup & Corporate Strategy",
  description: "Explore our core corporate services including setup strategy, company formation, banking onboarding, residency visas, and independent property advisory."
};

const coreServices = [
  {
    num: "01",
    slug: "setup-strategy-structure",
    title: "Setup Strategy & Structure",
    deliver: "A clear, strategic evaluation comparing Mainland and Freezone options based on your target operations and tax footprint.",
    outcome: "The optimal legal framework for your business, saving you from future restructuring costs.",
    icon: Briefcase
  },
  {
    num: "02",
    slug: "company-formation-compliance",
    title: "Company Formation & Compliance",
    deliver: "Complete corporate registration, commercial license procurement, and foundational alignment with UAE Corporate Tax rules.",
    outcome: "A fully licensed, legally compliant corporate entity ready for immediate commercial activity.",
    icon: ShieldCheck
  },
  {
    num: "03",
    slug: "banking-onboarding-coordination",
    title: "Banking Onboarding Coordination",
    deliver: "Strategic bank selection, corporate profile optimization, and complete documentation management for compliance reviews.",
    outcome: "A reliable corporate banking setup structured to support your international commercial cash flows.",
    icon: Building
  },
  {
    num: "04",
    slug: "visas-golden-residency",
    title: "Visas & Golden Residency",
    deliver: "Full management of your investor residency or Golden Visa process through direct, white-glove government channels.",
    outcome: "Your residency secured smoothly without you waiting in long lines or dealing with paperwork bottlenecks.",
    icon: Plane
  },
  {
    num: "05",
    slug: "uae-property-investment-advisory",
    title: "UAE Property Investment Advisory",
    deliver: "A curated list of property investments that match your visa or wealth goals, with independent data on yields and growth.",
    outcome: "Pure advice and portfolio coordination to protect your capital—we are your advisors, never transactional real estate brokers.",
    icon: Home
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Core Services"
        subtitle="Business setup and corporate strategy, executed to a premium standard."
        breadcrumb="Services"
        image={images.procurement}
      />
      
      <section className="mx-auto max-w-7xl px-5 py-24">
        {/* Introductory Note */}
        <div className="mb-20 rounded border border-gold-champagne/30 bg-white p-8 md:p-10 shadow-dark">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gold-champagne/10 text-gold-champagne">
              <Info className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-teal-deep mb-3">Unified Coordination</h3>
              <p className="text-lg leading-8 text-muted max-w-4xl">
                We manage your entire engagement under one roof. When highly specialized cross-border 
                tax or legal expertise is required, we integrate our vetted network behind the scenes. 
                You maintain a single relationship.
              </p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.slug} 
                className="group relative rounded border border-black/5 bg-white p-8 md:p-12 shadow-dark transition duration-300 hover:border-gold-champagne/40"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-sm font-semibold tracking-widest text-gold-champagne">
                        SERVICE {service.num}
                      </span>
                      <span className="h-px w-6 bg-black/10" />
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-gold-champagne/5 text-gold-champagne">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-3xl text-teal-deep">{service.title}</h3>
                    
                    <div className="grid gap-6 md:grid-cols-2 pt-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted font-bold mb-2">What we deliver</p>
                        <p className="text-muted leading-7 text-sm">{service.deliver}</p>
                      </div>
                      
                      <div className="rounded bg-cream-soft p-4 border border-gold-champagne/10">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-gold-champagne" />
                          <p className="text-xs uppercase tracking-widest text-teal-deep font-bold">The Outcome</p>
                        </div>
                        <p className="text-charcoal leading-6 text-sm font-medium">{service.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-4 lg:pt-0">
                    <Link 
                      href={`/services/${service.slug}`} 
                      className="inline-flex items-center gap-2 rounded border border-gold-champagne/45 px-5 py-3 text-sm font-semibold text-gold-champagne transition hover:bg-gold-champagne/10"
                    >
                      Explore Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection 
        title="Require Bespoke Structuring?" 
        text="Discuss your operating activities, entity setup, and tax optimization goals with the Principal." 
        button="Contact Our Team" 
      />
    </>
  );
}
