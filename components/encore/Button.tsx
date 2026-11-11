"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/**
 * Idle:   transparent fill, white border, white text, no shadow.
 * Hover:  fill fades to white, text goes dark, border goes transparent,
 *         and a hard white drop shadow fades in.
 *
 * `bg-clip-padding` keeps the fill out of the border area, so the now-transparent
 * border becomes a visible gap between the button and its shadow.
 */
const styles =
  "relative inline-flex items-center justify-center border-2 border-white bg-transparent bg-clip-padding " +
  "px-4 py-2 font-display font-bold text-white " +
  "translate-x-0 translate-y-0 shadow-black " +
  "transition-all duration-150 ease-out " +
  "hover:bg-white hover:text-black " +
  "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(255,255,255,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white " +
  "disabled:pointer-events-none disabled:opacity-60";

export function Button({ href, children, className = "", ...rest }: ButtonProps) {
  const classes = `${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}