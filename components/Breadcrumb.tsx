import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="mt-4 flex items-center gap-3 text-xs text-white/60">
      <Link href="/" className="transition hover:text-gold-champagne">
        Home
      </Link>
      <span className="text-gold-champagne/70">/</span>
      <span className="text-white/90">{current}</span>
    </div>
  );
}
