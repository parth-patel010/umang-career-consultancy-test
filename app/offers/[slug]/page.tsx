export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSql } from "@/lib/db";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

async function getOffer(slug: string) {
  const sql = getSql();
  if (!sql) {
    if (slug === "free-counselling") {
      return {
        slug,
        title: "Free counselling session",
        description: "Book a free counselling session with Umang Career Consultancy in Vadodara. Honest guidance on destinations, admissions, and visa readiness — no fake guarantees.",
        status: "published",
        image_url: null as string | null,
      };
    }
    return null;
  }
  const rows = await sql`SELECT * FROM offers WHERE slug = ${slug} AND status = 'published' LIMIT 1`;
  return rows[0] || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = await getOffer(slug);
  if (!offer) return { title: "Offer" };
  return { title: offer.title, description: String(offer.description).slice(0, 160) };
}

export default async function OfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = await getOffer(slug);
  if (!offer) notFound();
  return (
    <>
      <PageHero title={offer.title} crumbs={[{ name: "Offers", href: "/contact" }, { name: offer.title, href: `/offers/${slug}` }]} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="badge badge-gold mb-4">Limited offer</p>
            <p className="text-muted whitespace-pre-wrap">{offer.description}</p>
            <p className="mt-6 text-sm">Questions? Call <a className="text-brand font-semibold" href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a></p>
          </div>
          <LeadForm source={`offer:${slug}`} offerSlug={slug} />
        </div>
      </Section>
    </>
  );
}
