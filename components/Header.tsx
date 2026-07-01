"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/advisory", label: "Advisory" },
  { href: "/structuring", label: "Structuring" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-teal-dark">
      <div className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between px-6 md:px-16 xl:px-20">
        <Link href="/" aria-label="Wamira Global home" className="relative block h-[66px] w-[285px] shrink-0 overflow-hidden max-md:h-16 max-md:w-52">
          <Image src="/images/logo.png" alt="Wamira Global" fill priority sizes="285px" className="object-cover object-center brightness-110" />
        </Link>
        <nav className="hidden items-center gap-[42px] text-[14px] font-semibold leading-none md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-[9px] pt-2 transition ${isActive(link.href) ? "text-gold-champagne" : "text-white hover:text-gold-champagne"
                }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute left-0 top-full h-px w-[34px] bg-gold-champagne" />
              )}
            </Link>
          ))}
        </nav>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="text-white md:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}
