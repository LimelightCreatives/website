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
    { name: "Amisha Joshi", position: "Marketing", image: "/team/headshots/Amisha.webp" },
    { name: "Anya Shukla", position: "Event Management", image: "/team/headshots/Anya.webp" },
    { name: "Arda Redjeb", position: "Logistics", image: "/team/headshots/Arda.webp" },
    { name: "Dev Damani", position: "Sponsorship Outreach", image: "/team/headshots/Dev.webp"},
    { name: "Hayley Moon", position: "Sponsorship Outreach", image: "/team/headshots/Hayley.webp" },
    { name: "Joshua Yu", position: "Sponsorship Outreach", image: "/team/headshots/Joshua.webp" },
    { name: "Justin Kresnadi", position: "Logistics", image: "/team/headshots/Justin.webp" },
    { name: "Meher Talwar", position: "Logistics", image: "/team/headshots/Meher.webp" },
    { name: "Olivia Li", position: "Event Management", image: "/team/headshots/Olivia Li.webp" },
    { name: "Ontik Reza", position: "Sponsorship Outreach", image: "/team/headshots/Ontik.webp"},
    { name: "Riham Ahmad", position: "Event Management", image: "/team/headshots/Riham.webp" },
    { name: "Theo Lagman", position: "Marketing", image: "/team/headshots/Theo.webp" },
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
      <Image
        src="/assets/cards/bg3.png"
        alt=""
        width={400}
        height={400}
        className="absolute top-[-15px] right-[-15px] h-auto"
        priority
      />
    </article>
  );
}