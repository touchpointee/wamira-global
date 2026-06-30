"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";
import Button from "@/components/Button";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-obsidian p-6 md:hidden"
        >
          <div className="flex items-center justify-between">
            <div className="relative h-20 w-20 overflow-hidden">
              <Image src="/images/logo-removebg.png" alt="Wamira Global" fill sizes="80px" className="object-contain" />
            </div>
            <button aria-label="Close menu" onClick={onClose} className="text-ivory">
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-5 text-lg text-ivory">
            <Link onClick={onClose} href="/about">About Us</Link>
            <button
              onClick={() => setServicesOpen((value) => !value)}
              className="flex items-center justify-between text-left"
            >
              Services <ChevronDown className={`h-5 w-5 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-l border-gold/30 pl-4"
                >
                  <Link onClick={onClose} href="/services" className="mb-3 block text-sm text-gold-light">
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link key={service.slug} onClick={onClose} href={`/services/${service.slug}`} className="mb-3 block text-sm text-muted">
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <Link onClick={onClose} href="/family-office">Family Office</Link>
            <Link onClick={onClose} href="/resources">Resources</Link>
            <Link onClick={onClose} href="/contact">Contact Us</Link>
            <Button href="/contact" className="mt-4">Get In Touch</Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
