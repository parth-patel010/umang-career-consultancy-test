import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/resources");

export default function Page() {
  return (
    <ContentPageView
      routePath="/resources"
      crumbs={[{ name: "Resources", href: "/resources" }]}
      showForm={true}
    />
  );
}
