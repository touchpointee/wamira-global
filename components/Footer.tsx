import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06100f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="relative h-36 w-36 overflow-hidden">
            <Image src="/images/logo-removebg.png" alt="Wamira Global" fill sizes="144px" className="object-contain" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            Delivering bespoke private office and concierge solutions with unmatched discretion,
            precision, and excellence.
          </p>
          <div className="mt-6 flex gap-4 text-gold-light">
            <Linkedin className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <FooterColumn title="Quick Links" links={[
          ["About Us", "/about"],
          ["Services", "/services"],
          ["Family Office", "/family-office"],
          ["Resources", "/resources"],
          ["Contact Us", "/contact"]
        ]} />
        <FooterColumn title="Our Services" links={[
          ...services.slice(0, 4).map((service) => [service.title, `/services/${service.slug}`] as [string, string]),
          ["And More", "/services"]
        ]} />
        <div>
          <h3 className="mb-5 font-semibold text-gold-light">Contact Us</h3>
          <div className="space-y-4 text-sm text-muted">
            <p className="flex gap-3"><Mail className="h-5 w-5 text-gold" /> {site.email}</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 text-gold" /> {site.phone}</p>
            <p className="flex gap-3"><MapPin className="h-5 w-5 text-gold" /> {site.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2025 Wamira Global. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-gold-light">{title}</h3>
      <div className="space-y-3 text-sm text-muted">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="block transition hover:text-gold-light">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
