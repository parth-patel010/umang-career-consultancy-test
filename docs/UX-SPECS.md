# Umang Career Consultancy — UI/UX Specs
**For:** COO + Full-Stack Developer  
**Brand source:** `public/brand/umang-logo.png`  
**Audience:** Vadodara students + parents (conversion-first)  
**Refs (structure/feel only):** dishaeducationconsultancy.com, prathaminternational.in — elevate polish beyond both.

---

## 1. Brand & visual system (must follow logo)

### Color tokens
| Token | Hex | Use |
|---|---|---|
| `brand.red` | `#E62D2D` | Primary CTAs, logo text, key links, focus rings |
| `brand.redHover` | `#C41F1F` | CTA hover/pressed |
| `accent.gold` | `#F0A020` | Highlights, badges, secondary accents |
| `accent.lime` | `#7AC143` | Success, “visa approved”, positive stats |
| `accent.blue` | `#1B4F9C` | Trust sections, deep panels, footer base |
| `neutral.black` | `#0B0B0B` | Dark hero / sticky CTA bar / logo plate |
| `neutral.ink` | `#1A1A1A` | Body text on light |
| `neutral.muted` | `#6B7280` | Secondary text |
| `neutral.line` | `#E5E7EB` | Borders, dividers |
| `surface.white` | `#FFFFFF` | Cards, forms |
| `surface.mist` | `#F7F8FA` | Page background strips |
| `globe.silver` | `#9CA3AF` | Iconic globe grey (decorative only) |

### Typography
- Display / H1–H2: bold geometric sans (e.g. Plus Jakarta Sans / Manrope) — match logo’s confident caps energy without copying all-caps everywhere.
- Body: Inter or system-ui, 16–18px mobile, 1.6 line-height.
- Parent-friendly: large readable type; avoid dense walls of text.

### Motion & depth (polish bar)
- Soft elevation: cards `0 8px 30px rgba(11,11,11,0.08)`; hover lift 4px.
- Subtle glass on sticky header over dark hero: `backdrop-blur` + translucent white/black.
- Page load: staggered fade-up (80–120ms) on hero → trust strip → services.
- Micro: CTA scale 1.02 on hover; form success confetti-lite (lime + gold particles, 1.2s).
- Scroll: gentle parallax on hero globe motif (very subtle — accessibility: respect `prefers-reduced-motion`).
- Not generic: use circular “people around globe” motif as a recurring decorative device (section dividers, loading, empty states) — not stock stock-photo hero only.

### Spacing & radius
- Radius: 12px controls, 16–20px cards, full pill for primary CTAs.
- Section padding: mobile 56/64, desktop 96/120.
- Max content width: 1160–1200px.

---

## 2. Sitemap (wire notes)

### Public
1. **Home** — conversion hub  
2. **Study Abroad** — countries + pathway overview (`/study-abroad`, `/study-abroad/[country]`)  
3. **Services** — counselling, applications, visas, IELTS, loans, pre-departure  
4. **Test Prep / IELTS** — bands, batches (Vadodara-focused)  
5. **Success Stories** — filter by country / visa type  
6. **About Umang** — trust, Vadodara presence, team  
7. **Blog / Guides** — parent + student SEO content  
8. **Contact / Book counselling** — primary lead page  
9. **Offers** — public landing for active campaigns (`/offers/[slug]`)  
10. Legal: Privacy, Terms  

### Admin (authenticated)
- Dashboard (leads, offers, funnel)
- Leads inbox + lead detail
- Offer manager (create/edit/publish)
- Content light-edit (optional later)
- Chatbot handoff log (optional)

### Utility
- Thank-you / booking confirmed
- 404 with CTA back to counselling

**Primary nav (desktop):** Home · Study Abroad · Services · IELTS · Success Stories · About · **Book Free Counselling** (CTA button)  
**Mobile:** bottom or hamburger + sticky **Book counselling** bar.

---

## 3. Homepage sections (ordered, conversion-focused)

1. **Sticky header** — logo (light/dark variants), nav, phone tap-to-call (Vadodara), CTA `Book free counselling`.
2. **Hero** — dark plate (`#0B0B0B`) with logo energy; headline for students *and* parents (“Study abroad with clarity — from Vadodara to the world”); sub: honest counselling + visas + IELTS; dual CTAs: primary red `Book free counselling`, secondary outline `Explore countries`; trust chips (visa success %, countries, students guided — use real numbers when available).
3. **Trust strip** — Google rating, ICEF/partner badges if any, city: Vadodara HQ.
4. **Dream destinations** — country cards (Canada, UK, USA, Australia, Europe, NZ…) → Study Abroad.
5. **How it works** — 4 steps: Counselling → Shortlist → Apply & SOP → Visa & fly (visual timeline with red active node).
6. **Services grid** — Student visa, Spouse/Visitor, University apps, IELTS, Career counselling, Forex/loan support (keep honest scope).
7. **Why Umang** — 6 proof points; mix lime checkmarks + blue trust cards; parent-facing language (“transparent fees”, “weekly updates”).
8. **Active offers teaser** — pull published offers; urgency without spam.
9. **Success stories carousel** — Vadodara/Gujarat names + country; video if available.
10. **IELTS / coaching CTA band** — gold accent bar.
11. **FAQ accordion** — fees, intakes, gap years, parent involvement (SEO + objection handling).
12. **Final CTA + short lead form** — name, phone, preferred country, “I’m a parent / student” toggle.
13. **Footer** — deep blue → black; address, WhatsApp, map link, socials, sitemap.

