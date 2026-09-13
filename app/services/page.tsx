import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/services");

export default function Page() {
  return (
    <ContentPageView
      routePath="/services"
      crumbs={[{ name: "Services", href: "/services" }]}
      showForm={true}
    />
  );
}
