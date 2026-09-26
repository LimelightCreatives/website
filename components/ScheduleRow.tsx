// ScheduleRow.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Kind = "open" | "work" | "workshop" | "break" | "milestone";
type Slot = { time: string; name: string; kind: Kind; tag?: string };

function Tag({ tag }: { tag: string }) {
  return (
    <span
      className={`w-fit rounded-full px-3 py-1 font-body text-[0.7rem] tracking-[0.08em] ${
        tag === "Compulsory"
          ? "bg-[var(--lc-green)] text-[var(--lc-cream)]"
          : "border border-[var(--lc-mint)]/60 text-[var(--lc-mint)]"
      }`}
    >
      {tag}
    </span>
  );
}

export function ScheduleRow({ slot }: { slot: Slot }) {
  const milestone = slot.kind === "milestone";
  const measureRef = useRef<HTMLSpanElement>(null);
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    if (!slot.tag) return; // nothing to collide with, never stack
    const el = measureRef.current;
    if (!el) return;

    const check = () => {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      // more than ~1 line tall means the label wrapped in the inline layout
      setStacked(el.scrollHeight > lineHeight * 1.4);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [slot.tag, slot.name]);

  const nameClass = `font-display text-xl leading-tight md:text-2xl ${
    milestone ? "" : "text-[var(--lc-cream)]/85"
  }`;
  const timeClass = `font-body text-sm tabular-nums ${
    milestone ? "text-[var(--lc-green-bright)]" : "text-[var(--lc-cream)]/55"
  }`;

  return (
    <li className="relative border-t border-current/15 py-4 first:border-t-0">
      {/* Hidden measurer: always laid out as the inline (time | name | tag)
          template regardless of what's actually shown, so measuring it can
          never be thrown off by our own decision to stack or not. */}
      {slot.tag && (
        <div
          aria-hidden
          className="invisible pointer-events-none absolute inset-x-0 top-0 grid grid-cols-[5.5rem_1fr_auto] gap-x-4"
        >
          <span />
          <span ref={measureRef} className={nameClass}>
            {slot.name}
          </span>
          <Tag tag={slot.tag} />
        </div>
      )}

      {stacked ? (
        <div className="flex flex-col gap-1.5">
          <span className={timeClass}>{slot.time}</span>
          <span className={nameClass}>{slot.name}</span>
          {slot.tag && <Tag tag={slot.tag} />}
        </div>
      ) : (
        <div className="flex items-start gap-x-4">
          <span className={`${timeClass} w-[5.5rem] shrink-0 pt-1.5`}>{slot.time}</span>
          <div className="min-w-0 flex-1 flow-root">
            {slot.tag && (
              <span className="float-right mb-1 ml-3 mt-1.5">
                <Tag tag={slot.tag} />
              </span>
            )}
            <span className={nameClass}>{slot.name}</span>
          </div>
        </div>
      )}
    </li>
  );
}