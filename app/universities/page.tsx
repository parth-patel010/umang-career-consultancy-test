import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/universities");

export default function Page() {
  return (
    <ContentPageView
      routePath="/universities"
      crumbs={[{ name: "Universities", href: "/universities" }]}
      showForm={true}
    />
  );
}
