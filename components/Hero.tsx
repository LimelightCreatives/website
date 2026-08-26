import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="mt-8 relative min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <h1 className="max-w-5xl text-[clamp(3.75rem,6rem,10rem)] font-display leading-[0.8] tracking-[-0.08em]">
          Your chance to step
        </h1>
        <h1 className="max-w-5xl text-[clamp(4rem,6rem,11rem)] font-display font-bold leading-[0.8] tracking-[-0.08em]">
          into the limelight.
        </h1>

        <p className="mt-10 max-w-xl text-xl font-body font-bold">
          Limelight Creatives run free film-a-thons for high schoolers.
        </p>

        <div className="mt-8 text-lg flex gap-4">
          <Button href="#apply">
            REGISTER INTEREST {'>'}
          </Button>
          <Button href="#timeline" variant="secondary">
            WHAT&apos;S NEXT
          </Button>
        </div>

        <a className="mt-8" href="mailto:inquiries@limelightcreatives.org">
          <u>Interested in sponsoring?</u>
        </a>
      </div>
    </section>
  );
}