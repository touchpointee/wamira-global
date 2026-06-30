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
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/88 to-obsidian/35" />
      <div className="absolute inset-0 bg-luxury-radial" />
      <div className="relative mx-auto max-w-7xl px-5 pb-24">
        <h1 className="font-serif text-5xl leading-tight text-ivory md:text-7xl">{title}</h1>
        {breadcrumb && <Breadcrumb current={breadcrumb} />}
        {subtitle && <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{subtitle}</p>}
      </div>
    </section>
  );
}
