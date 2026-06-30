"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const handleNavigate = () => {
    setServicesOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="absolute inset-x-0 top-full overflow-hidden border-t border-black/10 bg-ivory-warm shadow-xl md:hidden"
        >
          <nav className="mx-auto flex max-h-[calc(100svh-6rem)] max-w-7xl flex-col overflow-y-auto px-5 py-6 text-lg text-teal-deep">
            <Link onClick={handleNavigate} href="/about">About Us</Link>
            <button
              onClick={() => setServicesOpen((value) => !value)}
              className="mt-6 flex items-center justify-between text-left"
            >
              Services <ChevronDown className={`h-5 w-5 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 overflow-hidden border-y border-black/10 py-3 pl-4"
                >
                  <Link onClick={handleNavigate} href="/services" className="block py-2 text-sm font-semibold text-gold-champagne">
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link key={service.slug} onClick={handleNavigate} href={`/services/${service.slug}`} className="block py-2 text-sm font-medium text-charcoal transition hover:text-gold-champagne">
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <Link onClick={handleNavigate} href="/our-approach" className="mt-6">Our Approach</Link>
            <Link onClick={handleNavigate} href="/resources" className="mt-6">Resources</Link>
            <Link onClick={handleNavigate} href="/contact" className="mt-6">Contact Us</Link>
            <Link
              onClick={handleNavigate}
              href="/contact"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-teal-deep px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gold-champagne"
            >
              Get In Touch
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
