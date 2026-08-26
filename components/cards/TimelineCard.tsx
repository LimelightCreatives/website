export function TimelineCard() {
  return (
    <article className="relative h-full bg-[var(--foreground)] text-[var(--background)]">
      <div className="flex h-full flex-col justify-between px-6 py-12 md:px-16 md:py-16">
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
            Limelight Creatives is launching our very first film-a-thon this Spring holidays. Two 
            days to craft your very own short film based on a theme. All you need to bring is some 
            creativity and a vision.
          </p>

          <div className="mt-12 max-w-3xl space-y-4">
            <div className="flex items-center justify-between border-t border-current/20 pt-4">
              <span className="font-display text-2xl">August 26</span>
              <span className="font-body text-md">RSVPs OPEN</span>
            </div>

            <div className="flex items-center justify-between border-t border-current/20 pt-4">
              <span className="font-display text-2xl">October 18</span>
              <span className="font-body text-md">REGISTRATION FORM SENT</span>
            </div>

            <div className="flex items-center justify-between border-t border-current/20 pt-4">
              <span className="font-display text-2xl">October 24–25</span>
              <span className="font-body text-md">EVENT OPENING DAY!</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}