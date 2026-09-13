import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentDoc = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword?: string;
  body: string;
  html: string;
  faqs: { q: string; a: string }[];
};

function mdToHtml(md: string): string {
  let html = md;
  // fenced code skip minimal
  html = html.replace(/^>\s?.+$/gm, "");
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // unordered lists
  html = html.replace(/^(?:- |\* ).+(?:\n(?:- |\* ).+)*/gm, (block) => {
    const items = block
      .split("\n")
      .map((l) => l.replace(/^[-*] /, "").trim())
      .filter(Boolean)
      .map((i) => `<li>${i}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });
  // paragraphs
  html = html
    .split(/\n{2,}/)
    .map((chunk) => {
      const c = chunk.trim();
      if (!c) return "";
      if (c.startsWith("<")) return c;
      return `<p>${c.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");
  return html;
}

function extractFaqs(body: string): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];
  const re = /###\s+(.+?)\n([\s\S]*?)(?=\n### |\n## |$)/g;
  let m: RegExpExecArray | null;
  const faqSection = body.match(/##\s+(?:FAQ|FAQs|Frequently Asked Questions)[\s\S]*/i);
  const target = faqSection ? faqSection[0] : "";
  if (!target) return faqs;
  while ((m = re.exec(target))) {
    const q = m[1].replace(/\?$/, "") + (m[1].includes("?") ? "" : "?");
    const a = m[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*/g, "")
      .replace(/\n+/g, " ")
      .trim();
    if (q && a && a.length > 10) faqs.push({ q: m[1].trim(), a: a.slice(0, 500) });
  }
  return faqs.slice(0, 12);
}

function parseMeta(raw: string) {
  const lines = raw.split("\n");
  const meta: Record<string, string> = {};
  let i = 0;
  // skip title line
  if (lines[0]?.startsWith("# ")) i = 1;
  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(/^(path|meta_title|meta_description|primary_keyword|secondary_keywords|h1):\s*(.*)$/);
    if (m) {
      meta[m[1]] = m[2].trim();
      i++;
      continue;
    }
    if (!line.trim()) {
      i++;
      continue;
    }
    break;
  }
  const body = lines.slice(i).join("\n").trim();
  return { meta, body };
}

export function getContentByFile(filename: string): ContentDoc | null {
  const filePath = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  // Prefer custom meta parser; gray-matter as fallback if --- present
  let meta: Record<string, string> = {};
  let body = raw;
  if (raw.startsWith("---")) {
    const parsed = matter(raw);
    meta = Object.fromEntries(
      Object.entries(parsed.data).map(([k, v]) => [k, String(v ?? "")])
    );
    body = parsed.content;
  } else {
    const p = parseMeta(raw);
    meta = p.meta;
    body = p.body;
  }
  const slug = filename.replace(/\.md$/, "");
  return {
    slug,
    path: meta.path || "/",
    metaTitle: meta.meta_title || meta.h1 || "Umang Career Consultancy",
    metaDescription: meta.meta_description || "",
    h1: meta.h1 || meta.meta_title || slug,
    primaryKeyword: meta.primary_keyword,
    body,
    html: mdToHtml(body),
    faqs: extractFaqs(body),
  };
}

const FILE_MAP: Record<string, string> = {
  "/": "home.md",
  "/services": "services.md",
  "/services/career-counselling": "services-career-counselling.md",
  "/services/career-counseling": "services-career-counselling.md",
  "/services/university-admission": "services-university-admission.md",
  "/services/sop-lor-resume": "services-sop-lor-resume.md",
  "/services/education-loan-forex": "services-education-loan-forex.md",
  "/visa": "visa.md",
  "/visa/student-visa": "visa-student-visa.md",
  "/visa/visitor-visa": "visa-visitor-visa.md",
  "/visa/spouse-visa": "visa-spouse-visa.md",
  "/resources": "resources.md",
  "/resources/career-after-12th": "resources-career-after-12th.md",
  "/resources/how-to-choose-study-destination": "resources-how-to-choose-study-destination.md",
  "/resources/sop-writing-guide": "resources-sop-writing-guide.md",
  "/resources/visa-interview-tips": "resources-visa-interview-tips.md",
  "/about": "about.md",
  "/contact": "contact.md",
  "/testimonials": "testimonials.md",
  "/faq": "faq.md",
  "/faqs": "faq.md",
  "/study-abroad": "study-abroad.md",
  "/destinations": "destinations.md",
  "/destinations/canada": "destinations-canada.md",
  "/destinations/uk": "destinations-uk.md",
  "/destinations/australia": "destinations-australia.md",
  "/destinations/usa": "destinations-usa.md",
  "/destinations/new-zealand": "destinations-new-zealand.md",
  "/process": "process.md",
  "/universities": "universities.md",
};

export function getPageContent(routePath: string): ContentDoc | null {
  const file = FILE_MAP[routePath];
  if (!file) return null;
  return getContentByFile(file);
}

export function listMappedRoutes(): string[] {
  return Object.keys(FILE_MAP);
}
