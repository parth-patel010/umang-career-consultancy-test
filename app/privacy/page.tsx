import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
export const metadata = { title: "Privacy Policy" };
export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ name: "Privacy", href: "/privacy" }]} />
      <Section>
        <p className="text-muted max-w-3xl">We collect enquiry details you submit (name, phone, email, message) to respond to counselling requests. We do not sell personal data. Contact us at umangcareer2022@gmail.com for privacy questions.</p>
      </Section>
    </>
  );
}
