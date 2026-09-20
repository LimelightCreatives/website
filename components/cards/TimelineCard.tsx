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
  rotate: number;
  image?: { src: string; alt: string };
};

const STEPS: Step[] = [
  {
    n: "01",
    rotate: -1.5,
    title: (
      <>
        Sign up for <em className="accent">Limelight GENESIS</em>
      </>
    ),
    image: {
      src: "/assets/cards/steps/step1.JPG",
      alt: "alt"
    }
  },
  {
    n: "02",
    rotate: 2,
    title: (
      <>
        Grab <em className="accent">friends</em> (or make new friends!) and form
        a <em className="accent">team of 3</em>
      </>
    ),
    image: {
      src: "/assets/cards/steps/step2.JPG",
      alt: "alt"
    }
  },
  {
    n: "03",
    rotate: -2.5,
    title: (
      <>
        Learn from <em className="accent">filmmaking workshops</em>, enjoy{" "}
        <em className="accent">free food and merch!</em>
      </>
    ),
    image: {
      src: "/assets/cards/steps/step3.jpg",
      alt: "alt"
    }
  },
  {
    n: "04",
    rotate: 1.5,
    title: (
      <>
        Make a film &amp; <em className="accent accent-lime">win awards!</em>
      </>
    ),
    image: {
      src: "/assets/cards/steps/step4.JPG",
      alt: "alt"
    }
  },
];

type Kind = "open" | "work" | "workshop" | "break" | "milestone";

type Slot = { time: string; name: string; kind: Kind; tag?: string };

const DAY_ONE: Slot[] = [
  { time: "8:30 AM", name: "Doors open", kind: "open" },
  { time: "9:00 AM", name: "Opening ceremony", kind: "work" },
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
  { time: "6:30 PM", name: "Day 1 ends", kind: "work" },
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
  { time: "3:30 PM", name: "Video submissions", kind: "work" },
  { time: "4:30 PM", name: "Judging", kind: "work" },
  { time: "5:30 PM", name: "Closing ceremony", kind: "work" },
  { time: "6:30 PM", name: "Day 2 ends", kind: "work" },
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

function StepFrame({ step }: { step: Step }) {
  return (
    <div
      className="relative aspect-[4/3]"
      style={{ transform: `rotate(${step.rotate}deg)` }}
    >
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
    <li className="border-t border-current/25 pt-16 first:border-t-0 first:pt-0 md:pt-20">
      <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
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
    <section className="bg-[var(--lc-cream)]/[0.04] p-6 md:p-8">
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
            This Spring holidays, Limelight Creatives is running our very first film-a-thon, 
            good news: you’re invited! Over two days, you’ll learn how to write, shoot, 
            and edit your own short film. No experience needed, just bring your ideas and a 
            crew of new friends.
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
      <div className="relative px-6 pb-20 md:px-16 md:pb-28">
        <ol className="mt-14 space-y-16 md:space-y-20">
          {STEPS.map((step, i) => (
            <StepRow key={step.n} step={step} index={i} />
          ))}
        </ol>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Schedule                                                   */}
      {/* ---------------------------------------------------------- */}
      <div className="relative px-6 pb-8 md:px-16 md:pb-16">
        
        <h3 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.9] tracking-[-0.04em]">
          Schedule
        </h3>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Day label="Day one" date="Sat 24 Oct" slots={DAY_ONE} />
          <Day label="Day two" date="Sun 25 Oct" slots={DAY_TWO} />
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Close                                                      */}
      {/* ---------------------------------------------------------- */}
    </article>
  );
}
