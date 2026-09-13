import Link from "next/link";
import { SITE, SERVICES, VISA_SERVICES, COUNTRIES } from "@/lib/site";
import { NAP } from "./NAP";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--accent-blue)] to-[var(--black)] text-white">
      <div className="container-page section !pb-10 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1 space-y-3">
          <p className="font-display text-xl font-bold">{SITE.name}</p>
          <p className="text-white/80 text-sm leading-relaxed">
            Career counselling, study abroad guidance, and visa preparation support in Vadodara.
          </p>
          <NAP className="text-white/85 [&_a]:text-white" />
        </div>
        <div>
          <p className="font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-sm text-white/80">
            {SERVICES.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white">{s.title}</Link></li>
            ))}
            {VISA_SERVICES.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Destinations</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/destinations" className="hover:text-white">Overview</Link></li>
            <li><Link href="/study-abroad" className="hover:text-white">Study Abroad</Link></li>
            {COUNTRIES.map((c) => (
              <li key={c.slug}><Link href={`/destinations/${c.slug}`} className="hover:text-white">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick links</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/testimonials" className="hover:text-white">Success Stories</Link></li>
            <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
            <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
