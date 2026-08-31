"use client";

import Link from "next/link";
import { useFillout } from "@/components/FilloutProvider";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const { openFillout } = useFillout();

  const baseStyles =
    "relative border-[2px] px-4 py-2 font-display font-bold transition-all duration-150 ease-out " +
    "translate-x-0 translate-y-0 shadow-[0_0_0_0_transparent] " +
    "hover:-translate-x-[2px] hover:-translate-y-[2px] " +
    "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--foreground)]";

  const variants = {
    primary:
      "border-[var(--foreground)] bg-[var(--ontik-accent)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] hover:shadow-[6px_6px_0_0_var(--foreground)]",

    secondary:
      "border-[var(--foreground)] bg-transparent text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] hover:shadow-[6px_6px_0_0_var(--foreground)]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href === "#apply") {
    return (
      <button
        type="button"
        onClick={openFillout}
        className={`${styles} ${className ?? ""}`}
      >
        {children}
      </button>
    );
  } else if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles}>
      {children}
    </button>
  );
}