import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/resources/how-to-choose-study-destination");

export default function Page() {
  return (
    <ContentPageView
      routePath="/resources/how-to-choose-study-destination"
      crumbs={[{ name: "Resources", href: "/resources" }, { name: "Choose Destination", href: "/resources/how-to-choose-study-destination" }]}
      showForm={true}
    />
  );
}
