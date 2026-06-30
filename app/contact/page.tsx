import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images, site } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach out to Wamira Global to discuss private office, concierge, and family office support."
};

const contact = [
  { label: "Email", value: site.email, icon: Mail },
  { label: "Phone", value: site.phone, icon: Phone },
  { label: "Location", value: site.location, icon: MapPin },
  { label: "Office Hours", value: "24/7 - We are always available", icon: Clock }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        breadcrumb="Contact Us"
        image={images.office}
        subtitle="We are here to assist you. Reach out to discuss how we can support your needs."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="font-serif text-5xl text-teal-deep">Speak With Our Team</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Whether you require private office support, lifestyle management, global mobility, or bespoke concierge services, our team is available to assist with discretion and care.
          </p>
          <div className="mt-10 grid gap-4">
            {contact.map((item) => (
              <div key={item.label} className="flex gap-4 rounded border border-black/5 bg-white p-5 shadow-dark">
                <item.icon className="h-6 w-6 text-gold-champagne" />
                <div>
                  <h3 className="font-semibold text-teal-deep">{item.label}</h3>
                  <p className="text-sm text-muted">{item.value}</p>
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
