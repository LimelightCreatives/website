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

function ScheduleRow({ slot, stacked }: { slot: Slot; stacked: boolean }) {
  const milestone = slot.kind === "milestone";

  const nameClass = `font-display text-xl leading-tight md:text-2xl ${
    milestone ? "" : "text-[var(--lc-cream)]/85"
  }`;
  const timeClass = `font-body text-sm tabular-nums ${
    milestone ? "text-[var(--lc-green-bright)]" : "text-[var(--lc-cream)]/55"
  }`;

  return (
    <li className="border-t border-current/15 py-4 first:border-t-0">
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

export function ScheduleList({ slots }: { slots: Slot[] }) {
  const measureRef = useRef<HTMLUListElement>(null);
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const container = measureRef.current;
    if (!container) return;

    const check = () => {
      const rows = container.querySelectorAll<HTMLElement>("[data-measure-name]");
      let anyCollides = false;
      rows.forEach((row) => {
        const lineHeight = parseFloat(getComputedStyle(row).lineHeight);
        if (row.scrollHeight > lineHeight * 1.4) anyCollides = true;
      });
      setStacked(anyCollides);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(container);
    return () => ro.disconnect();
  }, [slots]);

  return (
    <>
      {/* Hidden measurer: every row laid out in the inline template,
          regardless of the `stacked` state actually being rendered below.
          Decoupling this from the real output is what stops the measurement
          from flip-flopping based on its own previous decision. */}
      <ul aria-hidden className="invisible pointer-events-none absolute inset-x-0 top-0 -z-10" ref={measureRef}>
        {slots.map((slot) => (
          <li key={`${slot.time}-${slot.name}-measure`} className="py-4">
            {slot.tag ? (
              <div className="grid grid-cols-[5.5rem_1fr_auto] gap-x-4">
                <span />
                <span
                  data-measure-name
                  className="font-display text-xl leading-tight md:text-2xl"
                >
                  {slot.name}
                </span>
                <Tag tag={slot.tag} />
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <ul className="relative mt-6">
        {slots.map((slot) => (
          <ScheduleRow key={`${slot.time}-${slot.name}`} slot={slot} stacked={stacked} />
        ))}
      </ul>
    </>
  );
}