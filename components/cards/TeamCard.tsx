import Image from "next/image";

function TeamMarquee({
  people,
}: {
  people: { name: string; position: string; image: string }[];
}) {
  // Duplicate enough times to ensure seamless looping
  const track = [...people, ...people, ...people, ...people];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className="flex w-max gap-6"
        style={{
          animation: "marquee-team 40s linear infinite",
        }}
      >
        {track.map((person, i) => (
          <div
            key={`${person.name}-${i}`}
            className="flex w-44 shrink-0 flex-col gap-3"
          >
            {/* Image container */}
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[var(--surface)]">
              <Image
                src={person.image}
                alt={person.name}
                width={176}
                height={235}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name and position */}
            <div>
              <p className="font-display font-bold">{person.name}</p>
              <p className="font-body text-sm text-[var(--foreground)]/70">
                {person.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-team {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * (176px + 24px) * ${people.length}));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="animation: marquee-team"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export function TeamCard() {
  const team = [
    { name: "Ontik Reza", position: "Sponsorship Outreach", image: "/team/headshots/Ontik.jpg"},
    { name: "Dev Damani", position: "Sponsorship Outreach", image: "/team/headshots/Dev.jpg"},
    { name: "Arda Redjeb", position: "Logistics", image: "/team/headshots/Arda.jpg" },
    { name: "Hayley Moon", position: "Sponsorship Outreach", image: "/team/headshots/Hayley.jpg" },
    { name: "Joshua Yu", position: "Sponsorship Outreach", image: "/team/headshots/Joshua.jpg" },
    { name: "Theo Lagman", position: "Marketing", image: "/team/headshots/Theo.jpg" },
    { name: "Riham Ahmad", position: "Event Management", image: "/team/headshots/Riham.jpg" },
    { name: "Meher Talwar", position: "Logistics", image: "/team/headshots/Meher.jpg" },
    { name: "Justin Kresnadi", position: "Logistics", image: "/team/headshots/Justin.jpg" },
    { name: "Amisha Joshi", position: "Marketing", image: "/team/headshots/Amisha.jpg" },
    { name: "Anya Shukla", position: "Event Management", image: "/team/headshots/Anya.jpg" },
    { name: "Olivia Li", position: "Event Management", image: "/team/headshots/Olivia Li.jpg" },
  ];

  return (
    <article className="relative h-full bg-[var(--background)]">
      <div className="flex h-full flex-col justify-between px-6 py-12 md:px-16 md:py-16">
        <span className="font-body text-sm uppercase tracking-[0.15em]">
          TEAM
        </span>

        <div>
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            The
            <br />
            <span className="font-bold">team.</span>
          </h2>

          <div className="mt-15">
            <TeamMarquee people={team} />
          </div>
        </div>
      </div>
    </article>
  );
}