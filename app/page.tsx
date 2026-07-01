import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Globe2, Handshake, Landmark, LockKeyhole, Shield, UserRound } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Strategic UAE Market Entry, Structuring & Investment Coordination",
  description: "A private advisory office guiding founders, family offices, and HNI investors through UAE market entry, structuring, and investment opportunities."
};

const pillars = [
  {
    title: "UAE Market Entry",
    text: "End-to-end market entry strategy, feasibility, licensing, and go-to-market execution tailored to your objectives.",
    image: images.terrace,
    icon: Landmark,
    href: "/services/uae-market-entry-advisory"
  },
  {
    title: "Entity Structuring",
    text: "Optimal legal structures for tax efficiency, asset protection, and long-term operational flexibility.",
    image: images.office,
    icon: Building2,
    href: "/services/strategic-entity-structuring"
  },
  {
    title: "Investment Coordination",
    text: "Access to vetted opportunities and coordination with leading investors, partners, and institutional networks.",
    image: images.desk,
    icon: Handshake,
    href: "/services/strategic-investment-coordination"
  },
  {
    title: "Private Advisory",
    text: "Ongoing strategic counsel on governance, expansion, and wealth-aligned business decisions.",
    image: images.lounge,
    icon: UserRound,
    href: "/services/private-advisory"
  }
];

