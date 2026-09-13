import Link from "next/link";
import { COUNTRIES, SERVICES, SITE } from "@/lib/site";
import { LeadForm } from "@/components/forms/LeadForm";
import { Section } from "@/components/ui/Section";
import { FaqJsonLd } from "@/components/seo/JsonLd";

const HOW = [
  { t: "Share your goals", d: "Course interest, budget range, timeline, and family priorities." },
  { t: "Profile and fit counselling", d: "Honest shortlist of countries and programs that match your profile." },
  { t: "Applications and documents", d: "Admission support plus SOP/LOR/resume discipline." },
  { t: "Visa readiness", d: "Checklists, file review, and interview prep — no approval guarantees." },
];

const WHY = [
  { t: "Local Vadodara trust", d: "Meet us at Siddeshwar Plaza — counselling for students and parents together.", tone: "lime" },
  { t: "One coordinated roadmap", d: "Admissions advice and visa documentation stay aligned to one plan.", tone: "gold" },
  { t: "Honest fit conversations", d: "We discuss risk, cost, and timelines without inflated promises.", tone: "lime" },
  { t: "End-to-end support", d: "Career to admission to funding talks to visa readiness under one roof.", tone: "gold" },
];

const STORIES = [
  { q: "They explained Canada vs UK in plain language for our family — no pressure sales.", a: "Parent, Vadodara" },
  { q: "SOP feedback was practical and honest. We knew exactly what to fix before applying.", a: "Student applicant" },
];

const FAQS = [
  { q: "Do you guarantee visas?", a: "No. Visa outcomes depend on eligibility, documentation, and immigration decisions. We prepare files carefully and counsel honestly." },
  { q: "Where is your office in Vadodara?", a: "FF-25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP Road, KhodiyarNagar, Vadodara 390019." },
  { q: "Which countries do you counsel for?", a: "Primarily Canada, UK, and Australia, plus USA and New Zealand." },
  { q: "How do I book counselling?", a: "Call or WhatsApp +91 9173186109, email umangcareer2022@gmail.com, or use the form on this page." },
];

const DEST_BAND: Record<string, string> = {
  canada: "from-[#E31937] to-[#FF0000]",
  uk: "from-[#012169] to-[#C8102E]",
  australia: "from-[#00008B] to-[#FF4500]",
  usa: "from-[#3C3B6E] to-[#B22234]",
  "new-zealand": "from-[#00247D] to-[#CC0000]",
};

