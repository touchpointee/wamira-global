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
      <div className="relative overflow-hidden rounded border border-gold/55 px-6 py-14 text-center shadow-gold">
        <Image src={images.skyline} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-obsidian/78" />
        <div className="relative">
          <h2 className="font-serif text-4xl text-ivory md:text-5xl">
            {title.includes("Legacy") ? (
              <>
                {title.replace("Legacy Standard", "")}
                <span className="text-gold-light">Legacy Standard</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{text}</p>
          <Button href={href} className="mt-8">
            {button}
          </Button>
        </div>
      </div>
    </section>
  );
}
