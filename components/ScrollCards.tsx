"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AboutCard } from "./cards/AboutCard";
import { TimelineCard } from "./cards/TimelineCard";
import { SponsorsCard } from "./cards/SponsorsCard";
import { FAQCard } from "./cards/FAQCard";
import { TeamCard } from "./cards/TeamCard";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: "about", number: "01", content: <AboutCard /> },
  { id: "timeline", number: "02", content: <TimelineCard /> },
  // { id: "sponsors", number: "03", content: <SponsorsCard /> },
  { id: "faq", number: "04", content: <FAQCard /> },
  { id: "team", number: "05", content: <TeamCard /> },
];

// how much extra scroll distance a card gets to sit fully visible
// before the next card is allowed to start covering it
const HOLD_VH = 40;

export function ScrollCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      ScrollTrigger.config({
        ignoreMobileResize: true, // ignore address-bar-driven resize events on mobile
      });

      cardRefs.current
        .filter((el): el is HTMLDivElement => el !== null)
        .forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "bottom bottom",
            endTrigger: sectionRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section ref={sectionRef}>
      {cards.map((card, index) => (
        <div key={card.id}>
          <div
            id={card.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="relative min-h-[100svh] bg-[var(--background)] px-4 py-6 md:px-6"
            style={{ zIndex: index + 1 }}
          >
            {card.content}
          </div>

          {index < cards.length - 1 && (
            <div aria-hidden style={{ height: `${HOLD_VH}vh` }} />
          )}
        </div>
      ))}
    </section>
  );
}