export function HomePage() {
  const [featured, ...rest] = SERVICES;
  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      <section className="surface-dark relative overflow-hidden bg-[var(--black)] min-h-[78vh] md:min-h-[88vh] flex items-center">
        <div className="absolute inset-0" style={{ backgroundImage: "var(--glow-blue), var(--glow-red)" }} />
        <div className="absolute inset-0 hero-grid" />
        <div className="container-page relative py-20 md:py-28">
          <p className="badge bg-white/10 text-white/90 mb-5 fade-up">Vadodara · Career & Study Abroad</p>
          <h1 className="font-display max-w-3xl fade-up text-white" style={{ animationDelay: "60ms" }}>
            Your global education plan — with honest Vadodara counselling
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 fade-up" style={{ animationDelay: "120ms" }}>
            From course fit to university applications and visa readiness. Clear guidance for students and parents — no inflated promises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "180ms" }}>
            <Link href="/contact" className="btn-primary">Book counselling</Link>
            <Link href="/destinations" className="btn-ghost">Explore countries</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 fade-up" style={{ animationDelay: "240ms" }}>
            <span className="trust-chip">Google-listed consultancy</span>
            <span className="trust-chip">New VIP Road, Vadodara</span>
            <span className="trust-chip">Honest counselling</span>
          </div>
          <p className="mt-6 text-sm text-white/55">{SITE.phone} · {SITE.email}</p>
        </div>
      </section>

      <Section mist>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Personalised Vadodara counselling", "Career to admission to visa roadmap", "Canada · UK · Australia focus", "Transparent process — no fake metrics"].map((t) => (
            <div key={t} className="card card-feature p-4 text-sm font-semibold text-ink flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-lime-soft)] text-lime text-sm font-bold">OK</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-brand mb-2">Destinations</p>
            <h2 className="font-display">Where students from Vadodara plan next</h2>
          </div>
          <Link href="/destinations" className="hidden sm:inline text-sm font-semibold text-brand hover:underline">View all</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <Link key={c.slug} href={`/destinations/${c.slug}`} className="card card-feature overflow-hidden block group">
              <div className={`h-24 bg-gradient-to-br ${DEST_BAND[c.slug] || "from-[var(--accent-blue)] to-[var(--black)]"} opacity-90`} />
              <div className="p-5">
                <p className="font-display text-lg font-bold">Study in {c.name}</p>
                <p className="mt-2 text-sm text-muted">{c.blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand group-hover:underline">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

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

      <Section>
        <h2 className="font-display mb-8">Services</h2>
        <div className="md:hidden space-y-3">
          {[...SERVICES, { href: "/visa/student-visa", title: "Student Visa Guidance", desc: "Checklists, file readiness, and interview prep — outcomes always depend on immigration decisions." }].map((s) => (
            <Link key={s.href} href={s.href} className="card flex items-center gap-3 p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red-soft)] text-brand font-bold">UA</span>
              <span className="flex-1">
                <span className="font-display font-bold block">{s.title}</span>
                <span className="text-sm text-muted">{s.desc}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          <Link href={featured.href} className="card card-feature p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[260px]">
            <div>
              <p className="badge badge-red mb-4">Core service</p>
              <p className="font-display text-2xl font-bold">{featured.title}</p>
              <p className="mt-3 text-muted max-w-md">{featured.desc}</p>
            </div>
            <span className="mt-6 text-sm font-semibold text-brand">Learn more</span>
          </Link>
          {rest.map((s) => (
            <Link key={s.href} href={s.href} className="card p-5 block">
              <p className="font-display text-lg font-bold">{s.title}</p>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">Learn more</span>
            </Link>
          ))}
          <Link href="/visa/student-visa" className="card p-5 block">
            <p className="font-display text-lg font-bold">Student Visa Guidance</p>
            <p className="mt-2 text-sm text-muted">Checklists, file readiness, and interview prep — outcomes always depend on immigration decisions.</p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand">Learn more</span>
          </Link>
        </div>
      </Section>

      <Section mist>
        <h2 className="font-display mb-8">Why Umang</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {WHY.map((w) => (
            <div key={w.t} className="card p-5 flex gap-3">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${w.tone === "gold" ? "bg-[var(--accent-gold-soft)] text-gold" : "bg-[var(--accent-lime-soft)] text-lime"}`}>OK</span>
              <div>
                <p className="font-display font-bold">{w.t}</p>
                <p className="mt-1 text-sm text-muted">{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card p-8 md:p-10 bg-gradient-to-r from-[var(--brand-red-soft)] to-white border-brand/20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="badge badge-gold mb-3">Limited seasonal</p>
            <p className="text-sm font-semibold text-brand mb-2">Current offers</p>
            <h2 className="font-display text-2xl">Counselling sessions and seasonal offers</h2>
            <p className="mt-2 text-muted max-w-xl">Check live offers from our team — claim online and we will follow up on WhatsApp.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">Talk to us</Link>
        </div>
      </Section>

      <Section mist>
        <h2 className="font-display mb-8">Success stories</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {STORIES.map((s) => (
            <blockquote key={s.q} className="card p-6 border-l-4 border-[var(--accent-gold)] rounded-l-none">
              <p className="text-ink leading-relaxed">&ldquo;{s.q}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-muted">— {s.a}</footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">Example placeholders — replace with client-approved testimonials.</p>
      </Section>

      <Section>
        <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <p className="badge badge-blue mb-3">IELTS readiness</p>
            <h2 className="font-display">English test planning, without the hard sell</h2>
            <p className="mt-2 text-muted">We help you understand score targets for your shortlist. Dedicated IELTS coaching pages stay on hold until offering is confirmed.</p>
          </div>
          <Link href="/contact" className="btn-outline shrink-0">Ask a counsellor</Link>
        </div>
      </Section>

      <Section mist>
        <h2 className="font-display mb-8">FAQs</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="card p-5 group">
              <summary className="font-display font-bold cursor-pointer list-none flex justify-between gap-4">
                {f.q}
                <span className="text-brand">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <p className="badge badge-gold mb-3">Book a session</p>
            <h2 className="font-display">Ready to talk through your options?</h2>
            <p className="mt-3 text-muted">Tell us whether you are a student or parent — we will follow up on WhatsApp or phone.</p>
            <p className="mt-4 text-sm font-semibold">{SITE.phone}</p>
            <p className="text-sm text-muted">{SITE.fullAddress}</p>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}