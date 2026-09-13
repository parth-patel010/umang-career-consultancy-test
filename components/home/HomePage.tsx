import Link from "next/link";
import { COUNTRIES, SERVICES, SITE } from "@/lib/site";
import { LeadForm } from "@/components/forms/LeadForm";
import { Section } from "@/components/ui/Section";
import { FaqJsonLd } from "@/components/seo/JsonLd";

const HOW = [
  { t: "Share your goals", d: "Course interest, budget range, timeline, and family priorities." },
  { t: "Profile & fit counselling", d: "Honest shortlist of countries and programs that match your profile." },
  { t: "Applications & documents", d: "Admission support plus SOP/LOR/resume discipline." },
  { t: "Visa readiness", d: "Checklists, file review, and interview prep — no approval guarantees." },
];

const WHY = [
  { t: "Local Vadodara trust", d: "Meet us at Siddeshwar Plaza — counselling designed for students and parents together." },
  { t: "One coordinated roadmap", d: "Admissions advice and visa documentation stay aligned to one plan." },
  { t: "Honest fit conversations", d: "We discuss risk, cost, and timelines without inflated promises." },
  { t: "End-to-end support", d: "Career → admission → funding talks → visa readiness under one roof." },
];

const FAQS = [
  { q: "Do you guarantee visas?", a: "No. Visa outcomes depend on eligibility, documentation, and immigration decisions. We prepare files carefully and counsel honestly." },
  { q: "Where is your office in Vadodara?", a: "FF-25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP Road, KhodiyarNagar, Vadodara 390019." },
  { q: "Which countries do you counsel for?", a: "Primarily Canada, UK, and Australia, plus USA and New Zealand." },
  { q: "How do I book counselling?", a: "Call or WhatsApp +91 9173186109, email umangcareer2022@gmail.com, or use the form on this page." },
];

export function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      {/* Dark cinematic hero */}
      <section className="relative overflow-hidden bg-[var(--black)] text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_20%,#1B4F9C_0%,transparent_50%),radial-gradient(circle_at_20%_80%,#E62D2D_0%,transparent_40%)]" />
        <div className="container-page relative py-20 md:py-28">
          <p className="badge bg-white/10 text-white/90 mb-4">Vadodara · Career & Study Abroad Consultancy</p>
          <h1 className="font-display max-w-3xl fade-up">
            Study Abroad Consultancy Vadodara — Career, Admissions & Student Visa Guidance
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 fade-up" style={{ animationDelay: "80ms" }}>
            Plan your global education journey with honest counselling — from course fit to university applications and visa readiness. No inflated promises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "120ms" }}>
            <Link href="/contact" className="btn-primary">Book counselling</Link>
            <Link href="/destinations" className="btn-secondary">Explore countries</Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} className="btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <p className="mt-6 text-sm text-white/60">{SITE.phone} · {SITE.email}</p>
        </div>
      </section>

      {/* Trust strip */}
      <Section mist>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Personalised Vadodara counselling", "Career → admission → visa roadmap", "Canada · UK · Australia focus", "Transparent process — no fake metrics"].map((t) => (
            <div key={t} className="card p-4 text-sm font-semibold text-ink flex items-start gap-2">
              <span className="text-lime text-lg">✓</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Destinations */}
      <Section>
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-brand mb-2">Destinations</p>
            <h2 className="font-display">Where students from Vadodara plan next</h2>
          </div>
          <Link href="/destinations" className="hidden sm:inline text-sm font-semibold text-brand hover:underline">View all →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <Link key={c.slug} href={`/destinations/${c.slug}`} className="card p-5 block">
              <p className="text-2xl mb-2">{c.flag}</p>
              <p className="font-display text-lg font-bold">Study in {c.name}</p>
              <p className="mt-2 text-sm text-muted">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section mist>
        <h2 className="font-display mb-8">How it works</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {HOW.map((s, i) => (
            <div key={s.t} className="card p-5">
              <p className="text-brand font-bold text-sm mb-2">Step {i + 1}</p>
              <p className="font-display font-bold">{s.t}</p>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <h2 className="font-display mb-8">Services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="card p-5 block">
              <p className="font-display text-lg font-bold">{s.title}</p>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">Learn more →</span>
            </Link>
          ))}
          <Link href="/visa/student-visa" className="card p-5 block md:col-span-2">
            <p className="font-display text-lg font-bold">Student Visa Guidance</p>
            <p className="mt-2 text-sm text-muted">Checklists, file readiness, and interview prep — outcomes always depend on immigration decisions.</p>
          </Link>
        </div>
      </Section>

      {/* Why Umang */}
      <Section mist>
        <h2 className="font-display mb-8">Why Umang</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {WHY.map((w) => (
            <div key={w.t} className="card p-5">
              <p className="font-display font-bold text-lg">{w.t}</p>
              <p className="mt-2 text-muted text-sm">{w.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offers teaser */}
      <Section>
        <div className="card p-8 md:p-10 bg-gradient-to-r from-[var(--brand-red-soft)] to-white border-brand/20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-brand mb-2">Current offers</p>
            <h2 className="font-display text-2xl">Counselling sessions & seasonal offers</h2>
            <p className="mt-2 text-muted max-w-xl">Check live offers from our team — claim online and we will follow up on WhatsApp.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">Talk to us</Link>
        </div>
      </Section>

      {/* Success stories */}
      <Section mist>
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display">Success stories</h2>
          <Link href="/testimonials" className="text-sm font-semibold text-brand">See more →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "Student family, Vadodara", t: "Clear country shortlist and document plan before deposits." },
            { n: "Master’s aspirant", t: "SOP structure and university shortlist aligned to budget." },
            { n: "Parent counselling", t: "Honest ROI discussion for Canada vs UK timing." },
          ].map((s) => (
            <div key={s.n} className="card p-5">
              <p className="text-gold text-lg">★★★★★</p>
              <p className="mt-3 text-sm text-ink">{s.t}</p>
              <p className="mt-4 text-xs font-semibold text-muted">{s.n}</p>
              <p className="text-xs text-muted mt-1">Placeholder — real testimonials coming soon.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* IELTS soft */}
      <Section>
        <div className="card p-6 md:p-8 border-dashed">
          <h2 className="font-display text-xl">English test readiness</h2>
          <p className="mt-2 text-muted max-w-2xl">
            Many destinations need proof of English. We help you understand score expectations for your shortlist — without hard-selling coaching packages on this page.
          </p>
          <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline">Ask during counselling →</Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section mist>
        <h2 className="font-display mb-8">FAQ</h2>
        <div className="space-y-3 max-w-3xl">
          {FAQS.map((f) => (
            <details key={f.q} className="card p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between gap-4">
                {f.q}
                <span className="text-muted group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <Link href="/faq" className="inline-block mt-6 text-sm font-semibold text-brand">All FAQs →</Link>
      </Section>

      {/* Final CTA + lead form */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display">Ready to talk?</h2>
            <p className="mt-3 text-muted">Book a free counselling session. Parent or student — tell us where you are in the journey.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li><a className="font-semibold text-brand" href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a></li>
              <li><a className="font-semibold" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className="text-muted">{SITE.fullAddress}</li>
            </ul>
          </div>
          <LeadForm source="home" />
        </div>
      </Section>
    </>
  );
}
