import { AboutCard } from "./cards/AboutCard";
import { TimelineCard } from "./cards/TimelineCard";
import { SponsorsCard } from "./cards/SponsorsCard";
import { FAQCard } from "./cards/FAQCard";
import { TeamCard } from "./cards/TeamCard";

const cards = [
  { id: "about", number: "01", content: <AboutCard /> },
  { id: "timeline", number: "02", content: <TimelineCard /> },
  // { id: "sponsors", number: "03", content: <SponsorsCard /> },
  { id: "faq", number: "04", content: <FAQCard /> },
  { id: "team", number: "05", content: <TeamCard /> },
];

export function ScrollCards() {
  return (
    <section className="px-4 py-16 md:px-6">
      {cards.map((card, index) => (
        <div
          key={card.id}
          id={card.id}
          className="sticky top-6 mb-8 h-[calc(100vh-3rem)] overflow-hidden bg-[var(--background)]"
          style={{
            zIndex: index + 1,
          }}
        >
          {card.content}
        </div>
      ))}
    </section>
  );
}