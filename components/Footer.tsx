import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-teal-dark">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-12 md:grid-cols-[1.6fr_0.8fr_1fr_1.2fr]">
        <div>
          <div className="relative h-24 w-72 overflow-hidden">
            <Image src="/images/logo.png" alt="Wamira Global" fill sizes="288px" className="object-contain object-left brightness-110" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            Private Advisory. Strategic Impact. Built on trust. Driven by execution.
          </p>
        </div>
        <FooterColumn
          title="Quick Links"
          links={[
            ["Home", "/"],
            ["About", "/about"],
            ["Advisory", "/advisory"],
            ["Structuring", "/structuring"],
            ["Contact", "/contact"]
          ]}
        />
        <FooterColumn
          title="Services"
          links={services.map((service) => [service.title.replace("Strategic ", ""), `/services/${service.slug}`] as [string, string])}
        />
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-champagne">Contact</h3>
          <div className="space-y-4 text-sm text-white/70">
            <p className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-gold-champagne" /> {site.email}</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold-champagne" /> {site.phone}</p>
            <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold-champagne" /> {site.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Wamira Global. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-champagne">{title}</h3>
      <div className="space-y-3 text-sm text-white/70">
        {links.map(([label, href]) => (
          <Link key={`${label}-${href}`} href={href} className="block transition hover:text-gold-champagne">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
