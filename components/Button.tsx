import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
};

export function Button({ href, children, className = "" }: ButtonProps) {
  const styles = `
    border-[2px]
    border-[var(--foreground)]
    px-4
    py-2
    font-display
    font-bold
    text-[var(--foreground)]
    transition-colors
    hover:bg-[var(--foreground)]
    hover:text-[var(--background)]
  `;

  if (href) {
    return (
      <Link href={href} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles} ${className}`}>
      {children}
    </button>
  );
}