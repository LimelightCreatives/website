import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import { VimeoBackground } from "@/components/VimeoBackground";

const VIMEO_SRC =
  "https://player.vimeo.com/video/1245460117?background=1&autopause=0&dnt=1";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-poster.jpg)" }}
        aria-hidden="true"
      >
        <VimeoBackground
          src={VIMEO_SRC}
          title="encore_loop_v2"
          poster="/hero-poster.jpg"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <section className="flex flex-col items-start gap-5 px-6 pb-10 sm:px-14 sm:pb-10">
        <h1 className="m-0">
          <Image
            src="/branding/encore/logo-dark.svg"
            alt="Encore"
            width={460}
            height={120}
            priority
            className="h-auto w-[min(80vw,460px)]"
          />
        </h1>

        <p className="m-0 pl-2 font-display text-2xl italic text-white sm:text-3xl">
          Jan 30-31, 2027
        </p>

        <div className="mt-2 w-full pl-2">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}