import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/resources/visa-interview-tips");

export default function Page() {
  return (
    <ContentPageView
      routePath="/resources/visa-interview-tips"
      crumbs={[{ name: "Resources", href: "/resources" }, { name: "Visa Interview Tips", href: "/resources/visa-interview-tips" }]}
      showForm={true}
    />
  );
}
