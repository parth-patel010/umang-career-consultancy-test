import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/visa/spouse-visa");

export default function Page() {
  return (
    <ContentPageView
      routePath="/visa/spouse-visa"
      crumbs={[{ name: "Visa", href: "/visa" }, { name: "Spouse Visa", href: "/visa/spouse-visa" }]}
      showForm={true}
    />
  );
}
