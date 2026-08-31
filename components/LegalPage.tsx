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
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-body text-sm font-bold uppercase tracking-[0.18em] text-[var(--ontik-accent)]">
            {eyebrow}
          </p>

          <h1 className="max-w-6xl font-display text-[clamp(4rem,11vw,11rem)] leading-[0.8] tracking-[-0.07em]">
            {title}
          </h1>

          {(intro || lastUpdated) && (
            <div className="mt-12 flex max-w-4xl flex-col gap-6 md:mt-16 md:flex-row md:items-start md:justify-between">
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

      {/* Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r-2 border-black md:block">
          <div className="sticky top-8 px-6 py-12">
            <p className="mb-6 font-body text-xs font-bold uppercase tracking-[0.18em] text-black/50">
              Contents
            </p>

            <nav className="space-y-3">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#section-${index + 1}`}
                  className="block font-body text-sm leading-snug transition-opacity hover:opacity-50"
                >
                  {String(index + 1).padStart(2, "0")}{" "}
                  <span className="ml-1">{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main legal copy */}
        <article className="px-6 py-12 md:px-16 md:py-20">
          <div className="max-w-4xl">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`section-${index + 1}`}
                className="border-b border-black/20 py-12 first:pt-0 md:py-16"
              >
                <div className="mb-8 flex items-start gap-6">
                  <span className="font-body text-sm font-bold text-[var(--ontik-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">
                    {section.title}
                  </h2>
                </div>

                <div className="ml-0 font-body text-base leading-[1.8] md:ml-10 md:text-lg">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      {/* Footer CTA */}
      <footer className="border-t-2 border-black px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl tracking-[-0.04em] md:text-5xl">
              Questions?
            </p>
            <p className="mt-3 font-body text-base text-black/60">
              We&apos;re happy to help.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit border-2 border-black px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-[var(--background)]"
          >
            Get in touch →
          </Link>
        </div>
      </footer>
    </main>
  );
}