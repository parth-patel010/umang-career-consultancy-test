import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/services/education-loan-forex");

export default function Page() {
  return (
    <ContentPageView
      routePath="/services/education-loan-forex"
      crumbs={[{ name: "Services", href: "/services" }, { name: "Education Loan & Forex", href: "/services/education-loan-forex" }]}
      showForm={true}
    />
  );
}
