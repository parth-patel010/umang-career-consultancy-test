import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/faq");

export default function Page() {
  return (
    <ContentPageView
      routePath="/faq"
      crumbs={[{ name: "FAQ", href: "/faq" }]}
      showForm={true}
    />
  );
}
