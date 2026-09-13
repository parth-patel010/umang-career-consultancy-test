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
    <div className="bg-gradient-to-br from-[var(--accent-blue)] to-[var(--black)] text-white">
      <div className="container-page py-12 md:py-16">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-4 text-sm text-white/70 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex gap-2">
                <span>/</span>
                <Link href={c.href} className="hover:text-white">{c.name}</Link>
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/85 text-lg">{subtitle}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Book counselling</Link>
          <a href={`https://wa.me/${SITE.whatsapp}`} className="btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
