"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";

type Msg = { role: "user" | "assistant"; text: string };

export function ChatWidget() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      text: `Hi! I can help with Umang Career Consultancy services, destinations, and how to book counselling in Vadodara. Ask a site-related question — or WhatsApp us at ${SITE.phone}.`,
    },
  ]);

  if (path?.startsWith("/admin")) return null;

  async function send() {
    const q = input.trim();
    if (!q || loading) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: "assistant", text: data.reply || "Please try WhatsApp for a counsellor." }]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "assistant", text: `I couldn't reach the assistant. WhatsApp us: https://wa.me/${SITE.whatsapp}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed right-4 z-50 chat-fab-offset">
      {open && (
        <div className="mb-3 w-[min(100vw-2rem,360px)] overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-black px-4 py-3 text-white">
            <div>
              <p className="font-semibold text-sm">Umang Assistant</p>
              <p className="text-xs text-white/70">Site help · WhatsApp handoff</p>
            </div>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)} className="text-white/80">✕</button>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto p-3 bg-mist">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`rounded-2xl px-3 py-2 text-sm ${
                  m.role === "user" ? "ml-8 bg-brand text-white" : "mr-6 bg-white border border-line text-ink"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && <p className="text-xs text-muted px-1">Thinking…</p>}
          </div>
          <div className="border-t border-line p-2 flex gap-2">
            <input
              className="input !min-h-10 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about services…"
            />
            <button type="button" onClick={send} className="btn-primary !min-h-10 px-3 text-sm">Send</button>
          </div>
          <div className="px-3 pb-3 flex gap-2">
            <a className="btn-outline !min-h-9 text-xs flex-1" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp counsellor</a>
            <a className="btn-outline !min-h-9 text-xs flex-1" href="/contact">Book counselling</a>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:bg-brand-hover"
        aria-label="Open chat"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
