"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

export function StickyMobileCTA() {
  const path = usePathname();
  if (path?.startsWith("/admin")) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-line bg-white/95 backdrop-blur-md">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a href={`https://wa.me/${SITE.whatsapp}`} className="btn-outline text-sm !min-h-12" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <Link href="/contact" className="btn-primary text-sm !min-h-12">
          Book counselling
        </Link>
      </div>
    </div>
  );
}

