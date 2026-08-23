const cards = [
  {
    number: "01",
    title: "Build",
    description:
      "Turn an idea into something real alongside a room full of curious people.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Meet mentors, experiment with new technology, and pick up skills along the way.",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Show the world what you made and get your moment in the limelight.",
  },
];

export function ScrollCards() {
  return (
    <section className="px-4 py-16 md:px-6">
      {cards.map((card, index) => (
        <div
          key={card.number}
          className="sticky top-6 mb-8 min-h-[calc(100vh-3rem)] border-[2px] border-[var(--foreground)] bg-[var(--background)] p-8 md:p-12"
          style={{
            zIndex: index,
          }}
        >
          <div className="flex min-h-[calc(100vh-7rem)] flex-col justify-between">
            <span className="font-display text-sm font-bold">
              {card.number}
            </span>

            <div>
              <h2 className="font-display text-[clamp(4rem,12vw,11rem)] font-bold leading-[0.8] tracking-[-0.07em]">
                {card.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}