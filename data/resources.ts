import { images } from "@/lib/utils";

export type ResourceArticle = {
  title: string;
  slug: string;
  category: "Insights" | "Guides" | "News";
  excerpt: string;
  content: string;
  date: string;
  image: string;
};

export const resources: ResourceArticle[] = [
  {
    title: "The Future of Luxury Mobility",
    slug: "future-of-luxury-mobility",
    category: "Insights",
    excerpt: "How global citizens are redefining seamless travel and relocation.",
    content:
      "Luxury mobility is no longer only about reaching a destination. For global citizens, it is about privacy, continuity, speed, and comfort across every border. The best mobility planning brings aviation, residency, destination support, and family logistics into one discreet rhythm.\n\nAt Wamira Global, mobility support is shaped around the individual. Each journey is planned with awareness of personal preferences, documentation needs, security considerations, and the standards expected by families who live internationally.\n\nThe future belongs to service models that anticipate before they react. Whether arranging private aviation, relocation support, or VIP arrival coordination, the experience should feel calm, protected, and precisely timed.",
    date: "Jan 15, 2025",
    image: images.jet
  },
  {
    title: "Building a Lasting Legacy",
    slug: "building-a-lasting-legacy",
    category: "Guides",
    excerpt: "Key principles for families planning across generations.",
    content:
      "A lasting legacy is built through more than assets. It depends on values, clear governance, considered decisions, and the ability to preserve continuity as families grow and move across generations.\n\nFor many families, the challenge is not ambition but coordination. Advisors, properties, education plans, philanthropic goals, and family priorities all need structure. A private office partner helps bring these moving parts into a thoughtful operating framework.\n\nThe strongest legacy plans are practical, private, and adaptable. They protect today’s needs while giving the next generation the clarity to carry family vision forward.",
    date: "Jan 20, 2025",
    image: images.family
  },
  {
    title: "Wellness While Traveling",
    slug: "wellness-while-traveling",
    category: "Insights",
    excerpt: "Maintaining health, privacy, and balance while moving globally.",
    content:
      "Travel can create pressure on health, routine, and personal balance. For individuals and families with demanding schedules, wellness planning should travel with them rather than wait until they return home.\n\nEffective wellness support may include specialist appointment coordination, preventive care planning, fitness and nutrition support, and access to private wellness retreats. Just as importantly, it protects privacy while reducing the burden of arranging care in unfamiliar locations.\n\nA discreet wellness plan gives global lives more stability. It helps ensure that movement across countries does not mean compromising comfort, continuity, or wellbeing.",
    date: "Feb 05, 2025",
    image: images.health
  },
  {
    title: "Private Aviation Guide",
    slug: "private-aviation-guide",
    category: "Guides",
    excerpt: "What to consider when arranging private aviation worldwide.",
    content:
      "Private aviation is most valuable when it is coordinated with precision. Aircraft suitability, routing, airport access, passenger needs, privacy preferences, and ground arrangements all influence the quality of the journey.\n\nA refined private aviation request should begin with purpose. The right aircraft and itinerary depend on who is travelling, what must be protected, and how the arrival experience should unfold. Details such as VIP terminal support, onward transfers, and destination readiness matter.\n\nWith the right coordination, private aviation becomes more than transport. It becomes a quiet extension of a well-managed lifestyle.",
    date: "Feb 16, 2025",
    image: images.jet
  },
  {
    title: "Education Planning Overseas",
    slug: "education-planning-overseas",
    category: "Guides",
    excerpt: "How families can plan global education with confidence.",
    content:
      "Education planning is one of the most personal decisions a family can make. It involves academic standards, location, admissions timelines, student wellbeing, and the broader vision for a child’s future.\n\nInternational education adds another layer of complexity. Families may need support with school selection, overseas planning, student relocation, tutoring coordination, and long-term pathway decisions. The process benefits from careful research and discreet guidance.\n\nWhen education planning is handled well, families gain clarity. Students are better supported, transitions feel smoother, and academic decisions align with long-term family goals.",
    date: "Mar 02, 2025",
    image: images.education
  },
  {
    title: "The Art of Concierge",
    slug: "the-art-of-concierge",
    category: "Insights",
    excerpt: "Why exceptional service is built on anticipation and discretion.",
    content:
      "True concierge service is not loud. It is measured, observant, and built on the ability to understand what is needed before it becomes urgent. The finest service often feels invisible because every detail has already been considered.\n\nAnticipation requires trust and context. Preferences, timings, privacy expectations, and personal standards all shape how support should be delivered. Discretion ensures that this understanding remains protected.\n\nFor Wamira Global, concierge is not simply about fulfilling requests. It is about creating ease, preserving time, and managing life’s details with quiet excellence.",
    date: "Mar 18, 2025",
    image: images.lounge
  }
];
