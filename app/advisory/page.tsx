import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { services } from "@/data/services";
import { images } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Advisory",
  description: "UAE market entry advisory, strategic entity structuring, and investment coordination."
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        title="Advisory"
        breadcrumb="Advisory"
        image={images.desk}
        subtitle="Strategic UAE market entry, structuring, and investment coordination."
      />
      <section className="bg-ivory-warm py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>Advisory / Services</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Coordinated Advisory for Long-Term Value
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <article key={service.slug} className="overflow-hidden border border-black/10 bg-white shadow-sm">
                <div className="relative h-56">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/70 to-transparent" />
                  <span className="absolute left-5 top-5 text-xs font-bold uppercase tracking-[0.24em] text-gold-champagne">
                    Service 0{index + 1}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-3xl text-teal-deep">{service.title}</h3>
                  <p className="mt-5 text-base leading-7 text-charcoal/75">{service.shortDescription}</p>
                  <p className="mt-4 text-base leading-7 text-charcoal/75">{service.fullDescription}</p>
                  <Button href={`/services/${service.slug}`} variant="secondary" className="mt-7">Read More</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
