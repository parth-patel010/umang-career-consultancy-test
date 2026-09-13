import Link from "next/link";
import { SITE } from "@/lib/site";

export function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs?: { name: string; href: string }[];
}) {
  return (
    <div className="surface-dark bg-gradient-to-br from-[var(--accent-blue)] to-[var(--black)] text-white min-h-[160px] md:min-h-[200px]">
      <div className="container-page py-10 md:py-12">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-3 text-sm text-white/70 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex gap-2">
                <span>/</span>
                <Link href={c.href} className="hover:text-white">{c.name}</Link>
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display max-w-3xl text-white !text-[clamp(1.75rem,4vw,2.5rem)]">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-white/85">{subtitle}</p>}
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary !min-h-11 text-sm">Book counselling</Link>
          <a href={`https://wa.me/${SITE.whatsapp}`} className="btn-ghost !min-h-11 text-sm" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}