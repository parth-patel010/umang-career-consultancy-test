import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/about");

export default function Page() {
  return (
    <ContentPageView
      routePath="/about"
      crumbs={[{ name: "About", href: "/about" }]}
      showForm={true}
    />
  );
}
