import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Content — fill in the TODOs                                        */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "14", label: "Teams" },
  { value: "14", label: "Films" },
];

const RECAP_VIDEO = "https://www.youtube.com/embed/XTeTz2PGmDA";

// TODO: add every event photo here. Leave `src` empty to show a placeholder.
// Drop files in /public/assets/cards/recap/ and reference them as
// "/assets/cards/recap/photo-01.jpg".
const MARQUEE_PHOTOS: { src: string; alt: string }[] = [
  { src: "/assets/cards/genesis/Timeline 1_01_00_47_07.jpg", alt: "" },
  { src: "/assets/cards/genesis/DSC01555.jpg", alt: "" },
  { src: "/assets/cards/genesis/IMG_5710.jpg", alt: "" },
  { src: "/assets/cards/genesis/DSC01596.jpg", alt: "" },
  { src: "/assets/cards/genesis/IMG_5800.jpg", alt: "" },
  { src: "/assets/cards/genesis/DSC01755.jpg", alt: "" },
  { src: "/assets/cards/genesis/IMG_5887.jpg", alt: "" },
  { src: "/assets/cards/genesis/IMG_5893.jpg", alt: "" },
  { src: "/assets/cards/genesis/IMG_5899.jpg", alt: "" },
];

type Winner = {
  place: string;
  film: string;
  team: string;
  /**
   * Google Drive file ID: the long string in
   * https://drive.google.com/file/d/<FILE_ID>/view
   * The file must be shared as "Anyone with the link can view".
   */
  driveId?: string;
};

// TODO: fill in winners
const WINNERS: Winner[] = [
  { place: "1st place", film: "Check Up", team: "m&ms", driveId: "150IQ-v8yk2XKob1bsT-YhDT_wwgNEnuV" },
  { place: "2nd place", film: "Isolation", team: "tribe", driveId: "1D1mdN5SzYZL51oz38I9u7Jcjs29-0eR7" },
  { place: "3rd place", film: "Headcount", team: "redruM", driveId: "17ZH0PPFxLGFf_7lmPcP7RhdX1zc-khV7" },
];

const driveEmbed = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

/* ------------------------------------------------------------------ */
/*  Pieces                                                             */
/* ------------------------------------------------------------------ */

