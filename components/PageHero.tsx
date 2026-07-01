import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumb
}: {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative min-h-[420px] overflow-hidden pt-32">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/85 to-teal-dark/35" />
      <div className="absolute inset-0 bg-luxury-radial opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 z-10">
        <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">{title}</h1>
        {breadcrumb && <Breadcrumb current={breadcrumb} />}
        {subtitle && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
