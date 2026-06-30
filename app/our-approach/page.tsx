import type { Metadata } from "next";
import { MessageSquare, Layout, Activity, ShieldCheck, Calendar } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Approach | UAE Corporate Setup Process",
  description: "Explore our transparent 3-step process from confidential assessment, through custom framework design, to full execution and business handover."
};

const steps = [
  {
    num: "01",
    title: "Confidential Assessment",
    text: "We talk through your business goals, operational constraints, and timeline. No obligation. No pre-made templates.",
    icon: MessageSquare
  },
  {
    num: "02",
    title: "The Design",
    text: "We show you the exact setup options, clear fixed costs, and regulatory implications so you can make an easy decision.",
    icon: Layout
  },
  {
    num: "03",
    title: "Full Execution",
    text: "We handle the registry, the licenses, the banking support, and the residency visas until your business is 100% ready.",
    icon: Activity
  }
];

const visualWorkflow = [
  { step: "01", label: "Assessment" },
  { step: "02", label: "Design" },
  { step: "03", label: "Execution" },
  { step: "Handover", label: "Ready" }
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        title="Our Approach"
        subtitle="One client. One structure. One coordinated delivery."
        breadcrumb="Our Approach"
        image={images.desk}
      />
      
      {/* 3-Step Process details */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <SectionLabel>Methodology</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-teal-deep">
            The 3-Step Process
          </h2>
          <p className="mt-5 text-muted leading-8">
            We guide your business setup through a logical, transparent pathway to ensure compliance and zero administrative friction.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="rounded border border-black/5 bg-white p-8 md:p-10 shadow-dark transition duration-300 hover:border-gold-champagne/45"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-5xl font-bold text-gold-champagne/20">
                    {step.num}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-gold-champagne/10 text-gold-champagne">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-4">{step.title}</h3>
                <p className="text-muted leading-8 text-sm">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Workflow Graphic */}
      <section className="bg-cream-soft py-24 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel>Workflow Track</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep">
              Coordinated Delivery
            </h2>
            <p className="mt-5 text-muted">
              Unified progress from initial assessment to final corporate handover.
            </p>
          </div>

          {/* Graphic Container */}
          <div className="relative mx-auto max-w-5xl py-8">
            {/* Horizontal Line connecting items (hidden on mobile) */}
            <div className="absolute top-[88px] left-[10%] right-[10%] h-[1px] bg-black/10 hidden md:block" />
            
            <div className="grid gap-8 md:grid-cols-4 relative z-10 text-center">
              {visualWorkflow.map((item, i) => (
                <div key={item.step} className="flex flex-col items-center">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-gold-champagne/60 bg-white text-teal-deep shadow-gold transition duration-300 hover:scale-105">
                    {/* Glowing effect for the node */}
                    <div className="absolute inset-0 rounded-full bg-gold-champagne/5 blur-sm" />
                    <span className="font-serif text-lg font-bold">
                      {item.step}
                    </span>
                  </div>
                  
                  <p className="mt-5 font-serif text-xl text-charcoal font-medium">{item.label}</p>
                  <p className="mt-1 text-xs text-muted">
                    {i === 0 && "First Meeting"}
                    {i === 1 && "Tailored Blueprint"}
                    {i === 2 && "Setup & Visas"}
                    {i === 3 && "Operational Ready"}
                  </p>
                  
                  {/* Arrow for mobile views between nodes */}
                  {i < 3 && (
                    <div className="mt-6 md:hidden text-gold-champagne/60 font-bold">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimated Timeline & Confidentiality */}
      <section className="mx-auto max-w-7xl px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl rounded border border-gold-champagne/30 bg-white p-8 md:p-12 shadow-dark">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded bg-gold-champagne/10 text-gold-champagne">
            <Calendar className="h-6 w-6" />
          </div>
          <h3 className="font-serif text-3xl text-teal-deep mb-4">Estimated Timeline</h3>
          <p className="text-lg leading-8 text-muted mb-8">
            Typical delivery spans <strong className="text-teal-deep">6 to 10 weeks</strong> from the initial meeting to full operational readiness, subject to specific bank and government approvals.
          </p>
          
          <div className="border-t border-black/5 pt-8 mt-8 flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-champagne/10 text-gold-champagne mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="italic text-muted font-serif text-lg max-w-xl">
              "Every institutional engagement begins with a strict confidentiality understanding and is led personally by the Principal."
            </p>
          </div>
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