**Conversion rules**
- Always one obvious red CTA above the fold.
- WhatsApp float + chatbot (see §5) — don’t fight each other.
- Parent mode: optional toggle softens copy (“for your child’s future”).

---

## 4. Component style system (build kit)

### Buttons
- **Primary:** bg `#E62D2D`, text white, pill, shadow-red soft; hover `#C41F1F`.
- **Secondary:** outline red or white-on-dark.
- **Tertiary:** text link with gold underline on hover.
- **Success:** lime for “Submitted / Approved” states only — not competing with primary CTA.

### Cards
- White surface, 16–20px radius, light border `#E5E7EB`, hover lift + red 2px top accent optional.
- Country cards: flag/illustration, short ROI line, `Explore` micro-CTA.

### Forms
- Labels above fields; 48px+ tap height; red focus ring.
- Errors inline under field; success toast lime.
- Prefer progressive disclosure on long forms (see offer/admin).

### Badges / chips
- Gold = limited offer; Lime = success; Blue = trust/info; Red soft tint = urgent intake.

### Stats
- Big number + muted label; animate count-up once in view (respect reduced motion → static).

### Imagery
- Prefer real student photos when available; else high-quality destination + diverse faces.
- Never clash with logo: avoid random rainbow UI — accents only from brand five.

---

## 5. Admin + Offer form UX notes

### Public — Book counselling / Contact
**Fields (mobile-first, ≤1 screen before submit if possible):**
- Full name*
- Phone* (IN +91 mask)
- WhatsApp same? toggle
- Email (optional)
- I am: Student | Parent*
- Preferred country (multi-select chips)
- Intake interest (select)
- City (default hint Vadodara)
- Message (optional)
- Consent checkbox*

**UX:** sticky submit on mobile; show “Counsellor calls within X hours”; after submit → thank-you + WhatsApp deep link.

### Public — Offer landing (`/offers/[slug]`)
- Hero with offer title, gold “Limited” badge, countdown only if real end date.
- Benefit bullets + who it’s for (student/parent).
- **Claim offer form:** Name*, Phone*, Student/Parent*, Course/Country interest*, optional OTP later.
- Social proof near form.
- Fine print / T&Cs collapse.

### Admin — Offer manager
- List: status (Draft/Scheduled/Live/Expired), claims count, CTR if tracked.
- Editor sections: Title, slug, hero media, benefits, CTA label, start/end, targeting tags (country, IELTS, visa), publish.
- Preview mobile iframe.
- Validation: end date ≥ start; require phone field always on claim form.

### Admin — Leads
- Kanban or table: New → Contacted → Counselling booked → Applied → Visa → Closed.
- Lead detail: timeline, offer source, assignee, notes, next follow-up.
- Quick actions: Call, WhatsApp, Mark contacted.
- Filters: source (form/chatbot/offer), city, country interest.

### Admin — Auth & UX
- Simple login; role: Admin / Counsellor (counsellor = leads only).
- Empty states with illustration (globe motif) + next action.

---

## 6. Chatbot widget placement

**Position:** bottom-right, **16px** from edge on desktop; on mobile **above** the sticky CTA bar (not covering it) — e.g. sticky bar ~64px → chatbot sits at `bottom: 80px`.

**Behavior**
- Delay open prompt 8–12s OR on exit-intent (desktop): “Questions about Canada/UK intakes?”
- Quick replies: Study abroad · IELTS · Fees · Talk to counsellor
- Hand off to WhatsApp / callback form after 2–3 turns or on “Talk to human”
- Avatar: cropped logo icon (people+globe), not generic bot face
- Unread dot uses brand red
- Do **not** auto-expand on mobile first visit (conversion kill) — pulse once, stay collapsed
- Respect pages: hide on Admin; quieter on Thank-you

**Analytics hooks for Full-Stack:** `chat_opened`, `chat_quick_reply`, `chat_handoff_whatsapp`, `chat_lead_captured`

---

## 7. Differentiation vs refs
- Disha/Pratham = dense service grids + trust stats — keep that information architecture.
- Umang = darker cinematic hero, tighter type, brand-accurate multi-accent system, smoother motion, parent/student dual path, offer engine + chatbot orchestration — feels premium, local, and conversion-sharp for Vadodara.

## 8. Handoff checklist for Full-Stack
- [ ] Tokens as CSS variables / theme
- [ ] Logo light + dark variants from `public/brand/umang-logo.png`
- [ ] Homepage section order as above
- [ ] Lead + offer claim APIs wired to admin leads
- [ ] Chatbot + WhatsApp + sticky CTA collision rules
- [ ] `prefers-reduced-motion` support
- [ ] Mobile-first QA at 360 / 390 / 768 / 1280

