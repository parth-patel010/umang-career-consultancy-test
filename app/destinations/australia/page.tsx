import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/destinations/australia");

export default function Page() {
  return (
    <ContentPageView
      routePath="/destinations/australia"
      crumbs={[{ name: "Destinations", href: "/destinations" }, { name: "Australia", href: "/destinations/australia" }]}
      showForm={true}
    />
  );
}
