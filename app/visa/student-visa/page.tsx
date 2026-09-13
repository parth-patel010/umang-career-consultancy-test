import type { Metadata } from "next";
import { contentMetadata, ContentPageView } from "@/components/ui/ContentPage";

export const metadata: Metadata = contentMetadata("/visa/student-visa");

export default function Page() {
  return (
    <ContentPageView
      routePath="/visa/student-visa"
      crumbs={[{ name: "Visa", href: "/visa" }, { name: "Student Visa", href: "/visa/student-visa" }]}
      showForm={true}
    />
  );
}
