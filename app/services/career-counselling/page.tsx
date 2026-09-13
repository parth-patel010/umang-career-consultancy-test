import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/services/career-counselling");

export default function Page() {
  return (
    <ContentPageView
      routePath="/services/career-counselling"
      crumbs={[{ name: "Services", href: "/services" }, { name: "Career Counselling", href: "/services/career-counselling" }]}
      showForm={true}
    />
  );
}
