export const SITE = {
  name: "Umang Career Consultancy",
  shortName: "Umang",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://umangcareerconsultancy.com",
  phone: "+91 9173186109",
  phoneTel: "+919173186109",
  whatsapp: "919173186109",
  email: "umangcareer2022@gmail.com",
  address: {
    line1: "FF-25 Shree Siddeshwar Plaza",
    line2: "Beside Super Bakery, New VIP Road, KhodiyarNagar",
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    postalCode: "390019",
  },
  get fullAddress() {
    const a = this.address;
    return `${a.line1}, ${a.line2}, ${a.city} ${a.state} ${a.country}, ${a.postalCode}`;
  },
  keywords: [
    "career consultancy Vadodara",
    "study abroad consultancy Vadodara",
    "education consultancy Vadodara",
    "overseas education consultants Vadodara",
    "student visa consultants Vadodara",
    "Umang Career Consultancy Vadodara",
  ],
} as const;

export const COUNTRIES = [
  { slug: "canada", name: "Canada", flag: "🇨🇦", priority: 1, blurb: "Study pathways, PGWP-aware counselling, and admission guidance for Canadian colleges and universities." },
  { slug: "uk", name: "United Kingdom", flag: "🇬🇧", priority: 1, blurb: "UK university shortlisting, CAS-ready documentation support, and student visa readiness." },
  { slug: "australia", name: "Australia", flag: "🇦🇺", priority: 1, blurb: "Australian courses, GTE-aware counselling, and student visa preparation support." },
  { slug: "usa", name: "USA", flag: "🇺🇸", priority: 2, blurb: "US university applications, SOP strategy, and F-1 visa interview preparation guidance." },
  { slug: "new-zealand", name: "New Zealand", flag: "🇳🇿", priority: 2, blurb: "NZ institutes, study visas, and practical post-study pathway discussions." },
] as const;

export const SERVICES = [
  { href: "/services/career-counselling", title: "Career Counselling", desc: "Course, country, and ROI clarity for students and parents in Vadodara." },
  { href: "/services/university-admission", title: "University Admission", desc: "Profile-based shortlisting, applications, and deadline tracking." },
  { href: "/services/sop-lor-resume", title: "SOP / LOR / Resume", desc: "Application documents that present your story clearly." },
  { href: "/services/education-loan-forex", title: "Education Loan & Forex", desc: "Funding options and remittance guidance for tuition and living costs." },
] as const;

export const VISA_SERVICES = [
  { href: "/visa/student-visa", title: "Student Visa", desc: "Checklists, file readiness, and interview prep for study visas." },
  { href: "/visa/visitor-visa", title: "Visitor Visa", desc: "Tourism and family-visit documentation support." },
  { href: "/visa/spouse-visa", title: "Spouse / Dependent Visa", desc: "Dependent route guidance aligned to your family plans." },
] as const;

export const RESOURCES = [
  { href: "/resources/how-to-choose-study-destination", title: "How to Choose a Study Destination", desc: "A practical framework for students and parents." },
  { href: "/resources/sop-writing-guide", title: "SOP Writing Guide", desc: "Structure, honesty, and common mistakes to avoid." },
  { href: "/resources/visa-interview-tips", title: "Visa Interview Tips", desc: "Preparation habits that reduce last-minute panic." },
  { href: "/resources/career-after-12th", title: "Career After 12th", desc: "Options beyond the usual — with a study-abroad lens." },
] as const;
