"use client";

import Link from "next/link";

// const footerLinks = [
//   { label: "Code of Conduct", href: "/code-of-conduct" },
//   { label: "Privacy", href: "/privacy" },
//   { label: "Terms", href: "/terms" },
// ];

export function Footer() {
  return (
    <footer className="overflow-hidden px-6 pb-6 pt-32">
      {/* Marquee */}
      <div className="relative mb-2 overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          <span className="px-4 text-[clamp(5rem,15vw,14rem)] font-display font-bold leading-none tracking-[-0.04em]">
            LIMELIGHT CREATIVES
          </span>

          <span className="px-4 text-[clamp(5rem,15vw,14rem)] font-display font-bold leading-none tracking-[-0.04em] ">
            LIMELIGHT CREATIVES
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--border)]" />

      {/* Bottom row */}
      <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {/* {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-body transition-opacity hover:opacity-50"
            >
              {link.label}
            </Link>
          ))} */}
        </nav>

        {/* Credit */}
        <p className="text-sm font-di">
          made with <span aria-label="love">♥️</span> by LIMELIGHT CREATIVES
        </p>
      </div>
    </footer>
  );
}