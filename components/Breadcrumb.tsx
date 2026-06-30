import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="mt-4 flex items-center gap-3 text-xs text-muted">
      <Link href="/" className="transition hover:text-gold-light">
        Home
      </Link>
      <span className="text-gold/70">/</span>
      <span className="text-ivory">{current}</span>
    </div>
  );
}
