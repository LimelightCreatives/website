import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const KEY_DATES = [
  { date: "August 30", label: "RSVPs OPEN" },
  { date: "October 18", label: "REGISTRATION FORM SENT" },
  { date: "October 24–25", label: "EVENT OPENING DAY!" },
];

type Step = {
  n: string;
  title: React.ReactNode;
  /** Swap the placeholder for a real photo by filling this in. */
  image?: { src: string; alt: string };
};

const STEPS: Step[] = [
  {
    n: "01",
    title: (
      <>
        Sign up for <em className="accent">Limelight Genesis</em>
      </>
    ),
  },
  {
    n: "02",
    title: (
      <>
        Grab <em className="accent">friends</em> (or make new friends!) and form
        a <em className="accent">team of 3</em>
      </>
    ),
  },
  {
    n: "03",
    title: (
      <>
        Learn from <em className="accent">filmmaking workshops</em>, enjoy{" "}
        <em className="accent">free food and merch!</em>
      </>
    ),
  },
  {
    n: "04",
    title: (
      <>
        Make a film &amp; <em className="accent accent-lime">win awards!</em>
      </>
    ),
  },
];

type Kind = "open" | "work" | "workshop" | "break" | "milestone";

type Slot = { time: string; name: string; kind: Kind; tag?: string };

const DAY_ONE: Slot[] = [
  { time: "8:30 AM", name: "Doors open", kind: "open" },
  { time: "9:00 AM", name: "Opening ceremony", kind: "milestone" },
  { time: "9:30 AM", name: "Working time", kind: "work" },
  {
    time: "10:00 AM",
    name: "Storyboarding workshop",
    kind: "workshop",
    tag: "Compulsory",
  },
  {
    time: "11:30 AM",
    name: "Filming workshop",
    kind: "workshop",
    tag: "Optional",
  },
  { time: "2:00 PM", name: "Lunch", kind: "break" },
  { time: "3:00 PM", name: "Working time", kind: "work" },
  { time: "6:30 PM", name: "Day 1 ends", kind: "milestone" },
];

const DAY_TWO: Slot[] = [
  { time: "8:30 AM", name: "Doors open", kind: "open" },
  { time: "9:00 AM", name: "Working time", kind: "work" },
  {
    time: "1:00 PM",
    name: "Editing workshop",
    kind: "workshop",
    tag: "Optional",
  },
  { time: "2:00 PM", name: "Lunch", kind: "break" },
  { time: "3:00 PM", name: "Working time", kind: "work" },
  { time: "3:30 PM", name: "Video submissions", kind: "milestone" },
  { time: "4:30 PM", name: "Judging", kind: "milestone" },
  { time: "5:30 PM", name: "Closing ceremony", kind: "milestone" },
  { time: "6:30 PM", name: "Day 2 ends", kind: "milestone" },
];

/* ------------------------------------------------------------------ */
/*  Decorative bits — lifted from the tan/green site so the dark        */
/*  sections read as the same brand, just after dark.                  */
/* ------------------------------------------------------------------ */

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      fill="currentColor"
    >
      <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12C7 11 11 7 12 0Z" />
    </svg>
  );
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
    >
      <path d="M0 6Q5 0 10 6T20 6T30 6T40 6T50 6T60 6T70 6T80 6T90 6T100 6T110 6T120 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Steps                                                              */
/* ------------------------------------------------------------------ */

/** Same frame treatment as the camera photo on the tan site: accent block
 *  offset down-right, 2px black border, cream panel, slight counter-rotation. */
