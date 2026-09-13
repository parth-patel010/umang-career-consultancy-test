import Link from "next/link";
import Image from "next/image";
import { COUNTRIES, SERVICES, SITE } from "@/lib/site";
import { NAP } from "./NAP";

export function Footer() {
  return (
    <footer className="surface-dark bg-gradient-to-b from-[var(--accent-blue)] to-[var(--black)] text-white">
      <div className="container-page section !pb-10 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <Image src="/brand/umang-logo.png" alt="Umang Career Consultancy" width={160} height={48} className="h-10 w-auto object-contain" />
          <p className="text-white/75 text-sm leading-relaxed">
            Career & study abroad consultancy in Vadodara — honest counselling for students and parents.
          </p>
          <NAP className="text-white/85 [&_a]:text-white [&_p]:text-white/65" />
          <div className="flex flex-wrap gap-2 pt-1">
            <a href={`tel:${SITE.phoneTel}`} className="btn-primary !min-h-10 text-sm px-4">Call</a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost !min-h-10 text-sm px-4">WhatsApp</a>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-sm text-white/75">
            {SERVICES.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Destinations</p>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/destinations" className="hover:text-white">Overview</Link></li>
            {COUNTRIES.map((c) => (
              <li key={c.slug}><Link href={`/destinations/${c.slug}`} className="hover:text-white">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick links</p>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/testimonials" className="hover:text-white">Success Stories</Link></li>
            <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
            <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/55">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}