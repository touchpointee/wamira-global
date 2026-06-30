import {
  BriefcaseBusiness,
  ShieldCheck,
  Building,
  Plane,
  Home,
  Users
} from "lucide-react";
import type React from "react";
import { images } from "@/lib/utils";

export type Service = {
  title: string;
  slug: string;
  category: "Lifestyle" | "Family Office" | "Mobility" | "Support";
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  helpCards: { title: string; text: string }[];
  why: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export const services: Service[] = [
  {
    title: "Setup Strategy & Structure",
    slug: "setup-strategy-structure",
    category: "Support",
    shortDescription: "Strategic evaluation of Mainland and Freezone options for optimal tax and legal structuring.",
    fullDescription: "We evaluate your commercial operations to design the correct corporate framework, preventing expensive future restructuring.",
    image: images.assets,
    icon: BriefcaseBusiness,
    benefits: [
      "Mainland vs. Freezone strategic evaluation",
      "Tax footprint optimization advisory",
      "Legal structural insulation design",
      "Future restructuring cost reduction"
    ],
    helpCards: [
      { title: "Jurisdiction Assessment", text: "Aligning operations with the best legal freezones or mainland setups." },
      { title: "Compliance Blueprint", text: "Incorporating international tax standards from day one." },
      { title: "Strategic Framework", text: "Customized planning for founders and corporate entities." }
    ],
    why: "A correct initial setup structure protects assets, optimizes tax alignment, and establishes a secure long-term business foundation.",
    ctaTitle: "Establish a Resilient Foundation",
    ctaText: "Discuss your target operations with the Principal.",
    ctaButton: "Arrange a Consultation"
  },
  {
    title: "Company Formation & Compliance",
    slug: "company-formation-compliance",
    category: "Support",
    shortDescription: "Complete corporate registration, licensing, and foundational UAE Corporate Tax alignment.",
    fullDescription: "We handle the entire corporate registration, procurement of commercial licenses, and compliance structures under a single point of contact.",
    image: images.office,
    icon: ShieldCheck,
    benefits: [
      "End-to-end registry management",
      "Commercial license procurement",
      "Corporate Tax registration & alignment",
      "Regulatory compliance readiness"
    ],
    helpCards: [
      { title: "Registration Support", text: "Full handling of government registry submissions and documentation." },
      { title: "Licensing Coordination", text: "Securing active commercial operating licenses smoothly." },
      { title: "Tax Compliance Setup", text: "Foundational alignment with active UAE Corporate Tax regulations." }
    ],
    why: "A compliant corporate presence ensures longevity, respects regulatory standards, and readies your business for active trading.",
    ctaTitle: "Secure Your Commercial License",
    ctaText: "Let us manage the entire regulatory and registration framework.",
    ctaButton: "Begin Formation"
  },
  {
    title: "Banking Onboarding Coordination",
    slug: "banking-onboarding-coordination",
    category: "Support",
    shortDescription: "Strategic bank selection and optimization of corporate profiles for compliance reviews.",
    fullDescription: "We guide your corporate profile through strict banking onboarding processes, securing reliable setups for international flows.",
    image: images.desk,
    icon: Building,
    benefits: [
      "Strategic UAE bank selection",
      "Corporate profile optimization",
      "Compliance documentation assembly",
      "Onboarding process coordination"
    ],
    helpCards: [
      { title: "Bank Matching", text: "Selecting the correct banking partners for your specific transaction patterns." },
      { title: "Profile Enhancement", text: "Structuring corporate profiles to satisfy strict compliance standard reviews." },
      { title: "Frictionless Support", text: "Handling background checks and query resolutions directly." }
    ],
    why: "A stable corporate banking setup is the lifeblood of international operations, protecting your cash flow and commercial continuity.",
    ctaTitle: "Establish Your Banking Setup",
    ctaText: "Expert guidance through strict institutional onboarding reviews.",
    ctaButton: "Speak With Us"
  },
  {
    title: "Visas & Golden Residency",
    slug: "visas-golden-residency",
    category: "Mobility",
    shortDescription: "Management of investor visas and Golden Residency through white-glove government channels.",
    fullDescription: "We manage your executive residency and Golden Visa processes, bypassing lines and paper bottlenecks.",
    image: images.jet,
    icon: Plane,
    benefits: [
      "Golden Visa eligibility assessment",
      "Investor residency coordination",
      "White-glove government processing",
      "Paperwork bottleneck resolution"
    ],
    helpCards: [
      { title: "Golden Visa Pathways", text: "Assessing and structuring eligibility for 10-year residency." },
      { title: "VIP Coordination", text: "Guided processing through medical screening and biometrics." },
      { title: "Family Sponsorship", text: "Extending residency benefits smoothly to your dependents." }
    ],
    why: "Smooth residency processing ensures seamless mobility, personal security, and local alignment for corporate leadership.",
    ctaTitle: "Secure Your Residency",
    ctaText: "White-glove government processing for founders and key executives.",
    ctaButton: "Arrange Residency"
  },
  {
    title: "UAE Property Investment Advisory",
    slug: "uae-property-investment-advisory",
    category: "Support",
    shortDescription: "Independent property selection and investment advisory tailored to your visa or wealth goals.",
    fullDescription: "We provide pure portfolio coordination and independent real estate advisory, completely free from broker pressure.",
    image: images.lounge,
    icon: Home,
    benefits: [
      "Independent investment analysis",
      "Yield & capital growth projections",
      "Visa-compliant property mapping",
      "Broker-pressure-free advisory"
    ],
    helpCards: [
      { title: "Pure Advisory", text: "Offering unbiased investment analysis without selling properties as a broker." },
      { title: "Yield Intelligence", text: "Providing clear, objective data on growth areas and rental returns." },
      { title: "Asset Integration", text: "Linking property acquisitions to residency or wealth protection targets." }
    ],
    why: "Independent advice protects your capital from commission-driven recommendations, ensuring assets serve your true goals.",
    ctaTitle: "Protect Your Wealth",
    ctaText: "Curated, broker-free real estate advisory based on yields and data.",
    ctaButton: "Discuss Investment"
  }
];

export const trustFeatures = [
  { title: "Absolute Discretion", text: "Your privacy is our priority", icon: ShieldCheck },
  { title: "Global Network", text: "Local expertise, worldwide", icon: Plane },
  { title: "Tailored Solutions", text: "Designed around your life", icon: BriefcaseBusiness },
  { title: "Principal Accountability", text: "Direct point of senior contact", icon: Users }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