const reasons = [
  {
    title: "Discretion",
    text: "Your objectives, information, and plans are always protected with the highest level of confidentiality.",
    icon: LockKeyhole
  },
  {
    title: "One Point of Contact",
    text: "A senior advisor who understands your goals and orchestrates every aspect on your behalf.",
    icon: UserRound
  },
  {
    title: "Cross-Border Coordination",
    text: "Seamless alignment between UAE regulations and global structures, partners, and investments.",
    icon: Globe2
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative mt-[90px] flex min-h-[calc(100svh-90px)] items-center bg-teal-dark py-12 md:py-16 lg:h-[calc(100svh-90px)] lg:min-h-[620px] lg:py-0 overflow-hidden">
        <Image src={images.hero} alt="Dubai skyline with Burj Khalifa" fill priority className="object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 to-teal-dark/30" />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-teal-dark/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_44%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_62%_50%,rgba(201,154,95,0.12),transparent_26%)]" />
        <div className="absolute left-[34%] top-0 hidden h-full w-[38%] rounded-full border-[70px] border-white/[0.035] lg:block" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-6 pb-8 md:px-16 xl:px-20 lg:h-full">
          <div className="w-full max-w-[760px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-gold-champagne" />
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-gold-champagne sm:text-[13px]">
                The Legacy Standard <span className="text-white/40 font-normal">|</span> Strategic UAE Market Entry, Structuring & Private Coordination
              </p>
            </div>
            <h1 className="max-w-[760px] font-serif text-[28px] xs:text-[32px] sm:text-[38px] leading-[1.1] text-white md:text-[46px] lg:text-[52px] xl:text-[56px]">
              Strategic UAE Entry.
              <br />
              Built for Legacy.
            </h1>
            <div className="mt-5 max-w-[600px] space-y-4 text-[14px] leading-relaxed text-white/90 sm:mt-7 sm:text-[15px] sm:leading-8">
              <p>
                Wamira Global provides strategic coordination for founders, family offices, and investors entering the UAE.
              </p>
              <p>
                We move beyond standard setup to build structures centered on ownership, continuity, and long-term value.
              </p>
              <p>
                Through a single, discreet point of coordination, we align the necessary expertise to help you build with clarity and intent.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Button href="/advisory" className="min-w-[136px] justify-center px-6 text-[12px] uppercase tracking-[0.14em]">Our Advisory</Button>
              <Button href="/contact" variant="secondary" className="min-w-[270px] justify-center border-gold-champagne px-6 text-[12px] text-white hover:bg-gold-champagne/10 uppercase tracking-[0.14em]">
                Schedule a Private Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-ivory-warm py-16 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-40 w-40 border-l-2 border-t-2 border-gold-champagne" />
            <div className="relative h-[360px] overflow-hidden bg-cream-soft md:h-[430px]">
              <Image src={images.terrace} alt="Dubai terrace lounge" fill className="object-cover" />
            </div>
          </div>
          <div className="lg:pl-3">
            <div className="mb-4 flex items-center gap-4">
              <SectionLabel>About Wamira Global</SectionLabel>
              <span className="mb-4 h-px w-9 bg-gold-champagne" />
            </div>
            <h2 className="font-serif text-[38px] leading-[1.05] text-charcoal md:text-[48px]">
              Beyond Setup.
              <br />
              Built With Strategic Clarity.
            </h2>
            <div className="mt-6 max-w-[630px] space-y-4 text-[15px] leading-8 text-charcoal/80">
              <p>Entering the UAE market is a significant step that requires a clear blueprint and a trusted professional network.</p>
              <p>Wamira Global coordinates your operating, holding, and governance requirements into a unified framework.</p>
              <p>We serve clients who value discretion, governance, and a considered approach to building their long-term presence.</p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <MiniTrust icon={Shield} title="Discretion" text="Always." />
              <MiniTrust icon={UserRound} title="One Point" text="of Contact." />
              <MiniTrust icon={Globe2} title="Cross-Border" text="Coordination." />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-black/10 bg-cream-soft py-16 md:py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Core Positioning</SectionLabel>
            <h2 className="mt-4 font-serif text-[34px] leading-tight text-charcoal md:text-[44px]">
              One Relationship. Complete Coordination.
            </h2>
            <p className="mt-4 font-serif text-lg italic text-teal-deep md:text-xl">
              We believe your UAE entry should be seamless, not fragmented.
            </p>
            <p className="mx-auto mt-6 max-w-[800px] text-[15px] leading-8 text-charcoal/80">
              Wamira Global serves as your primary point of coordination, aligning the necessary legal, tax, banking, accounting, compliance, and professional services around your specific goals.
            </p>
            <div className="mx-auto mt-8 inline-flex flex-col items-center justify-center border-y border-gold-champagne/45 px-6 py-4 text-center sm:flex-row sm:gap-4 sm:py-3">
              <span className="text-[14px] font-bold uppercase tracking-wider text-charcoal">You maintain one relationship.</span>
              <span className="hidden h-4 w-px bg-gold-champagne/60 sm:block" />
              <span className="text-[14px] font-bold uppercase tracking-wider text-teal-deep">We coordinate the ecosystem.</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-black/10 bg-ivory-warm py-16 md:py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <SectionLabel>Our Advisory Pillars</SectionLabel>
            <h2 className="font-serif text-[34px] leading-tight text-charcoal md:text-[44px]">
              Integrated Advisory for Long-Term Value
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group overflow-hidden rounded-sm bg-teal-dark text-center text-white shadow-sm transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-28">
                  <Image src={pillar.image} alt={pillar.title} fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-dark to-transparent" />
                </div>
                <div className="-mt-9 px-7 pb-7">
                  <div className="relative mx-auto mb-5 flex h-[74px] w-[74px] items-center justify-center rounded-full border border-gold-champagne bg-teal-dark text-gold-champagne">
                    <pillar.icon className="h-9 w-9" />
                  </div>
                  <h3 className="font-serif text-[24px] text-gold-champagne">{pillar.title}</h3>
                  <p className="mt-4 min-h-[104px] text-[13px] leading-6 text-white/80">{pillar.text}</p>
                  <ArrowRight className="mx-auto mt-4 h-5 w-5 text-gold-champagne" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-teal-dark py-12">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gold-champagne/70" />
            <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-gold-champagne">Why Clients Choose Wamira Global</p>
            <span className="h-px w-16 bg-gold-champagne/70" />
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-gold-champagne/30">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-6 md:px-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold-champagne text-gold-champagne">
                  <reason.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-serif text-[22px] text-gold-champagne">{reason.title}</h3>
                  <p className="mt-2 max-w-[260px] text-[13px] leading-6 text-white/75">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="relative overflow-hidden bg-ivory-warm py-16">
        <Image src={images.lounge} alt="" fill className="object-cover opacity-[0.13]" />
        <div className="relative mx-auto grid max-w-[1180px] gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <SectionLabel>Private by Design. Impact by Intention.</SectionLabel>
              <span className="mb-4 h-px w-12 bg-gold-champagne" />
            </div>
            <h2 className="font-serif text-[40px] leading-tight text-charcoal md:text-[48px]">Let&apos;s Build What&apos;s Next.</h2>
            <p className="mt-5 max-w-[600px] text-[15px] leading-8 text-charcoal/80">
              Whether you are entering the UAE, restructuring for growth, or evaluating strategic investments, we are here to guide with clarity, precision, and discretion.
            </p>
          </div>
          <div className="border border-gold-champagne bg-teal-dark p-8 text-center shadow-gold">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold-champagne text-gold-champagne">
              <ArrowRight className="h-7 w-7 -rotate-45" />
            </div>
            <h3 className="font-serif text-[28px] text-white">Schedule a Private Consultation</h3>
            <p className="mx-auto mt-4 max-w-[360px] text-[13px] leading-6 text-white/75">
              A confidential conversation to understand your objectives and how we can support your journey.
            </p>
            <Button href="/contact" className="mt-7 w-full max-w-[320px] uppercase tracking-[0.14em]">Get In Touch</Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function MiniTrust({
  icon: Icon,
  title,
  text
}: {
  icon: typeof Shield;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-r border-black/10 last:border-r-0">
      <Icon className="h-9 w-9 shrink-0 text-gold-champagne" />
      <p className="font-serif text-[18px] leading-5 text-charcoal">
        {title}
        <br />
        {text}
      </p>
    </div>
  );
}
