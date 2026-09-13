import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/destinations/new-zealand");

export default function Page() {
  return (
    <ContentPageView
      routePath="/destinations/new-zealand"
      crumbs={[{ name: "Destinations", href: "/destinations" }, { name: "New Zealand", href: "/destinations/new-zealand" }]}
      showForm={true}
    />
  );
}
