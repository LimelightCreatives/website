"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/Button";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "WHAT'S NEXT", href: "#timeline" },
  // { label: "SPONSORS", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "TEAM", href: "#team" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Skip autohide on mobile — nav stays put
      if (window.innerWidth < 768) {
        setHidden(false);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToCard = (id: string) => {
    const card = document.getElementById(id);

    if (!card) return;

    /*
     * Temporarily remove sticky positioning so we can measure
     * where the card naturally exists in the document.
     */
    const previousPosition = card.style.position;

    card.style.position = "static";

    const targetTop =
      card.getBoundingClientRect().top + window.scrollY;

    // Restore the sticky positioning.
    card.style.position = previousPosition;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed left-0 top-4 z-50 w-full px-4 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-[calc(100%+1rem)]" : "translate-y-0"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-sm border border-[var(--border)] bg-[var(--background)] px-2 py-2 md:px-3">
        {/* Logo */}
        <a href="/" aria-label="Go to home">
          <Image
            src="/branding/logo.svg"
            alt="Story Labs"
            width={64}
            height={64}
            priority
          />
        </a>

        {/* Navigation */}
        {isHome && (
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            {links.map((link, index) => {
              const id = link.href.slice(1);

              return (
                <div key={link.href} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => scrollToCard(id)}
                    className="px-3 py-2 font-display text-sm font-bold tracking-[0.12em] transition-opacity hover:opacity-50"
                  >
                    {link.label}
                  </button>

                  {index < links.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="font-display text-sm"
                    >
                      /
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <Button href="#apply" variant="secondary">
          REGISTER {">"}
        </Button>
      </nav>
    </header>
  );
}
