import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/destinations/uk");

export default function Page() {
  return (
    <ContentPageView
      routePath="/destinations/uk"
      crumbs={[{ name: "Destinations", href: "/destinations" }, { name: "UK", href: "/destinations/uk" }]}
      showForm={true}
    />
  );
}
