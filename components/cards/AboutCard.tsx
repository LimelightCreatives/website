import Image from "next/image";

function LimelightSquiggle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 610 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.85547 6.85547C8.46379 9.55225 14.9458 12.8014 21.7203 16.3186C35.9371 23.6997 62.5782 17.1552 72.8861 13.638C80.4373 11.0615 89.1237 9.03239 96.1824 8.21198C104.355 7.26215 114.045 7.92768 121.899 13.0613C129.141 17.7945 136.789 21.9965 144.643 24.7176C151.856 27.2163 171.327 27.9749 185.526 25.01C193.845 23.2729 200.147 20.4044 213.931 14.4585C223.781 10.21 241.736 11.7292 255.114 14.9621C262.672 16.7884 268.379 21.9965 275.153 24.7176C282.869 27.8169 290.57 30.6717 301.942 30.956C311.359 31.1914 318.74 25.8304 326.595 22.8412C333.984 20.0294 339.86 15.5307 346.366 13.3619C349.607 12.2815 352.872 11.1931 356.113 10.9169C363.479 10.2892 369.102 18.7473 375.608 22.8169C381.676 26.612 388.597 30.1193 395.103 32.8405C401.43 35.4867 410.236 36.0977 419.196 34.2132C426.932 32.586 433.532 26.9027 441.939 22.0371C448.265 18.3764 455.204 17.1552 469.801 16.8709C478.179 16.7078 485.519 21.9965 492.577 26.3341C499.24 30.4281 505.566 33.9208 512.072 36.0896C518.436 38.2109 525.061 36.6501 531.567 34.4813C538.073 32.3125 545.628 28.0074 553.491 23.6535C562.792 18.5033 571.621 21.4766 578.68 24.4414C585.186 26.8864 591.668 30.1193 598.174 31.4921C599.807 31.7601 601.415 32.2962 603.072 32.8486"
        stroke="#01995C"
        strokeWidth="10"
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

export function AboutCard() {
  return (
    <article className="relative h-full overflow-hidden bg-[var(--background)]">
      <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 md:px-16">
        <div className="max-w-5xl">
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Direct your
            <br />
            <span className="relative inline-block font-bold text-[var(--ontik-accent)]">
              own story.
              <LimelightSquiggle className="pointer-events-none absolute left-0 top-full mt-0 h-auto w-5/6" />
            </span>
          </h2>

          <p className="mt-10 max-w-xl font-body text-lg leading-relaxed md:text-xl">
            We&apos;re giving the next generation of screenwriters,
            cinematographers, and <i>auteurs</i> a stage to show their skills
            to the world.
            <br />
            <br />
            Our name pays homage to one of the first cinema studios in the
            world, following a long line of filmmaking heritage.
            <br />
            <br />
            We&apos;re here to push forward the dreams of filmmakers
            everywhere, by giving teenagers the resources to kickstart their
            journey into visual storytelling.
          </p>
        </div>
      </div>

      {/* photo, its flat offset "sticker" shadow, and scattered sparkles all live in one
         positioned box so they move and scale together */}
      <div className="absolute right-[5vw] top-1/2 z-20 w-[40vw] max-w-6xl -translate-y-1/2 aspect-[4/3] rotate-[-1.5deg]">
        {/* offset flat shadow block, standing in for the old grunge texture */}
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[var(--ontik-accent)] md:translate-x-4 md:translate-y-4" />

        {/* photo frame */}
        <div className="absolute inset-0 overflow-hidden border-2 border-black bg-[var(--background)]">
          <Image
            src="/assets/cards/camera_guy.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* sparkles scattered around the frame, replacing the ink scribble */}
        <Sparkle className="pointer-events-none absolute -top-10 -right-5 h-16 w-11 rotate-[8deg] text-[var(--ontik-accent)] md:-top-14 md:-right-20 md:h-24 md:w-16" />
        <Sparkle className="pointer-events-none absolute -top-4 right-10 h-6 w-4 rotate-[-6deg] text-[#1B2340] md:-top-12 md:right-16 md:h-9 md:w-6" />
        <Sparkle className="pointer-events-none absolute -bottom-8 -left-6 h-10 w-7 rotate-[-15deg] text-[#1B2340] md:-bottom-10 md:-left-9 md:h-14 md:w-10" />
      </div>
    </article>
  );
}