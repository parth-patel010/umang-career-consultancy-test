import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { getPageContent } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageContent("/")?.metaTitle || `${SITE.name} | Study Abroad Consultancy Vadodara`,
  description: getPageContent("/")?.metaDescription,
  alternates: { canonical: SITE.url },
};

export default function Page() {
  return <HomePage />;
}
