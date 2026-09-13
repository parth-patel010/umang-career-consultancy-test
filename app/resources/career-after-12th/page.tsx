import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/resources/career-after-12th");

export default function Page() {
  return (
    <ContentPageView
      routePath="/resources/career-after-12th"
      crumbs={[{ name: "Resources", href: "/resources" }, { name: "Career After 12th", href: "/resources/career-after-12th" }]}
      showForm={true}
    />
  );
}
