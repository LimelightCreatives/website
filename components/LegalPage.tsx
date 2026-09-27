import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

export type LegalSection = {
  title: string;
  /** Raw markdown string (paragraphs, lists, links, **bold**, tables, etc.) */
  body: string;
};

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  /** Raw markdown, rendered inline (supports **bold** and links) */
  intro?: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

// Turns a section title into a URL-safe id, so other sections can link to it
// with e.g. [privacy contact form](#contact).
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Maps markdown elements to the same classes the hand-written JSX used to have,
// so content authors never need to think about styling.
const markdownComponents: Components = {
  h3: ({ children }) => (
    <h3 className="mt-10 font-display text-2xl tracking-[-0.03em] first:mt-0">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="[&:not(:first-child)]:mt-6">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-6 list-disc space-y-3 pl-6 first:mt-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-6 list-decimal space-y-3 pl-6 first:mt-0">{children}</ol>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="underline underline-offset-4 hover:opacity-50"
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="mt-10 overflow-x-auto first:mt-0">
      <table
        className="w-full border-collapse text-left
          [&_thead_tr]:border-b-2 [&_thead_tr]:border-black
          [&_tbody_tr]:border-b [&_tbody_tr]:border-black/20
          [&_th]:py-4 [&_th]:pr-6 [&_th]:font-display [&_th]:text-xl
          [&_td]:py-5 [&_td]:pr-6"
      >
        {children}
      </table>
    </div>
  ),
};

// Intro text is a single inline block — don't add the `p` component's
// top-margin behaviour to it.
const introComponents: Components = {
  p: ({ children }) => <>{children}</>,
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
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="font-display text-[clamp(4rem,11vw,11rem)] leading-[0.8] tracking-[-0.07em]">
            {title}
          </h1>

          {(intro || lastUpdated) && (
            <div className="mt-12 flex w-full flex-col gap-6 md:mt-16 md:flex-row md:items-start md:justify-between">
              {intro && (
                <p className="max-w-2xl font-body text-lg leading-relaxed md:text-xl">
                  <ReactMarkdown components={introComponents}>
                    {intro}
                  </ReactMarkdown>
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
        <div className="mx-auto w-full max-w-6xl">
          {sections.map((section) => (
            <section
              key={section.title}
              id={slugify(section.title)}
              className="border-b border-black/20 py-12 first:pt-0 md:py-16 scroll-mt-24"
            >
              <div className="grid gap-8 md:grid-cols-[minmax(280px,1fr)_minmax(0,2fr)]">
                <h2 className="font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">
                  {section.title}
                </h2>

                <div className="font-body text-base leading-[1.8] md:text-lg">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {section.body}
                  </ReactMarkdown>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
