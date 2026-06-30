import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  Home,
  Plane,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
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
    title: "Global Mobility",
    slug: "global-mobility",
    category: "Mobility",
    shortDescription: "Seamless travel, relocation, and immigration solutions worldwide.",
    fullDescription:
      "Seamless travel, relocation, and global support designed for individuals and families who move across borders with purpose.",
    image: images.jet,
    icon: Plane,
    benefits: [
      "Visa and immigration coordination",
      "Residence planning support",
      "Private aviation arrangements",
      "VIP airport assistance",
      "Destination support",
      "Global relocation planning"
    ],
    helpCards: [
      { title: "Personalized Planning", text: "Every movement is mapped around your timeline, privacy needs, and priorities." },
      { title: "End-to-End Support", text: "From documents to arrivals, our team coordinates the details with care." },
      { title: "Global Expertise", text: "Trusted local specialists help make international transitions feel effortless." }
    ],
    why: "A refined mobility partner protects your time, privacy, and continuity wherever life takes you.",
    ctaTitle: "Ready to Simplify Your Journey?",
    ctaText: "Let our experts take care of every detail.",
    ctaButton: "Get in Touch"
  },
  {
    title: "Lifestyle Management",
    slug: "lifestyle-management",
    category: "Lifestyle",
    shortDescription: "Bespoke experiences, travel planning, and daily life management.",
    fullDescription: "Bespoke lifestyle support that gives you back your most valuable asset: time.",
    image: images.lounge,
    icon: Sparkles,
    benefits: [
      "Personal assistance",
      "Luxury travel arrangements",
      "Dining and hospitality reservations",
      "Daily life coordination",
      "Exclusive experiences",
      "Bespoke lifestyle planning"
    ],
    helpCards: [
      { title: "Curated Experiences", text: "Access memorable moments shaped around your preferences." },
      { title: "Everyday Assistance", text: "Delegate practical demands while preserving control and calm." },
      { title: "Lifestyle Precision", text: "Receive support that anticipates the small details before they become tasks." }
    ],
    why: "Exceptional lifestyle management creates space for the people, work, and experiences that matter most.",
    ctaTitle: "Let Us Curate Your Lifestyle",
    ctaText: "Bespoke support, delivered with discretion.",
    ctaButton: "Speak With Us"
  },
  {
    title: "Estate & Asset Support",
    slug: "estate-asset-support",
    category: "Support",
    shortDescription: "Coordination of legal, financial, and estate matters with trusted partners.",
    fullDescription:
      "Coordinated support for property, estate, and asset-related matters through a trusted global network. Wamira Global coordinates and supports these matters but does not replace licensed legal, financial, or tax advisors.",
    image: images.assets,
    icon: Home,
    benefits: [
      "Property coordination",
      "Estate support",
      "Asset documentation support",
      "Trusted advisor coordination",
      "Confidential administration",
      "Cross-border coordination"
    ],
    helpCards: [
      { title: "Trusted Coordination", text: "We help align specialists, advisors, and stakeholders." },
      { title: "Confidential Support", text: "Sensitive details are handled with discretion and structure." },
      { title: "Structured Oversight", text: "Important tasks are tracked clearly from request to completion." }
    ],
    why: "Thoughtful oversight brings clarity to complex responsibilities without compromising confidentiality.",
    ctaTitle: "Protect What Matters Most",
    ctaText: "Coordinate your estate and asset needs with confidence.",
    ctaButton: "Contact Our Team"
  },
  {
    title: "Family Office Solutions",
    slug: "family-office-solutions",
    category: "Family Office",
    shortDescription: "Dedicated support for family governance, wealth, and legacy planning.",
    fullDescription: "Dedicated support for families seeking structure, continuity, and long-term legacy planning.",
    image: images.family,
    icon: Users,
    benefits: [
      "Family governance support",
      "Succession planning coordination",
      "Wealth administration support",
      "Philanthropy coordination",
      "Next-generation planning",
      "Legacy preservation"
    ],
    helpCards: [
      { title: "Aligned Priorities", text: "Create structure around shared goals and family responsibilities." },
      { title: "Preserving Legacy", text: "Support long-term continuity across generations." },
      { title: "Professional Support", text: "Coordinate with advisors while keeping the family experience simple." }
    ],
    why: "Families thrive when private affairs are managed with clarity, independence, and long-term care.",
    ctaTitle: "Secure Your Family's Future",
    ctaText: "Private office support for the next generation.",
    ctaButton: "Get Started"
  },
  {
    title: "Education Advisory",
    slug: "education-advisory",
    category: "Family Office",
    shortDescription: "School selection, admissions, and educational planning for your family.",
    fullDescription: "Education planning support for families seeking the best academic path for the next generation.",
    image: images.education,
    icon: GraduationCap,
    benefits: [
      "School selection",
      "University admissions support",
      "Overseas education planning",
      "Student relocation support",
      "Tutoring coordination",
      "Long-term education planning"
    ],
    helpCards: [
      { title: "Academic Planning", text: "Map the path from school placement to future opportunity." },
      { title: "Global Access", text: "Navigate international education options with informed support." },
      { title: "Family Support", text: "Coordinate the practical needs around each educational move." }
    ],
    why: "The right education strategy gives families confidence through every transition.",
    ctaTitle: "Plan Their Future With Confidence",
    ctaText: "Guidance for every stage of the academic journey.",
    ctaButton: "Speak With Us"
  },
  {
    title: "Health & Wellness",
    slug: "health-wellness",
    category: "Lifestyle",
    shortDescription: "Access to world-class healthcare, wellness programs, and medical concierge.",
    fullDescription:
      "Premium healthcare and wellness coordination designed around comfort, privacy, and quality of life.",
    image: images.health,
    icon: HeartPulse,
    benefits: [
      "Medical concierge coordination",
      "Wellness retreats",
      "Preventive care planning",
      "Fitness and nutrition support",
      "Specialist appointment coordination",
      "Family wellness planning"
    ],
    helpCards: [
      { title: "Private Coordination", text: "Support for appointments, specialists, and wellness priorities." },
      { title: "Wellness Access", text: "Connect with programs and retreats suited to your lifestyle." },
      { title: "Ongoing Care", text: "Keep wellbeing organized for individuals and families." }
    ],
    why: "Wellbeing deserves the same level of planning and discretion as every other private matter.",
    ctaTitle: "Prioritize Wellbeing",
    ctaText: "Private wellness coordination for a healthier life.",
    ctaButton: "Contact Us"
  },
  {
    title: "Event Management",
    slug: "event-management",
    category: "Lifestyle",
    shortDescription: "Private events, corporate gatherings, and special occasions.",
    fullDescription:
      "Exceptional private and corporate events managed with precision, discretion, and creative excellence.",
    image: images.event,
    icon: CalendarDays,
    benefits: [
      "Private celebrations",
      "Corporate gatherings",
      "VIP guest management",
      "Venue sourcing",
      "Travel and logistics",
      "End-to-end event coordination"
    ],
    helpCards: [
      { title: "Concept to Completion", text: "Every detail is planned from first idea to final guest departure." },
      { title: "Guest Experience", text: "Hospitality, flow, and privacy are considered at every stage." },
      { title: "Flawless Execution", text: "Reliable coordination keeps the occasion polished and calm." }
    ],
    why: "A meaningful event should feel effortless to host and unforgettable to attend.",
    ctaTitle: "Create an Unforgettable Experience",
    ctaText: "Private event support with quiet precision.",
    ctaButton: "Plan Your Event"
  },
  {
    title: "Procurement Services",
    slug: "procurement-services",
    category: "Support",
    shortDescription: "Sourcing rare items, luxury goods, and specialized requirements.",
    fullDescription:
      "Discreet sourcing of rare, luxury, and specialist items through trusted global channels.",
    image: images.procurement,
    icon: ShoppingCart,
    benefits: [
      "Luxury goods sourcing",
      "Watches and jewellery",
      "Art and collectibles",
      "Specialist products",
      "Vehicle sourcing support",
      "Confidential procurement"
    ],
    helpCards: [
      { title: "Rare Access", text: "Locate distinctive items through a refined global network." },
      { title: "Trusted Sourcing", text: "Coordinate suppliers and verification with careful discretion." },
      { title: "Discreet Delivery", text: "Manage the request from sourcing to secure handover." }
    ],
    why: "Specialist procurement depends on access, judgement, and confidentiality.",
    ctaTitle: "Source With Confidence",
    ctaText: "Tell us what you are looking for.",
    ctaButton: "Make a Request"
  }
];

export const trustFeatures = [
  { title: "Absolute Discretion", text: "Your privacy is our priority", icon: ShieldCheck },
  { title: "Global Network", text: "Local expertise, worldwide", icon: Plane },
  { title: "Tailored Solutions", text: "Designed around your life", icon: Sparkles },
  { title: "24/7 Availability", text: "Always here, whenever you need", icon: BriefcaseBusiness }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
