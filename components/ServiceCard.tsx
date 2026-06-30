import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service, withImage = false }: { service: Service; withImage?: boolean }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded border border-black/5 bg-white shadow-dark transition duration-300 hover:-translate-y-0.5 hover:border-gold-champagne/40"
    >
      {withImage && (
        <div className="relative h-48 overflow-hidden">
          <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 via-transparent to-transparent" />
        </div>
      )}
      <div className="p-7">
        <Icon className="mb-6 h-10 w-10 text-gold-champagne" />
        <h3 className="mb-3 text-xl font-semibold text-charcoal group-hover:text-teal-deep transition">{service.title}</h3>
        <p className="mb-6 text-sm leading-6 text-muted">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-champagne">
          Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
