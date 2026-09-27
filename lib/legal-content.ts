import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "legal");

export type LegalSectionData = {
  title: string;
  /** Raw markdown for this section's body */
  body: string;
};

export type LegalPageData = {
  eyebrow?: string;
  title: string;
  /** Raw markdown, rendered inline */
  intro?: string;
  lastUpdated?: string;
  sections: LegalSectionData[];
};

/**
 * Reads content/legal/<slug>.md and turns it into the props LegalPage needs.
 *
 * File format:
 *
 * ---
 * eyebrow: "Legal / Code of Conduct"
 * title: "Code of conduct."
 * intro: "Some intro text with **bold** allowed."
 * lastUpdated: "31 August 2026"
 * ---
 *
 * ## Section title
 * Section body as normal markdown (paragraphs, lists, links, tables, **bold**).
 *
 * ## Next section title
 * More content...
 */
export function getLegalPage(slug: string): LegalPageData {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // Split the body on level-2 headings ("## ...") into sections.
  const blocks = content
    .split(/\n(?=##\s)/)
    .map((block) => block.trim())
    .filter(Boolean);

  const sections: LegalSectionData[] = blocks.map((block) => {
    const [headingLine, ...rest] = block.split("\n");
    return {
      title: headingLine.replace(/^##\s*/, "").trim(),
      body: rest.join("\n").trim(),
    };
  });

  return {
    eyebrow: data.eyebrow,
    title: data.title,
    intro: data.intro,
    lastUpdated: data.lastUpdated,
    sections,
  };
}

/** All available legal page slugs, e.g. for generating a sitemap or nav links. */
export function getAllLegalSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
