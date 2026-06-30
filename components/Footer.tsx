import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-teal-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="relative h-36 w-36 overflow-hidden">
            <Image src="/images/logo.png" alt="Wamira Global" fill sizes="144px" className="object-contain filter brightness-110" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Delivering bespoke corporate structuring and business setup solutions in the UAE with 
            absolute discretion, precision, and excellence.
          </p>
          <div className="mt-6 flex gap-4 text-gold-champagne">
            <Linkedin className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <FooterColumn title="Quick Links" links={[
          ["About Us", "/about"],
          ["Services", "/services"],
          ["Our Approach", "/our-approach"],
          ["Resources", "/resources"],
          ["Contact Us", "/contact"]
        ]} />
        <FooterColumn title="Core Services" links={[
          ...services.slice(0, 4).map((service) => [service.title, `/services/${service.slug}`] as [string, string]),
          ["View All", "/services"]
        ]} />
        <div>
          <h3 className="mb-5 font-semibold text-gold-champagne uppercase tracking-wider text-xs">Contact Us</h3>
          <div className="space-y-4 text-sm text-white/70">
            <p className="flex gap-3"><Mail className="h-5 w-5 text-gold-champagne shrink-0" /> {site.email}</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 text-gold-champagne shrink-0" /> {site.phone}</p>
            <p className="flex gap-3"><MapPin className="h-5 w-5 text-gold-champagne shrink-0" /> {site.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Wamira Global. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-gold-champagne uppercase tracking-wider text-xs">{title}</h3>
      <div className="space-y-3 text-sm text-white/70">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="block transition hover:text-gold-champagne">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
