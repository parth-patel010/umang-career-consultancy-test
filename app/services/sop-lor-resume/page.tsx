import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/services/sop-lor-resume");

export default function Page() {
  return (
    <ContentPageView
      routePath="/services/sop-lor-resume"
      crumbs={[{ name: "Services", href: "/services" }, { name: "SOP / LOR / Resume", href: "/services/sop-lor-resume" }]}
      showForm={true}
    />
  );
}
