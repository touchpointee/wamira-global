import type { LucideIcon } from "lucide-react";

export default function FeatureCard({
  title,
  text,
  icon: Icon
}: {
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <div className="group rounded border border-black/5 bg-white p-6 shadow-dark transition duration-300 hover:-translate-y-0.5 hover:border-gold-champagne/40">
      <Icon className="mb-5 h-8 w-8 text-gold-champagne transition group-hover:scale-105" />
      <h3 className="mb-2 text-lg font-semibold text-charcoal group-hover:text-teal-deep transition">{title}</h3>
      <p className="text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
