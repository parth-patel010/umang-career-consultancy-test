import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/destinations");

export default function Page() {
  return (
    <ContentPageView
      routePath="/destinations"
      crumbs={[{ name: "Destinations", href: "/destinations" }]}
      showForm={true}
    />
  );
}
