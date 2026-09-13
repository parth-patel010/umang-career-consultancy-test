import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/process");

export default function Page() {
  return (
    <ContentPageView
      routePath="/process"
      crumbs={[{ name: "Process", href: "/process" }]}
      showForm={true}
    />
  );
}
