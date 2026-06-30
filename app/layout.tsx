import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Wamira Global | Private Office & Concierge Services",
    template: "%s | Wamira Global"
  },
  description:
    "Wamira Global delivers bespoke private office, concierge, family office, and global mobility solutions with discretion, precision, and excellence.",
  openGraph: {
    title: "Wamira Global | Private Office & Concierge Services",
    description:
      "Bespoke private office, concierge, family office, and global mobility solutions with discretion and excellence.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Wamira Global",
    images: [{ url: "/images/logo-removebg.png", width: 1200, height: 630 }],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
