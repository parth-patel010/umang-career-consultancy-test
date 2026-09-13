import { SITE, COUNTRIES, SERVICES, VISA_SERVICES, RESOURCES } from "./site";

export type Chunk = { id: string; title: string; text: string; url: string };

export const SITE_CHUNKS: Chunk[] = [
  {
    id: "about-nap",
    title: "Contact Umang Career Consultancy Vadodara",
    url: "/contact",
    text: `${SITE.name} is a career and study abroad consultancy in Vadodara. Phone ${SITE.phone}. Email ${SITE.email}. Address ${SITE.fullAddress}. WhatsApp available on the same number.`,
  },
  {
    id: "home",
    title: "Study abroad consultancy Vadodara",
    url: "/",
    text: "Umang Career Consultancy helps students and parents in Vadodara with career counselling, university admissions, SOP/LOR/resume support, education loans, forex guidance, and student, visitor, and spouse visa preparation. We do not guarantee visa approvals — outcomes depend on eligibility and immigration decisions.",
  },
  ...SERVICES.map((s) => ({
    id: s.href,
    title: s.title,
    url: s.href,
    text: `${s.title}: ${s.desc} Available at Umang Career Consultancy, Vadodara.`,
  })),
  ...VISA_SERVICES.map((s) => ({
    id: s.href,
    title: s.title,
    url: s.href,
    text: `${s.title}: ${s.desc}`,
  })),
  ...COUNTRIES.map((c) => ({
    id: `/study-abroad/${c.slug}`,
    title: `Study in ${c.name}`,
    url: `/study-abroad/${c.slug}`,
    text: `Study in ${c.name} from Vadodara: ${c.blurb}`,
  })),
  ...RESOURCES.map((r) => ({
    id: r.href,
    title: r.title,
    url: r.href,
    text: `${r.title}: ${r.desc}`,
  })),
  {
    id: "honesty",
    title: "What we do not promise",
    url: "/about",
    text: "Umang does not publish fake success percentages or guarantee visa approvals. We provide counselling, documentation discipline, and honest fit discussions.",
  },
];

export function retrieveChunks(query: string, k = 5): Chunk[] {
  const q = query.toLowerCase();
  const terms = q.split(/\W+/).filter((t) => t.length > 2);
  const scored = SITE_CHUNKS.map((c) => {
    const hay = `${c.title} ${c.text}`.toLowerCase();
    let score = 0;
    for (const t of terms) if (hay.includes(t)) score += 1;
    if (hay.includes(q)) score += 3;
    return { c, score };
  });
  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((x) => x.c);
}
