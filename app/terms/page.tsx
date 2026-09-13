import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
export const metadata = { title: "Terms of Use" };
export default function Page() {
  return (
    <>
      <PageHero title="Terms of Use" crumbs={[{ name: "Terms", href: "/terms" }]} />
      <Section>
        <p className="text-muted max-w-3xl">Guidance on this site is informational. Visa and admission outcomes depend on eligibility and institutional/immigration decisions. Umang Career Consultancy does not guarantee approvals.</p>
      </Section>
    </>
  );
}
