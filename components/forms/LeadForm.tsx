"use client";

import { useState } from "react";
import { COUNTRIES } from "@/lib/site";

export function LeadForm({
  source = "contact",
  offerSlug,
  compact = false,
}: {
  source?: string;
  offerSlug?: string;
  compact?: boolean;
}) {
  const [role, setRole] = useState<"student" | "parent">("student");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || "") || null,
      message: String(fd.get("message") || "") || null,
      role,
      country: String(fd.get("country") || "") || null,
      intake: String(fd.get("intake") || "") || null,
      source,
      offer_slug: offerSlug || null,
    };
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not submit. Please call us.");
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "ok") {
    return (
      <div className="card p-6 border-lime/40 bg-white">
        <p className="font-display text-xl font-bold text-ink">Thank you!</p>
        <p className="mt-2 text-muted">
          We received your enquiry. Our team will call or WhatsApp you shortly. For faster help, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`card p-5 md:p-6 space-y-4 ${compact ? "" : ""}`}>
      <div className="flex rounded-full bg-mist p-1 w-full max-w-xs">
        {(["student", "parent"] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`flex-1 rounded-full py-2 text-sm font-semibold capitalize ${
              role === r ? "bg-brand text-white" : "text-muted"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">Full name *</label>
          <input id="name" name="name" required className="input" placeholder="Your name" />
        </div>
        <div>
          <label className="label" htmlFor="phone">Phone / WhatsApp *</label>
          <input id="phone" name="phone" required className="input" placeholder="+91 ..." />
        </div>
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="input" placeholder="optional" />
        </div>
        <div>
          <label className="label" htmlFor="country">Preferred country</label>
          <select id="country" name="country" className="input">
            <option value="">Select</option>
            {COUNTRIES.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        {!compact && (
          <div className="md:col-span-2">
            <label className="label" htmlFor="intake">Target intake</label>
            <input id="intake" name="intake" className="input" placeholder="e.g. Sep 2026 / Jan 2027" />
          </div>
        )}
        <div className="md:col-span-2">
          <label className="label" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={3} className="input !min-h-[96px]" placeholder="Course interest, timeline, questions…" />
        </div>
      </div>
      {status === "err" && <p className="text-sm text-brand">{error}</p>}
      <button type="submit" className="btn-primary w-full md:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Book free counselling"}
      </button>
      <p className="text-xs text-muted">No fake guarantees. We reply with honest next steps.</p>
    </form>
  );
}
