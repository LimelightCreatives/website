import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "border-[2px] px-4 py-2 font-display font-bold transition-colors";

  const variants = {
    primary:
      "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]",

    secondary:
      "border-[var(--foreground)] bg-transparent text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
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