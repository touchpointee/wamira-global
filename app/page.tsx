import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import { services, trustFeatures } from "@/data/services";
import { images } from "@/lib/utils";
import { BriefcaseBusiness, Globe2, Headphones, LockKeyhole } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Office & Concierge Services",
  description: "Your World. Perfectly Managed. Bespoke private office and concierge support from Wamira Global."
};

const reasons = [
  { title: "Uncompromising Privacy", text: "Your confidentiality is at the heart of everything we do.", icon: LockKeyhole },
  { title: "Tailored Excellence", text: "Every solution is uniquely crafted for your needs.", icon: BriefcaseBusiness },
  { title: "Global Reach", text: "A trusted network that delivers anywhere in the world.", icon: Globe2 },
  { title: "Dedicated Support", text: "Personalized attention, 24/7, from a team you can rely on.", icon: Headphones }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-32">
        <Image src={images.hero} alt="Luxury private office overlooking Dubai" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/82 to-obsidian/30" />
        <div className="absolute inset-0 bg-luxury-radial" />
        <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center px-5 pb-36">
          <SectionLabel>The Legacy Standard</SectionLabel>
          <h1 className="max-w-3xl font-serif text-6xl leading-[0.95] text-ivory md:text-8xl">
            Your World. <span className="text-gold-light">Perfectly</span> Managed.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            Wamira Global delivers bespoke private office and concierge solutions with unmatched
            discretion, precision, and excellence. Experience a life of ease, security, and legacy.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/services">Discover Our Services</Button>
            <Button href="/contact" variant="secondary">Speak With Us</Button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-8 mx-auto grid max-w-7xl gap-px px-5 md:grid-cols-4">
          {trustFeatures.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 bg-white/[0.06] p-5 backdrop-blur-xl">
              <feature.icon className="h-7 w-7 text-gold" />
              <div>
                <h3 className="text-sm font-semibold text-ivory">{feature.title}</h3>
                <p className="text-xs text-muted">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-serif text-5xl leading-tight text-ivory">
            Private Office & <span className="text-gold-light">Concierge Services</span>
          </h2>
          <p className="mt-5 text-muted">
            We handle the details, so you can focus on what truly matters. Our comprehensive services are tailored to your unique lifestyle.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-midnight/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded border border-gold/20 shadow-dark">
            <Image src={images.desk} alt="Executive desk in a premium private office" fill className="object-cover" />
          </div>
          <div>
            <SectionLabel>Why Choose Wamira Global</SectionLabel>
            <h2 className="font-serif text-5xl leading-tight text-ivory">
              Built on Trust. <span className="text-gold-light">Driven by Excellence.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              At Wamira Global, we go beyond traditional service. We become your trusted partner,
              safeguarding your time, your interests, and your legacy with the highest standards of
              confidentiality and professionalism.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => <FeatureCard key={reason.title} {...reason} />)}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h2 className="font-serif text-5xl text-ivory">Our Commitment</h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted">
          We are committed to enhancing your life by managing your world with precision, integrity, and care. Your trust is our greatest responsibility.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          <StatCard value="20+" label="Years of Experience" />
          <StatCard value="50+" label="Countries Served" />
          <StatCard value="100+" label="Trusted Partners" />
          <StatCard value="24/7" label="Dedicated Support" />
        </div>
      </AnimatedSection>
      <CTASection />
    </>
  );
}
