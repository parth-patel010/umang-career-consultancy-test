import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/destinations/usa");

export default function Page() {
  return (
    <ContentPageView
      routePath="/destinations/usa"
      crumbs={[{ name: "Destinations", href: "/destinations" }, { name: "USA", href: "/destinations/usa" }]}
      showForm={true}
    />
  );
}
