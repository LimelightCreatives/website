"use client";

import { useState } from "react";
import { SponsorModal } from "@/components/SponsorModal";

type Sponsor = { name: string; logoSrc?: string; link?: string };

function SponsorSquiggle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 664 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 19.6535C4.63907 19.6535 10.8633 19.2689 16.7817 19.1669C20.0719 19.1102 23.8714 21.3903 26.8 22.5646C29.3119 23.5719 32.0422 24.7006 34.86 25.4786C37.7328 26.2718 41.1688 27.6146 43.7972 28.8763C46.5168 30.1818 48.9434 31.496 51.7612 32.4722C54.175 33.3084 56.5197 33.6407 58.8538 34.1244C61.1571 34.6017 63.8979 35.1909 78.5233 35.2929C83.5723 35.3281 86.2424 34.2235 88.7688 33.6436C92.0804 32.8835 97.4788 31.3211 102.945 29.5669C106.354 28.473 109.356 27.0434 116.338 24.5199C120.864 22.884 128.169 19.6768 133.927 17.6196C140.073 15.4236 143.158 14.2219 153.043 11.8907C157.645 10.8053 163.148 10.9116 170.428 10.4278C187.228 9.31142 189.98 10.9116 198.891 13.0388C205.127 14.5274 209.597 17.1242 215.414 19.6419C222.985 22.9192 227.466 24.3043 232.42 26.0585C237.548 27.8746 242.619 29.3629 245.349 29.6573C246.54 29.7856 255.953 30.1439 270.127 29.9516C279.397 29.8258 285.14 27.8244 290.793 25.8778C299.588 22.8493 302.845 22.1829 307.988 19.9537C312.057 18.1901 315.667 16.9377 327.288 12.5813C335.874 9.36238 339.946 8.77853 343.449 7.51677C347.247 6.14848 351.975 5.66639 357.235 5.18267C364.017 4.55895 368.689 5.66639 372.396 6.15011C376.679 6.70906 381.721 7.99758 384.44 8.4813C390.607 9.57863 396.874 11.6809 400.076 13.0417C405.855 15.4975 410.08 19.0591 413.48 21.1018C418.176 23.9222 420.768 25.2834 423.391 26.6413C427.032 28.5268 431.818 30.1322 437.081 31.4027C441.919 32.5708 445.829 32.8597 450.581 32.9617C453.452 33.0233 456.121 32.0904 458.653 31.7961C461.209 31.4991 468.511 29.7709 474.088 28.6898C481.106 27.3296 483.71 26.0643 489.221 24.3276C505.298 19.2605 510.496 18.3014 515.082 16.9377C518.183 16.0158 521.394 16.1567 524.891 15.673C529.91 14.9787 534.204 14.9912 538.488 15.4749C544.298 16.131 546.653 16.1567 551.018 17.1242C555.756 18.1743 561.992 20.0382 566.657 21.8798C570.497 23.3957 580.397 29.1298 585.799 32.0817C589.321 34.006 592.694 35.7737 595.701 36.9364C601.718 39.2626 604.35 39.8533 606.78 40.1476C612.845 40.8821 622.218 40.2496 625.33 39.5677C630.582 38.4172 639.108 35.2026 645.717 32.6791C649.871 31.0927 654.645 27.0551 658.454 24.4208C659.138 23.9313 659.715 23.5466 660.301 23.2523C660.887 22.958 661.464 22.7657 662.641 22.5675"
        stroke="#01995C"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StickerFilter() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <filter id="sticker" x="-25%" y="-25%" width="150%" height="150%">
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="5"
            result="dilated"
          />
          <feFlood floodColor="#fff" result="white" />
          <feComposite in="white" in2="dilated" operator="in" result="outline" />
          <feDropShadow
            in="outline"
            dx="0"
            dy="3"
            stdDeviation="4"
            floodColor="#000"
            floodOpacity="0.35"
            result="shadowed"
          />
          <feMerge>
            <feMergeNode in="shadowed" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

const SIZES = {
  featured: "w-64 text-3xl md:w-64 md:text-4xl",
  secondary: "w-14 text-xl md:w-16 md:text-2xl",
  tertiary: "w-10 text-base md:w-12 md:text-lg",
} as const;

// Slight tilts so the stickers feel hand-placed
const TILTS = [-3, 2, -1.5, 3, -2, 1.5];

function Sticker({
  sponsor,
  size,
  index,
}: {
  sponsor: Sponsor;
  size: keyof typeof SIZES;
  index: number;
}) {
  return (
    <div
      className="p-2 transition-transform duration-200 hover:!rotate-0 hover:scale-105"
      style={{ transform: `rotate(${TILTS[index % TILTS.length]}deg)` }}
    >
      <div
        className={`flex items-center justify-center [filter:url(#sticker)] ${SIZES[size]}`}
      >
        {sponsor.logoSrc ? (
          <a href={sponsor.link} className="block h-full">
            <img
              src={sponsor.logoSrc}
              alt={sponsor.name}
              className="h-auto w-full object-contain"
              draggable={false}
            />
          </a>
        ) : (
          // Text placeholder until you have a logo
          <span className="px-3 font-bold leading-none text-black">
            {sponsor.name}
          </span>
        )}
      </div>
    </div>
  );
}

export function SponsorsCard() {
  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const rows: { size: keyof typeof SIZES; sponsors: Sponsor[] }[] = [
    { size: "featured", 
      sponsors: [
        // { name: "screenrights", logoSrc: "assets/sponsors/screenrights.svg" }
        { name: "La Trobe University", logoSrc: "assets/sponsors/latrobe.png", link: "https://www.latrobe.edu.au/" },
        { name: "Nanoblock", logoSrc: "assets/sponsors/nanoblock.png", link: "https://nanoblock.com.au/" },
      ] 
    },
    // { 
    //   size: "secondary", 
    //   sponsors: [
    //   ] 
    // },
    // {
    //   size: "tertiary",
    //   sponsors: [{ name: "Sponsor" }, { name: "Sponsor" }, { name: "Sponsor" }],
    // },
  ];

  let counter = 0;
return (
    <article className="relative h-full bg-[var(--background)]">
      <StickerFilter />
      <div className="flex h-full flex-col gap-10 px-6 py-12 md:gap-16 md:px-16 md:py-16 ">
        <span className="font-body text-sm uppercase tracking-[0.15em]">
          SPONSORS
        </span>

        <div>
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Our <span className="relative inline-block font-bold text-[var(--ontik-accent)]">
              sponsors.
              <SponsorSquiggle className="pointer-events-none absolute left-0 top-full mt-1 h-auto w-full" />
            </span>
          </h2>

          <a
            className="mt-16 inline-block max-w-xl font-body text-lg leading-relaxed md:text-xl"
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              setShowSponsorModal(true);
            }}
          >
            Thank you to our partners for supporting our mission. <u>Interested in sponsoring?</u>
          </a>


          <div
            className="mt-12 rounded-lg p-8 md:p-12"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 0, transparent 1px)`,
              backgroundSize: "25px 25px",
            }}
          >
            <div className="flex flex-col items-center gap-4 md:gap-6">
              {rows.map((row, r) => (
                <div
                  key={r}
                  className="flex flex-wrap items-center justify-center gap-x-6 gap-y-16 md:gap-x-10"
                >
                  {row.sponsors.map((sponsor, i) => (
                    <Sticker
                      key={`${r}-${i}`}
                      sponsor={sponsor}
                      size={row.size}
                      index={counter++}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    {showSponsorModal && (
        <SponsorModal onClose={() => setShowSponsorModal(false)} />
      )}
    </article>
  );
}