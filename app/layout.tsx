import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Study Abroad Consultancy Vadodara`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Career counselling, study abroad consultancy, university admissions and student visa guidance in Vadodara. Call +91 9173186109.",
  keywords: [...SITE.keywords],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: SITE.name,
    description: "Study abroad & career consultancy in Vadodara — honest counselling, no fake metrics.",
    url: SITE.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} antialiased`}>
        <LocalBusinessJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
