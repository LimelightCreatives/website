import Link from "next/link";

export type LegalSection = {
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow = "Legal",
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <header className="border-b-2 border-black px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-40">
        <div className="w-full">
          <h1 className="font-display text-[clamp(4rem,11vw,11rem)] leading-[0.8] tracking-[-0.07em]">
            {title}
          </h1>

          {(intro || lastUpdated) && (
            <div className="mt-12 flex w-full flex-col gap-6 md:mt-16 md:flex-row md:items-start md:justify-between">
              {intro && (
                <p className="max-w-2xl font-body text-lg leading-relaxed md:text-xl">
                  {intro}
                </p>
              )}

              {lastUpdated && (
                <p className="shrink-0 font-body text-sm uppercase tracking-[0.12em] text-black/60">
                  Last updated
                  <br />
                  <span className="text-black">{lastUpdated}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Main legal copy */}
      <article className="w-full px-6 py-12 md:px-16 md:py-20">
        <div className="w-full">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-b border-black/20 py-12 first:pt-0 md:py-16"
            >
              <div className="grid gap-8 md:grid-cols-[minmax(280px,1fr)_minmax(0,2fr)]">
                <h2 className="font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">
                  {section.title}
                </h2>

                <div className="font-body text-base leading-[1.8] md:text-lg">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}