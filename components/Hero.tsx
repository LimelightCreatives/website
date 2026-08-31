import { Button } from "@/components/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="mt-0 relative min-h-screen overflow-hidden">
      {/* Decorative side images */}
      <div className="pointer-events-none absolute -left-100 top-[-130px] h-[1500] w-[1481px] z-0 [@media_(max-aspect-ratio:4/3)]:hidden">
        <Image
          src="/assets/hero/left.png"
          alt=""
          fill
          className="object-contain object-left-top"
          priority
        />
      </div>

      <div className="pointer-events-none absolute -right-60 top-[-125px] h-[1100] w-[1261px] z-0 [@media_(max-aspect-ratio:4/3)]:hidden">
        <Image
          src="/assets/hero/right.png"
          alt=""
          fill
          className="object-contain object-right-top"
          priority
        />
      </div>

      <div className="mx-auto mt-8 relative z-10 flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
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