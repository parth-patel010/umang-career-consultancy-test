import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/study-abroad");

export default function Page() {
  return (
    <ContentPageView
      routePath="/study-abroad"
      crumbs={[{ name: "Study Abroad", href: "/study-abroad" }]}
      showForm={true}
    />
  );
}
