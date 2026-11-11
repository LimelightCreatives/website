"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
  poster?: string;
};

export function VimeoBackground({ src, title, poster }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let cancelled = false;
    let player: import("@vimeo/player").default | undefined;

    // Fallback: never leave the loader up forever (autoplay blocked, slow network, etc.)
    const timeout = window.setTimeout(() => setReady(true), 8000);

    import("@vimeo/player").then(({ default: Player }) => {
      if (cancelled) return;
      player = new Player(iframe);
      player.on("playing", () => {
        window.clearTimeout(timeout);
        setReady(true);
      });
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      player?.off("playing");
      player?.destroy();
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        tabIndex={-1}
        className={`absolute left-1/2 top-1/2 h-[max(100svh,56.25vw)] w-[max(100vw,177.78svh)] -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Loader: solid cover so the page background never shows through */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black bg-cover bg-center transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      >
        {/* <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/80 motion-reduce:animate-none" /> */}
        <Image
            src="/branding/wordmark-dark.svg"
            alt=""
            width={465/2}
            height={240/2}
        />
      </div>
    </div>
  );
}