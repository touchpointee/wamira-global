import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-5 pt-24 text-center">
      <div className="absolute inset-0 bg-luxury-radial" />
      <div className="absolute font-serif text-[42vw] leading-none text-white/[0.025]">W</div>
      <div className="relative">
        <p className="font-serif text-9xl text-gold-champagne md:text-[12rem]">404</p>
        <h1 className="mt-2 font-serif text-5xl text-teal-deep">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-sm bg-teal-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-champagne">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
