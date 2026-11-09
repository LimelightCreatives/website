import Link from "next/link";
import { SiYoutube, SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

type Social = {
  name: string;
  handle: string;
  href: string;
  Icon: typeof SiYoutube;
};

const SOCIALS: Social[] = [
  {
    name: "Instagram",
    handle: "@_limelightcreatives",
    href: "https://www.instagram.com/_limelightcreatives",
    Icon: SiInstagram,
  },
  {
    name: "TikTok",
    handle: "@_limelightcreatives",
    href: "https://www.tiktok.com/@_limelightcreatives",
    Icon: SiTiktok,
  },
  {
    name: "YouTube",
    handle: "@LimelightCreatives",
    href: "https://www.youtube.com/@LimelightCreatives",
    Icon: SiYoutube,
  },
];

/* ------------------------------------------------------------------ */
/*  Pieces                                                             */
/* ------------------------------------------------------------------ */

/** Same framed look as the other cards: black outline + offset accent block.
 *  The whole tile is the link, and it nudges onto its accent block on hover. */
function SocialLink({ s }: { s: Social }) {
  const { Icon } = s;

  return (
    <Link
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${s.name}, ${s.handle} (opens in a new tab)`}
      className="group relative block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[var(--lc-mint)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 bg-[var(--lc-accent)] md:translate-x-4 md:translate-y-4"
      />
      <span className="relative flex min-h-[12rem] flex-col justify-between gap-8 border-2 border-black bg-[var(--background)] p-6 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2 motion-reduce:transition-none md:p-8">
        <Icon size={44} aria-hidden="true" />
        <span className="flex flex-col gap-1">
          <span className="font-display text-3xl leading-[0.95] tracking-[-0.03em] md:text-4xl">
            {s.name}
          </span>
          <span className="font-body text-base opacity-70 md:text-lg">
            {s.handle}
          </span>
        </span>
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

export function UpcomingCard() {
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
      <div className="relative flex flex-col px-6 py-12 md:px-16 md:py-16 lg:pb-24">
        <div className="mb-6 font-body text-sm uppercase tracking-[0.15em] md:mb-16 lg:mb-28">
          Coming soon
        </div>

        <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
          <span className="font-bold">More film-a-thons</span>
          <br />
          <span>coming soon</span>
        </h2>

        <p className="mt-10 max-w-xl font-body text-lg leading-relaxed md:text-xl">
          We&rsquo;re planning the next one. Follow us to hear the dates first.
        </p>

        <section
          aria-label="Our social channels"
          className="mt-14 bg-[var(--lc-cream)]/[0.04] p-6 pb-10 md:mt-20 md:p-10 md:pb-14"
        >
          <p className="font-body text-sm tracking-[0.2em] text-[var(--lc-mint)]">
            Follow along
          </p>

          <ul className="mt-8 grid gap-8 md:gap-12 lg:grid-cols-3">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <SocialLink s={s} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}