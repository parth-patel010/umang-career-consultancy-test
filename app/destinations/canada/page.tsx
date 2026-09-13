import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/destinations/canada");

export default function Page() {
  return (
    <ContentPageView
      routePath="/destinations/canada"
      crumbs={[{ name: "Destinations", href: "/destinations" }, { name: "Canada", href: "/destinations/canada" }]}
      showForm={true}
    />
  );
}
