import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/visa/visitor-visa");

export default function Page() {
  return (
    <ContentPageView
      routePath="/visa/visitor-visa"
      crumbs={[{ name: "Visa", href: "/visa" }, { name: "Visitor Visa", href: "/visa/visitor-visa" }]}
      showForm={true}
    />
  );
}
