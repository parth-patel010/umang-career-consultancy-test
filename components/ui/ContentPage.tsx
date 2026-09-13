import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { MarkdownBody } from "@/components/ui/MarkdownBody";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

export function contentMetadata(routePath: string): Metadata {
  const doc = getPageContent(routePath);
  if (!doc) return { title: SITE.name };
  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: { canonical: `${SITE.url}${doc.path || routePath}` },
  };
}

export function ContentPageView({
  routePath,
  crumbs,
  showForm = true,
}: {
  routePath: string;
  crumbs?: { name: string; href: string }[];
  showForm?: boolean;
}) {
  const doc = getPageContent(routePath);
  if (!doc) notFound();
  const crumbItems = crumbs || [];
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          ...crumbItems.map((c) => ({ name: c.name, url: c.href })),
        ]}
      />
      {doc.faqs.length > 0 && <FaqJsonLd faqs={doc.faqs} />}
      <PageHero title={doc.h1} subtitle={doc.metaDescription} crumbs={crumbItems} />
      <Section>
        <div className={`grid gap-10 ${showForm ? "lg:grid-cols-[1fr_360px]" : ""} items-start`}>
          <MarkdownBody html={doc.html} />
          {showForm && (
            <aside className="lg:sticky lg:top-24">
              <p className="font-display font-bold text-lg mb-3">Book counselling</p>
              <LeadForm source={routePath} compact />
            </aside>
          )}
        </div>
      </Section>
    </>
  );
}
