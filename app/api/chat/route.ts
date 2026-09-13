import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

const FALLBACK =
  `Thanks for your question. For personalised counselling in Vadodara, WhatsApp us at ${SITE.phone} or book at /contact. We help with career counselling, university admissions, SOP/LOR, and student visa readiness for Canada, UK, Australia, USA, and New Zealand — without guaranteeing visa outcomes.`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const q = String(message || "").trim().slice(0, 1000);
    if (!q) return NextResponse.json({ reply: FALLBACK });

    const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;
    if (!key) {
      const lower = q.toLowerCase();
      let reply = FALLBACK;
      if (lower.includes("canada") || lower.includes("uk") || lower.includes("australia")) {
        reply = `We counsel for study pathways to Canada, UK, Australia, USA, and New Zealand from Vadodara. Book a session: ${SITE.phone} or /contact.`;
      } else if (lower.includes("visa")) {
        reply = `We support student, visitor, and spouse/dependent visa documentation readiness. Outcomes depend on immigration decisions — we never guarantee approvals. Call ${SITE.phone}.`;
      } else if (lower.includes("address") || lower.includes("office") || lower.includes("where")) {
        reply = `Our office: ${SITE.fullAddress}. Phone: ${SITE.phone}.`;
      } else if (lower.includes("fee") || lower.includes("cost") || lower.includes("price")) {
        reply = `Counselling fees and service packages depend on your profile and destination. Share details via WhatsApp ${SITE.phone} or /contact for an honest discussion.`;
      }
      return NextResponse.json({ reply });
    }

    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `You are the website assistant for Umang Career Consultancy, Vadodara.
Phone: ${SITE.phone}. Email: ${SITE.email}. Address: ${SITE.fullAddress}.
Services: career counselling, university admission, SOP/LOR/resume, education loan/forex, student/visitor/spouse visa guidance.
Destinations: Canada, UK, Australia, USA, New Zealand. Never invent metrics or guarantee visas.
Keep answers short (under 120 words). Suggest WhatsApp or /contact for counselling.
User: ${q}`;
      const result = await model.generateContent(prompt);
      const reply = result.response.text() || FALLBACK;
      return NextResponse.json({ reply });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ reply: FALLBACK });
    }
  } catch {
    return NextResponse.json({ reply: FALLBACK }, { status: 200 });
  }
}
