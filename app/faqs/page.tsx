import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/faqs");

export default function Page() {
  return (
    <ContentPageView
      routePath="/faqs"
      crumbs={[{ name: "FAQs", href: "/faqs" }]}
      showForm={true}
    />
  );
}
