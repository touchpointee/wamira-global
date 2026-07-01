import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images, site } from "@/lib/utils";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Initiate your private consultation with Wamira Global."
};

const contact = [
  { label: "Email", value: site.email, icon: Mail },
  { label: "Phone", value: site.phone, icon: Phone },
  { label: "Location", value: site.location, icon: MapPin },
  { label: "Confidentiality", value: "All enquiries are handled with strict professional confidentiality.", icon: ShieldCheck }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Initiate Your Private Consultation."
        breadcrumb="Contact"
        image={images.office}
        subtitle="The right structure determines the clarity and efficiency of every next step."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-teal-deep md:text-5xl">
            Begin With a Discreet First Consultation.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-charcoal/75">
            <p>Wamira Global provides a discreet first consultation to understand your goals and determine the most suitable direction.</p>
            <p>All enquiries are handled with strict professional confidentiality.</p>
          </div>
          <div className="mt-10 grid gap-4">
            {contact.map((item) => (
              <div key={item.label} className="flex gap-4 border border-black/5 bg-white p-5 shadow-sm">
                <item.icon className="h-6 w-6 shrink-0 text-gold-champagne" />
                <div>
                  <h3 className="font-semibold text-teal-deep">{item.label}</h3>
                  <p className="text-sm leading-6 text-charcoal/70">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
