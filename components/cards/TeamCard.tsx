import Image from "next/image";

function TeamSquiggle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 453 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.81836 6.81844C8.24643 7.63097 11.1149 10.0932 14.5004 12.86C16.9818 14.888 19.117 16.4579 21.5823 17.7906C24.0671 19.1338 27.5254 19.5357 33.8778 19.8465C38.4258 20.0691 43.3203 19.9542 48.1432 18.52C50.9033 17.6992 58.0566 14.8452 67.2836 10.9488C74.7444 7.79822 81.0657 7.02773 87.7321 6.30754C97.6468 5.23642 102.204 7.2247 107.34 8.4558C110.829 9.29201 114.527 10.918 117.503 12.2507C120.479 13.5833 124.166 16.0393 127.352 18.3015C129.676 19.9522 134.003 21.9855 139.349 24.9679C142.388 26.6635 146.732 26.9222 151.25 27.03C154.783 27.1142 169.397 23.2659 179.156 20.4682C186.211 18.446 195.57 14.4143 199.162 12.9801C204.383 10.8951 210.934 8.06185 217.006 7.63712C223.144 7.20782 230.41 9.88387 241.41 12.7585C245.807 13.9076 248.101 15.6331 250.566 16.7657C254.283 18.4734 258.565 20.976 261.233 22.3025C264.818 24.0844 269.214 25.8881 274.973 27.5378C278.948 28.6767 284.393 28.3626 288.216 27.8517C292.834 27.2345 299.794 24.6816 304.113 23.3397C308.054 22.1148 311.699 20.3728 315.195 19.0309C318.684 17.6919 322.373 16.4702 326.272 15.3376C332.027 13.6661 345.086 12.3584 353.039 12.6661C362.624 13.0371 367.923 12.1491 371.515 12.5615C379.517 13.4803 390.674 19.5233 395.623 21.7886C401.968 24.6928 409.35 27.1192 415.317 27.8486C420.035 28.4252 425.772 27.5501 431.731 25.3957C435.412 24.0646 437.689 21.6039 440.358 19.4464C441.18 18.7293 442.195 17.7136 443.023 16.9873C443.851 16.2609 444.461 15.8547 445.088 15.4361"
        stroke="#01995C"
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 71 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.0842 5.00024C36.1659 32.3071 39.9734 45.0186 60.8435 53.8204C43.2615 68.9484 37.8959 81.9723 34.0842 111C31.2151 79.9997 26.929 66.1442 9.84351 53.8204C26.7067 45.9754 31.8813 35.3111 34.0842 6.0034"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TeamMarquee({
  people,
}: {
  people: { name: string; position: string; image: string }[];
}) {
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
            className="group flex w-44 shrink-0 flex-col gap-3"
          >
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute inset-0 translate-x-0 translate-y-0 bg-[var(--ontik-accent)] transition-transform duration-150 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="absolute inset-0 overflow-hidden border-2 border-black bg-[var(--surface)]">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={176}
                  height={235}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

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
    { name: "Dev Damani", position: "Sponsorship Outreach", image: "/team/headshots/Dev.webp" },
    { name: "Hayley Moon", position: "Sponsorship Outreach", image: "/team/headshots/Hayley.webp" },
    { name: "Joshua Yu", position: "Sponsorship Outreach", image: "/team/headshots/Joshua.webp" },
    { name: "Justin Kresnadi", position: "Logistics", image: "/team/headshots/Justin.webp" },
    { name: "Meher Talwar", position: "Logistics", image: "/team/headshots/Meher.webp" },
    { name: "Olivia Li", position: "Event Management", image: "/team/headshots/Olivia Li.webp" },
    { name: "Ontik Reza", position: "Founder", image: "/team/headshots/Ontik.webp" },
    { name: "Riham Ahmad", position: "Event Management", image: "/team/headshots/Riham.webp" },
    { name: "Theo Lagman", position: "Marketing", image: "/team/headshots/Theo.webp" },
  ];

  return (
    <article className="relative h-full overflow-hidden bg-[var(--background)]">
      <div className="flex h-full flex-col justify-between px-6 py-12 md:px-16 md:py-16">
        <span className="font-body text-sm uppercase tracking-[0.15em]">
          TEAM
        </span>

        <div>
          <h2 className="relative inline-block font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            The
            <br />
            <span className="relative inline-block font-bold text-[var(--ontik-accent)]">
              team.
              <TeamSquiggle className="pointer-events-none absolute left-0 top-full mt-1 h-auto w-full" />
            </span>
          </h2>

          <div className="relative mt-24">
            <Sparkle className="pointer-events-none absolute -top-10 right-4 h-14 w-10 rotate-[-16deg] text-[var(--foreground)] md:-top-20 md:right-34 md:h-16 md:w-12" />
            <Sparkle className="pointer-events-none absolute -top-10 right-4 h-14 w-10 rotate-[8deg] text-[var(--ontik-accent)] md:-top-24 md:right-10 md:h-20 md:w-14" />
            <TeamMarquee people={team} />
          </div>
        </div>
      </div>
    </article>
  );
}