import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="grid min-h-screen place-items-center bg-luxury-radial px-5 pt-24 text-center">
      <div>
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-gold text-gold-light">
          <Check className="h-16 w-16" />
        </div>
        <h1 className="mt-8 font-serif text-6xl text-gold-light">Thank You!</h1>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Your message has been received. Our team will get back to you shortly.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-gold-light">
          Back to Home
        </Link>
        <div className="relative mx-auto mt-20 h-36 w-36 overflow-hidden">
          <Image src="/images/logo-removebg.png" alt="Wamira Global" fill sizes="144px" className="object-contain" />
        </div>
      </div>
    </section>
  );
}
