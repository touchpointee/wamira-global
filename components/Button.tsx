import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  primary:
    "bg-gold text-[#071312] shadow-gold hover:bg-gold-light hover:-translate-y-0.5",
  secondary:
    "border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5"
};

export default function Button({ href, variant = "primary", children, className = "", ...props }: Props) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition duration-300 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}
