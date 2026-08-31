import Image from "next/image";

export function AboutCard() {
  return (
    <article className="relative h-full overflow-hidden bg-[var(--background)]">
      <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 md:px-16">
        <div className="max-w-5xl">
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Direct your
            <br />
            <span className="font-bold">own story.</span>
          </h2>

          <p className="mt-10 max-w-xl font-body text-lg leading-relaxed md:text-xl">
            We&apos;re giving the next generation of screenwriters, cinematographers, 
            and <i>auteurs</i> a stage to show their skills to the world. 
            <br/><br/> 
            Our name pays homage to one of the first cinema studios in the world, following 
            a long line of filmmaking heritage. 
            <br/><br/>
            We're here to push forward the dreams of filmmakers everywhere, by giving teenagers 
            the resources to kickstart their journey into visual storytelling.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-200px] top-0 bottom-0 w-[40%] min-w-[320px] z-0">
        <Image
          src="/assets/cards/bg1.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
    </article>
  );
}