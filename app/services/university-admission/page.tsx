import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/services/university-admission");

export default function Page() {
  return (
    <ContentPageView
      routePath="/services/university-admission"
      crumbs={[{ name: "Services", href: "/services" }, { name: "University Admission", href: "/services/university-admission" }]}
      showForm={true}
    />
  );
}
