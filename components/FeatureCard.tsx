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
    <div className="group rounded border border-white/8 bg-white/[0.035] p-6 shadow-dark transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.055]">
      <Icon className="mb-5 h-8 w-8 text-gold transition group-hover:scale-110" />
      <h3 className="mb-2 text-lg font-semibold text-ivory">{title}</h3>
      <p className="text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
