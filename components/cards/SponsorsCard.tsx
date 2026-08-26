function SponsorMarquee({
  sponsors,
  reverse = false,
}: {
  sponsors: string[];
  reverse?: boolean;
}) {
  // duplicate the list so the loop is seamless
  const track = [...sponsors, ...sponsors];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max gap-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {track.map((sponsor, i) => (
          <div
            key={`${sponsor}-${i}`}
            className="flex aspect-[3/2] w-80 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-lg"
          >
            {sponsor}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SponsorsCard() {
  const sponsorsRowOne = ["Sponsor One", "Sponsor Two", "Sponsor Three"];
  const sponsorsRowTwo = ["Sponsor Four", "Sponsor Five", "Sponsor Six"];

  return (
    <article className="relative h-full bg-[var(--background)]">
      <div className="flex h-full flex-col justify-between px-6 py-12 md:px-16 md:py-16">
        <span className="font-body text-sm uppercase tracking-[0.15em]">
          SPONSORS
        </span>

        <div>
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Our
            <br />
            <span className="font-bold">sponsors.</span>
          </h2>

          <p className="mt-10 max-w-xl font-body text-lg leading-relaxed md:text-xl">
            sponsor blah blah blah blah, two lines
          </p>

          <div className="mt-10 space-y-6">
            <SponsorMarquee sponsors={sponsorsRowOne} />
          </div>
        </div>
      </div>
    </article>
  );
}