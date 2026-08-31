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

export function FAQCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <article className="relative h-full bg-[var(--background)]">
      <div className="flex h-full flex-col justify-between px-6 py-12 md:px-16 md:py-16">
        <span className="font-body text-sm uppercase tracking-[0.15em]">
          FAQ
        </span>

        <div>
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Questions?
          </h2>

          <div className="mt-10 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-5 text-left font-body"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold">{faq.question}</span>
                    <span
                      className="ml-4 shrink-0 transition-transform duration-200"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
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
      <div className="absolute right-[5vw] top-2/3 z-20 w-[40vw] max-w-6xl -translate-y-1/2 aspect-[4/3] overflow-hidden border-2 border-black">
              <Image
                src="/assets/cards/event.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
    </article>
  );
}