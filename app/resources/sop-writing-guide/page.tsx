import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/resources/sop-writing-guide");

export default function Page() {
  return (
    <ContentPageView
      routePath="/resources/sop-writing-guide"
      crumbs={[{ name: "Resources", href: "/resources" }, { name: "SOP Guide", href: "/resources/sop-writing-guide" }]}
      showForm={true}
    />
  );
}
