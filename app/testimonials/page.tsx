import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/testimonials");

export default function Page() {
  return (
    <ContentPageView
      routePath="/testimonials"
      crumbs={[{ name: "Success Stories", href: "/testimonials" }]}
      showForm={true}
    />
  );
}
