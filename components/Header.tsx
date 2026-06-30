"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";
import { services } from "@/data/services";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/family-office", label: "Family Office" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" }
];

export default function Header() {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);

  const activeClass = (href: string) =>
    pathname === href ? "text-gold-light" : "text-ivory/90 hover:text-gold-light";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-obsidian/72 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5">
        <Link href="/" aria-label="Wamira Global home" className="relative block h-20 w-20 shrink-0 overflow-hidden">
          <Image src="/images/logo-removebg.png" alt="Wamira Global" fill priority sizes="80px" className="object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/about" className={`transition ${activeClass("/about")}`}>About Us</Link>
          <div className="group relative py-9">
            <Link href="/services" className={`flex items-center gap-1 transition ${pathname.startsWith("/services") ? "text-gold-light" : "text-ivory/90 hover:text-gold-light"}`}>
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            <motion.div
              initial={false}
              className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 rounded border border-gold/20 bg-[#091615]/95 p-3 opacity-0 shadow-dark backdrop-blur-xl transition group-hover:visible group-hover:opacity-100"
            >
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block rounded px-4 py-3 text-sm text-muted transition hover:bg-gold/10 hover:text-gold-light"
                >
                  {service.title}
                </Link>
              ))}
            </motion.div>
          </div>
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={`transition ${activeClass(link.href)}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact">Get In Touch</Button>
        </div>
        <button aria-label="Open menu" onClick={() => setOpen(true)} className="text-ivory md:hidden">
          <Menu className="h-7 w-7" />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
