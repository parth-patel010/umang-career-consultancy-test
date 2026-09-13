import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/contact");

export default function Page() {
  return (
    <ContentPageView
      routePath="/contact"
      crumbs={[{ name: "Contact", href: "/contact" }]}
      showForm={true}
    />
  );
}
