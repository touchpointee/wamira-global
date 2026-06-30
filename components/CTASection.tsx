import Image from "next/image";
import Button from "@/components/Button";
import { images } from "@/lib/utils";

export default function CTASection({
  title = "Experience The Legacy Standard",
  text = "Let us manage your world, so you can live yours.",
  button = "Get In Touch",
  href = "/contact"
}: {
  title?: string;
  text?: string;
  button?: string;
  href?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="relative overflow-hidden rounded border border-gold-champagne/40 px-6 py-16 text-center shadow-gold">
        <Image src={images.skyline} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-teal-dark/85" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-white md:text-5xl leading-tight">
            {title.includes("Legacy") ? (
              <>
                {title.replace("Legacy Standard", "")}
                <span className="text-gold-champagne">Legacy Standard</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mx-auto mt-6 text-base text-white/80 leading-7">{text}</p>
          <Button href={href} className="mt-8">
            {button}
          </Button>
        </div>
      </div>
    </section>
  );
}
