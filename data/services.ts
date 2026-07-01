import { Building2, Handshake, Landmark, ShieldCheck, type LucideIcon } from "lucide-react";
import { images } from "@/lib/utils";

export type Service = {
  title: string;
  slug: string;
  category: "Advisory" | "Structuring" | "Investment" | "Private";
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: LucideIcon;
  benefits: string[];
  helpCards: { title: string; text: string }[];
  why: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export const services: Service[] = [
  {
    title: "UAE Market Entry Advisory",
    slug: "uae-market-entry-advisory",
    category: "Advisory",
    shortDescription: "We replace market-entry uncertainty with a clear, coordinated roadmap.",
    fullDescription:
      "From jurisdiction selection to licensing pathways, banking readiness, and operational setup, we coordinate the entry route that aligns with your commercial and personal objectives.",
    image: images.skyline,
    icon: Building2,
    benefits: [
      "Jurisdiction selection",
      "Licensing pathway coordination",
      "Banking readiness",
      "Operational setup alignment"
    ],
    helpCards: [
      { title: "Market Entry Roadmap", text: "A clear plan for entering the UAE with commercial intent." },
      { title: "Professional Alignment", text: "Coordination across legal, banking, accounting, and compliance needs." },
      { title: "Execution Clarity", text: "A single advisory relationship guiding each moving part." }
    ],
    why: "The right market-entry route protects time, capital, and long-term optionality.",
    ctaTitle: "Plan Your UAE Entry",
    ctaText: "Replace uncertainty with a coordinated roadmap.",
    ctaButton: "Schedule a Consultation"
  },
  {
    title: "Strategic Entity Structuring",
    slug: "strategic-entity-structuring",
    category: "Structuring",
    shortDescription: "A structure is the foundation of ownership, control, and continuity.",
    fullDescription:
      "We coordinate the architecture of your UAE presence, including operating companies, holding vehicles, and foundation-based structures, to ensure your setup supports your long-term vision.",
    image: images.office,
    icon: Landmark,
    benefits: [
      "Operating company frameworks",
      "Holding and SPV layers",
      "Foundation-based structures",
      "Continuity-focused ownership planning"
    ],
    helpCards: [
      { title: "Ownership Clarity", text: "Structures designed around control, protection, and continuity." },
      { title: "Governance Thinking", text: "Blueprints that support disciplined long-term decision making." },
      { title: "Cross-Border Fit", text: "Alignment of UAE entities with wider international interests." }
    ],
    why: "A considered structure supports growth, protects continuity, and reduces future complexity.",
    ctaTitle: "Structure for Long-Term Control",
    ctaText: "Coordinate your operating, holding, and governance requirements.",
    ctaButton: "Discuss Structuring"
  },
  {
    title: "Strategic Investment Coordination",
    slug: "strategic-investment-coordination",
    category: "Investment",
    shortDescription: "We support expansion through curated professional alignment and opportunity coordination.",
    fullDescription:
      "Our role is to simplify the process, helping you align the right partners and processes around your strategic goals while maintaining one clear point of contact.",
    image: images.desk,
    icon: Handshake,
    benefits: [
      "Curated professional alignment",
      "Opportunity coordination",
      "Partner process support",
      "Single point of contact"
    ],
    helpCards: [
      { title: "Strategic Alignment", text: "Partners and processes organized around your stated goals." },
      { title: "Opportunity Coordination", text: "A considered path for evaluating expansion and investment options." },
      { title: "Discreet Stewardship", text: "Communication and coordination handled with professional care." }
    ],
    why: "Strategic expansion depends on the right people, the right process, and accountable coordination.",
    ctaTitle: "Coordinate Strategic Growth",
    ctaText: "Align the right partners around your objectives.",
    ctaButton: "Start the Conversation"
  },
  {
    title: "Private Advisory",
    slug: "private-advisory",
    category: "Private",
    shortDescription: "Ongoing strategic counsel for governance, expansion, and wealth-aligned business decisions.",
    fullDescription:
      "We provide discreet advisory coordination for founders, family offices, and investors who require clarity, confidentiality, and long-term stewardship.",
    image: images.lounge,
    icon: ShieldCheck,
    benefits: [
      "Discreet counsel",
      "Governance coordination",
      "Expansion support",
      "Long-term stewardship"
    ],
    helpCards: [
      { title: "Confidential Advisory", text: "Private coordination for sensitive commercial and family-office matters." },
      { title: "Governance Support", text: "Clear thinking around ownership, continuity, and decision frameworks." },
      { title: "Long-Term Stewardship", text: "Available for ongoing coordination as your presence evolves." }
    ],
    why: "Complex decisions benefit from one discreet advisory relationship that understands the wider picture.",
    ctaTitle: "Begin Private Advisory",
    ctaText: "Discuss your objectives under strict professional confidentiality.",
    ctaButton: "Request a Consultation"
  }
];

export const trustFeatures = [
  { title: "Discretion", text: "Your objectives, information, and plans are always protected.", icon: ShieldCheck },
  { title: "One Point of Contact", text: "A senior advisor coordinates every aspect on your behalf.", icon: Handshake },
  { title: "Cross-Border Coordination", text: "Alignment between UAE requirements and global interests.", icon: Building2 }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
