"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";

const links = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top
      if (currentScrollY < 50) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
        <header
      className={`fixed top-4 left-0 z-50 w-full px-4 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-[calc(100%+1rem)]" : "translate-y-0"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-md border border-[var(--border)] bg-[var(--background)]/75 px-4 py-3 backdrop-blur-lg md:px-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/branding/logo.svg"
            alt="Story Labs"
            width={64}
            height={64}
            priority
          />
        </Link>

        {/* Centered links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-display font-bold transition-opacity hover:opacity-50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Apply */}
        <Button href="#apply" variant="secondary">
          slave labour application
        </Button>
      </nav>
    </header>
  );
}