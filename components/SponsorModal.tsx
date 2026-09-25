"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function SponsorModal({ onClose }: { onClose: () => void }) {
  const email = "inquiries@limelightcreatives.org";
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // lock background scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // close on escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6 backdrop-blur-sm bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black md:translate-x-4 md:translate-y-4" />

        <div
          className="relative border-2 border-black p-8"
          style={{ background: "var(--background)" }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 text-xl leading-none"
            style={{ color: "var(--foreground)" }}
          >
            &times;
          </button>

          <h2
            className="mb-2 text-2xl font-display font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Interested in sponsoring?
          </h2>
          <p
            className="mb-6 text-sm"
            style={{ color: "var(--foreground)", opacity: 0.65 }}
          >
            Reach out and we&rsquo;ll get back to you.
          </p>

          <a
            href={`mailto:${email}`}
            className="inline-block text-lg font-body font-semibold underline"
            style={{ color: "var(--foreground)" }}
          >
            {email}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}