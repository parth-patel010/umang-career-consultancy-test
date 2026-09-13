import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/visa");

export default function Page() {
  return (
    <ContentPageView
      routePath="/visa"
      crumbs={[{ name: "Visa", href: "/visa" }]}
      showForm={true}
    />
  );
}
