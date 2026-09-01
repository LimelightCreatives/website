"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Who can enter?",
    answer: "Any high schooler in Sydney, 13–18. No school affiliation needed.",
  },
  {
    question: "Do I need filmmaking experience?",
    answer:
      "No, we are completely beginner friendly. Mentors run workshops across the weekend.",
  },
  {
    question: "What do I need to bring?",
    answer:
      "Your own camera/phone and laptop if you have one. We're working on shared gear for teams who don't.",
  },
  {
    question: "How big are teams?",
    answer: "Three. Pairs and solos only in exceptional cases.",
  },
  {
    question: "Where will we film?",
    answer:
      "You can film at the venue (La Trobe University) or off-site with a signed freedom waiver.",
  },
  {
    question: "Is it supervised?",
    answer: "Venue supervisors, 18+ volunteers and mentors on site both days.",
  },
  {
    question: "What does it cost?",
    answer: "Nothing.",
  },
];

function QuestionsSquiggle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 764 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.93262 6.93274C9.92262 8.92274 13.9126 12.2527 17.9176 14.7577C21.6526 17.0938 25.9126 17.9327 30.0826 19.7577C34.6454 21.7546 38.9126 21.5927 43.9126 22.9277C49.4761 24.4132 54.9126 24.5927 67.3826 24.7677C73.9751 24.8603 79.8926 22.6127 85.4126 21.6027C92.0237 20.3931 95.9126 19.2727 101.578 17.2727C105.723 15.8092 111.893 15.9327 117.743 15.1027C126.182 13.9053 131.573 17.5927 137.403 18.9227C149.921 21.7785 152.913 26.5927 156.918 28.0927C161.183 29.6904 165.573 32.2527 170.913 33.9277C179.525 36.6292 193.893 33.6127 200.568 32.1077C214.227 29.0279 220.233 24.2727 226.743 22.1077C233.152 19.9763 241.233 18.9327 247.578 17.9377C255.519 16.6925 272.193 20.2327 289.708 28.7377C296.794 32.1787 302.913 34.5927 309.408 35.0977C315.936 35.6054 323.913 35.2727 331.233 32.7777C340.102 29.7547 343.913 27.2727 351.053 23.7877C370.254 14.4157 378.873 13.9527 390.228 12.7677C397.56 12.0025 406.213 14.9127 412.908 18.2527C423.181 23.378 432.553 27.2527 441.888 28.7627C459.027 31.5351 467.893 25.6127 473.908 22.6127C484.974 17.0934 493.573 12.2727 498.413 9.94274C505.208 6.67124 510.913 6.27274 518.238 6.09774C523.646 5.96853 530.233 8.91274 536.738 11.4227C546.28 15.1047 551.233 19.2527 557.573 24.2427C566.958 31.6296 575.233 34.5927 581.078 35.7627C596.122 38.7742 618.913 25.6127 627.898 22.4427C633.676 20.404 641.893 19.2727 646.918 17.2727C651.296 15.5299 660.873 15.9327 672.228 18.5877C679.033 20.1789 684.893 23.2527 692.408 26.7527C697.499 29.1238 701.913 32.2527 706.913 33.9277C712.216 35.7045 716.913 37.5927 721.748 37.6027C726.377 37.6123 731.233 31.6327 736.913 27.7777C742.516 23.9746 746.913 19.6127 750.918 17.1077C751.923 16.6027 752.913 16.2727 753.918 15.9377C754.923 15.6027 755.913 15.2727 756.933 14.9327"
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

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function FAQCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <article className="relative h-full overflow-hidden bg-[var(--background)]">
      <div className="flex h-full flex-col justify-between px-6 py-12 md:px-16 md:py-16 lg:pr-[48%]">
        <span className="font-body text-sm uppercase tracking-[0.15em]">
          FAQ
        </span>

        <div>
          <h2 className="relative inline-block font-display  text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Questions?
            <QuestionsSquiggle className="pointer-events-none absolute left-0 top-full mt-1 h-auto w-full text-[var(--ontik-accent)]" />
          </h2>

          <div className="mt-14 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex w-full items-center justify-between py-5 pl-4 text-left font-body transition-[border-color] duration-150 `}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-bold transition-colors duration-150 ${
                        isOpen ? "text-[var(--ontik-accent)]" : ""
                      }`}
                    >
                      {faq.question}
                    </span>
                    <PlusIcon
                      className={`ml-4 h-5 w-5 shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-45 text-[var(--ontik-accent)]"
                          : "text-[var(--foreground)]"
                      }`}
                    />
                  </button>

                  <div
                    className="grid pl-4 transition-[grid-template-rows] duration-200 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-5 font-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute right-[2vw] top-1/2 z-20 hidden aspect-[4/3] w-[38vw] max-w-6xl -translate-y-1/2 rotate-[1.5deg] lg:block xl:right-[5vw] xl:w-[40vw]">
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[var(--ontik-accent)] md:translate-x-4 md:translate-y-4" />

        <div className="absolute inset-0 overflow-hidden border-2 border-black bg-[var(--background)]">
          <Image
            src="/assets/cards/event.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 38vw"
            className="object-cover"
          />
        </div>

        <Sparkle className="pointer-events-none absolute -top-8 -left-6 h-14 w-10 rotate-[-10deg] text-[#1B2340] md:-top-12 md:-left-12 md:h-20 md:w-14" />
        <Sparkle className="pointer-events-none absolute -bottom-9 -right-5 h-16 w-11 rotate-[10deg] text-[var(--ontik-accent)] md:-bottom-24 md:-right-16 md:h-24 md:w-16" />
      </div>
    </article>
  );
}
