"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/visa", label: "Visa" },
  { href: "/resources", label: "Resources" },
  { href: "/testimonials", label: "Success Stories" },
  { href: "/about", label: "About" },
];

export function Header({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`sticky top-0 z-50 h-[72px] border-b ${
        dark
          ? "border-white/10 bg-black/72 text-white backdrop-blur-md"
          : "border-line bg-white/92 text-ink backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/brand/umang-logo.png"
            alt="Umang Career Consultancy"
            width={140}
            height={40}
            className="h-9 w-auto object-contain sm:h-10"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="opacity-90 hover:opacity-100 hover:text-brand">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={`hidden md:inline-flex btn-outline !min-h-10 text-sm px-3 ${dark ? "!border-white/40 !text-white !bg-transparent" : ""}`}
          >
            WhatsApp
          </a>
          <Link href="/contact" className="btn-primary text-sm px-4 !min-h-10">
            Book counselling
          </Link>
          <button type="button" className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-red)] to-transparent opacity-70" />
      {open && (
        <div className={`lg:hidden border-t ${dark ? "border-white/10 bg-black" : "border-line bg-white"}`}>
          <div className="container-page py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 font-medium">
                {n.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary text-center">
              Book counselling
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}