/** Same framed look as the step photos: black outline + offset accent block. */
function Frame({
  children,
  rotate = 0,
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 bg-[var(--lc-accent)] md:translate-x-4 md:translate-y-4"
      />
      <div className="absolute inset-0 overflow-hidden border-2 border-black bg-[var(--background)]">
        {children}
      </div>
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-body text-xs uppercase tracking-[0.2em] text-black/40">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                            */
/* ------------------------------------------------------------------ */

const TILTS = [-1.5, 2, -2.5, 1.5];

function MarqueeItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center ${hidden ? "lc-marquee-dup" : ""}`}
    >
      {MARQUEE_PHOTOS.map((p, i) => (
        <li key={i} className="shrink-0 pr-8 md:pr-12">
          <Frame
            rotate={TILTS[i % TILTS.length]}
            className="aspect-[4/3] w-[260px] md:w-[360px]"
          >
            {p.src ? (
              <Image
                src={p.src}
                alt={hidden ? "" : p.alt}
                fill
                sizes="360px"
                className="object-cover"
              />
            ) : (
              <Placeholder label="photo" />
            )}
          </Frame>
        </li>
      ))}
    </ul>
  );
}

function PhotoMarquee() {
  return (
    <div className="relative">
      <style>{`
        @keyframes lc-marquee { to { transform: translateX(-50%); } }
        .lc-marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }
        .lc-marquee-track { animation: lc-marquee 70s linear infinite; }
        .lc-marquee:hover .lc-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .lc-marquee { overflow-x: auto; }
          .lc-marquee-track { animation: none; }
          .lc-marquee-dup { display: none; }
        }
      `}</style>

      <div className="lc-marquee py-10 md:py-14" role="group" aria-label="Photos from the weekend">
        <div className="lc-marquee-track flex w-max">
          <MarqueeItems />
          <MarqueeItems hidden />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Recap video                                                        */
/* ------------------------------------------------------------------ */

function RecapVideo() {
  if (!RECAP_VIDEO) return null;

  return (
    <div className="relative px-6 pb-20 md:px-16 md:pb-28">
      <h3 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.9] tracking-[-0.04em]">
        The weekend in review
      </h3>

      <section className="mt-12 grid items-center gap-8 bg-[var(--lc-cream)]/[0.04] p-6 md:gap-12 md:p-10 lg:grid-cols-[1.6fr_1fr]">
        <Frame className="aspect-video w-full">
          <iframe
            src={RECAP_VIDEO}
            title="Limelight GENESIS recap video"
            loading="lazy"
            allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </Frame>

        <div className="flex flex-col md:items-start">
          <span className="font-body text-sm tracking-[0.2em] text-[var(--lc-mint)]">
            Recap film
          </span>
          <p className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            How 50 Teenagers Made Films in a Weekend
          </p>
          <p className="mt-4 max-w-sm font-body text-base opacity-80 md:text-lg">
            This is the recap of Limelight Genesis, our first free film-a-thon for teens, held on 24 to 25 October 2026 in Sydney. Teams of three had two days to write, shoot and edit a 1 to 2 minute short film.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Winners                                                            */
/* ------------------------------------------------------------------ */

function WinnerVideo({ w }: { w: Winner }) {
  return (
    <Frame className="aspect-video w-full">
      {w.driveId ? (
        <iframe
          src={driveEmbed(w.driveId)}
          title={`${w.film} by ${w.team}`}
          loading="lazy"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <Placeholder label="video" />
      )}
    </Frame>
  );
}

function WinnerInfo({ w, large = false }: { w: Winner; large?: boolean }) {
  return (
    <div className="flex flex-col md:items-start">
      <span className="font-body text-sm tracking-[0.2em] text-[var(--lc-mint)]">
        {w.place}
      </span>
      <p
        className={`mt-3 font-display leading-[1.05] tracking-[-0.02em] ${
          large ? "text-[clamp(2rem,4vw,3.5rem)]" : "text-3xl md:text-4xl"
        }`}
      >
        {w.film}
      </p>
      <p className="mt-2 font-body text-base opacity-80 md:text-lg">by {w.team}</p>
    </div>
  );
}

function Winners() {
  const [first, ...rest] = WINNERS;

  return (
    <div className="relative border-t border-current/20 px-6 py-16 md:px-16 md:py-24">
      <h3 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.9] tracking-[-0.04em]">
        Winners
      </h3>

      <div className="mt-12 space-y-8 md:space-y-12">
        {/* 1st place: big, side-by-side like the "how it works" rows */}
        {first && (
          <section className="grid items-center gap-8 bg-[var(--lc-cream)]/[0.04] p-6 md:gap-12 md:p-10 lg:grid-cols-[1.6fr_1fr]">
            <WinnerVideo w={first} />
            <WinnerInfo w={first} large />
          </section>
        )}

        {/* 2nd + 3rd */}
        {rest.length > 0 && (
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
            {rest.map((w) => (
              <section
                key={w.place}
                className="flex flex-col gap-8 bg-[var(--lc-cream)]/[0.04] p-6 md:p-10"
              >
                <WinnerVideo w={w} />
                <WinnerInfo w={w} />
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

export function TimelineCard() {
  return (
    <article
      className="lc-card relative overflow-hidden bg-[var(--foreground)] text-[var(--background)]"
      style={
        {
          "--lc-cream": "var(--background)",
          "--lc-green": "#01995C",
          "--lc-accent": "var(--ontik-accent, #01995C)",
          "--lc-green-bright": "#3FBF86",
          "--lc-mint": "#81D7D4",
          "--lc-lime": "#AAC94F",
        } as React.CSSProperties
      }
    >
      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      {/* The graphic is absolutely positioned at its natural height, so it
          never affects layout: it can run down past the hero, behind the
          sections that follow. */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-250px] top-0 z-0 hidden w-[40%] min-w-[435px] lg:block"
        >
          <Image
            src="/assets/cards/bg2.png"
            alt=""
            width={0}
            height={0}
            sizes="(min-width: 1024px) 40vw"
            className="h-auto w-full"
          />
        </div>

        <div className="relative z-10 flex flex-col px-6 py-12 md:px-16 md:py-16 lg:pb-24">
          <div className="mb-6 font-body text-sm uppercase tracking-[0.15em] md:mb-16 lg:mb-28">
            GENESIS
          </div>

          <div>
            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
              <span className="font-bold">Limelight GENESIS</span>
              <br />
              <span>Our first film-a-thon</span>
            </h2>

            <p className="mt-10 max-w-xl font-body text-lg leading-relaxed md:text-xl">
              In October 2026, we ran our very first film-a-thon at Golden Age
              Cinema and La Trobe University Sydney. Over two days, teams of
              three learned to write, shoot and edit short films on the theme{" "}
              <b>Read the Room.</b>
            </p>

            <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 md:gap-10">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col-reverse border-t border-current/20 pt-4"
                >
                  <dt className="mt-2 font-body text-base text-[var(--lc-mint)] md:text-lg">
                    {label}
                  </dt>
                  <dd className="font-display text-[clamp(3.5rem,7vw,6rem)] leading-none tracking-[-0.05em]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Photo marquee                                              */}
      {/* ---------------------------------------------------------- */}
      <PhotoMarquee />

      {/* ---------------------------------------------------------- */}
      {/*  Recap video                                                */}
      {/* ---------------------------------------------------------- */}
      <div className="pt-6 md:pt-10">
        <RecapVideo />
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Winners                                                    */}
      {/* ---------------------------------------------------------- */}
      <Winners />
    </article>
  );
}