function StepFrame({ step }: { step: Step }) {
  return (
    <div className="relative aspect-[4/3] rotate-[-1.5deg]">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 bg-[var(--lc-accent)] md:translate-x-4 md:translate-y-4"
      />

      <div className="absolute inset-0 overflow-hidden border-2 border-black bg-[var(--background)]">
        {step.image ? (
          <Image
            src={step.image.src}
            alt={step.image.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-black/40">
              photo {step.n}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function StepRow({ step, index }: { step: Step; index: number }) {
  const flip = index % 2 === 1;

  return (
    <li className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
      <div className={`pr-4 md:pr-5 ${flip ? "md:order-2" : ""}`}>
        <StepFrame step={step} />
      </div>

      <div className={flip ? "md:order-1 md:text-right" : ""}>
        <span className="font-body text-sm tracking-[0.2em] text-[var(--lc-mint)]">
          Step {step.n}
        </span>
        <p className="mt-3 font-display text-[clamp(1.75rem,3.4vw,2.9rem)] leading-[1.05] tracking-[-0.02em]">
          {step.title}
        </p>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Schedule                                                           */
/* ------------------------------------------------------------------ */

function ScheduleRow({ slot }: { slot: Slot }) {
  const milestone = slot.kind === "milestone";

  return (
    <li className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-current/15 py-4 first:border-t-0">
      <span
        className={`font-body text-sm tabular-nums ${
          milestone ? "text-[var(--lc-green-bright)]" : "text-[var(--lc-cream)]/55"
        } w-[5.5rem] shrink-0`}
      >
        {slot.time}
      </span>

      <span
        className={`font-display text-xl leading-tight md:text-2xl ${
          milestone ? "" : "text-[var(--lc-cream)]/85"
        }`}
      >
        {slot.name}
      </span>

      {slot.tag ? (
        <span
          className={`ml-auto rounded-full px-3 py-1 font-body text-[0.7rem] tracking-[0.08em] ${
            slot.tag === "Compulsory"
              ? "bg-[var(--lc-green)] text-[var(--lc-cream)]"
              : "border border-[var(--lc-mint)]/60 text-[var(--lc-mint)]"
          }`}
        >
          {slot.tag}
        </span>
      ) : null}
    </li>
  );
}

function Day({
  label,
  date,
  slots,
}: {
  label: string;
  date: string;
  slots: Slot[];
}) {
  return (
    <section className="rounded-sm border border-current/15 bg-[var(--lc-cream)]/[0.04] p-6 md:p-8">
      <header className="mb-2 flex items-baseline justify-between gap-4">
        <h4 className="font-display text-3xl md:text-4xl">{label}</h4>
        <span className="font-body text-sm text-[var(--lc-mint)]">{date}</span>
      </header>

      <ul className="mt-6">
        {slots.map((slot) => (
          <ScheduleRow key={`${slot.time}-${slot.name}`} slot={slot} />
        ))}
      </ul>
    </section>
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
          "--lc-accent": "var(--ontik-accent, #01995C)",
          "--lc-green": "#01995C",
          "--lc-green-bright": "#3FBF86",
          "--lc-mint": "#81D7D4",
          "--lc-lime": "#AAC94F",
        } as React.CSSProperties
      }
    >
      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      <div className="relative flex min-h-[100svh] flex-col justify-between px-6 py-12 md:px-16 md:py-16">
        <div className="font-body text-sm uppercase tracking-[0.15em]">
          WHAT&apos;S NEXT
        </div>

        <div>
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Launching
            <br />
            <span className="font-bold">Limelight GENESIS</span>
          </h2>

          <p className="mt-10 max-w-xl font-body text-lg leading-relaxed md:text-xl">
            Limelight Creatives is launching our very first film-a-thon this
            Spring holidays. Two days to craft your very own short film based on
            a theme!
          </p>

          <div className="mt-12 max-w-3xl space-y-4">
            {KEY_DATES.map(({ date, label }) => (
              <div
                key={date}
                className="flex items-center justify-between border-t border-current/20 pt-4"
              >
                <span className="font-display text-2xl">{date}</span>
                <span className="font-body text-md">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block pointer-events-none absolute right-[-250px] top-0 bottom-0 w-[40%] min-w-[435px] z-0">
          <Image
            src="/assets/cards/bg2.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 435px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  How it works                                               */}
      {/* ---------------------------------------------------------- */}
      <div className="relative px-6 pb-20 pt-8 md:px-16 md:pb-28">
        <Sparkle className="absolute right-10 top-4 hidden h-6 w-6 text-[var(--lc-mint)] md:block" />

        <h3 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.9] tracking-[-0.04em]">
          Four steps from
          <br />
          zero to premiere
        </h3>
        <Squiggle className="mt-3 h-3 w-[min(22rem,70%)] text-[var(--lc-green-bright)]" />

        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[var(--lc-cream)]/75">
          No experience needed. Bring an idea, or turn up and find one — we
          hand you the camera, the workshops and the weekend.
        </p>

        <ol className="mt-14 space-y-16 md:space-y-20">
          {STEPS.map((step, i) => (
            <StepRow key={step.n} step={step} index={i} />
          ))}
        </ol>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Schedule                                                   */}
      {/* ---------------------------------------------------------- */}
      <div className="relative px-6 pb-20 md:px-16 md:pb-28">
        <Sparkle className="absolute left-4 top-10 hidden h-5 w-5 text-[var(--lc-lime)] md:block" />

        <h3 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.9] tracking-[-0.04em]">
          How the weekend runs
        </h3>
        <Squiggle className="mt-3 h-3 w-[min(22rem,70%)] text-[var(--lc-green-bright)]" />

        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[var(--lc-cream)]/75">
          Two full days, October 24–25. Workshops are run by filmmakers; the
          rest of the time the room is yours.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Day label="Day one" date="Fri 24 Oct" slots={DAY_ONE} />
          <Day label="Day two" date="Sat 25 Oct" slots={DAY_TWO} />
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Close                                                      */}
      {/* ---------------------------------------------------------- */}
      <div className="relative overflow-hidden bg-[var(--lc-green)] px-6 py-16 text-[var(--lc-cream)] md:px-16 md:py-20">
        <Sparkle className="absolute right-8 top-8 h-8 w-8 text-[var(--lc-cream)]/30" />
        <Sparkle className="absolute bottom-10 right-24 h-4 w-4 text-[var(--lc-cream)]/30" />

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] tracking-[-0.04em]">
              Bring three friends.
              <br />
              Leave with a film.
            </h3>
            <p className="mt-4 max-w-md font-body text-lg leading-relaxed">
              RSVPs open August 30. Registration forms go out October 18.
            </p>
          </div>

          <a
            href="#rsvp"
            className="inline-block shrink-0 bg-[var(--lc-cream)] px-8 py-4 font-body text-base tracking-[0.06em] text-[var(--foreground)] outline-offset-4 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[var(--lc-cream)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            RSVP for Genesis
          </a>
        </div>
      </div>

      {/* accent styling for the emphasised words inside the steps */}
      <style>{`
        .lc-card .accent {
          font-style: normal;
          font-weight: 700;
          color: var(--lc-green-bright);
        }
        .lc-card .accent-lime {
          color: var(--lc-lime);
        }
      `}</style>
    </article>
  );
}
