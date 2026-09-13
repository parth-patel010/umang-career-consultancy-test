"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { ChatWidget } from "@/components/chat/ChatWidget";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const isAdmin = path?.startsWith("/admin");
  const darkHero = path === "/";
  if (isAdmin) return <>{children}</>;
  return (
    <>
      <Header dark={darkHero} />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
      <ChatWidget />
    </>
  );
}
