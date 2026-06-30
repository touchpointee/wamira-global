import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service, withImage = false }: { service: Service; withImage?: boolean }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded border border-white/8 bg-white/[0.04] shadow-dark transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]"
    >
      {withImage && (
        <div className="relative h-48 overflow-hidden">
          <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        </div>
      )}
      <div className="p-7">
        <Icon className="mb-6 h-10 w-10 text-gold" />
        <h3 className="mb-3 text-xl font-semibold text-ivory">{service.title}</h3>
        <p className="mb-6 text-sm leading-6 text-muted">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
          Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
