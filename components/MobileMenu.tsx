"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({
  open,
  onClose,
  links
}: {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="absolute inset-x-0 top-full overflow-hidden border-t border-white/10 bg-teal-dark/95 shadow-xl md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-7 text-lg font-medium text-white">
            {links.map((link) => (
              <Link key={link.href} onClick={onClose} href={link.href} className="transition hover:text-gold-champagne">
                {link.label}
              </Link>
            ))}
            <Link
              onClick={onClose}
              href="/contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-sm bg-teal-deep px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gold-champagne"
            >
              Get In Touch
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
