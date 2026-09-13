import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RESOURCES } from "@/lib/site";
export const metadata = { title: "Blog & Guides" };
export default function Page() {
  return (
    <>
      <PageHero title="Blog & Guides" subtitle="Educational resources for students and parents." crumbs={[{ name: "Blog", href: "/blog" }]} />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {RESOURCES.map((r) => (
            <Link key={r.href} href={r.href} className="card p-5 block">
              <p className="font-display font-bold text-lg">{r.title}</p>
              <p className="mt-2 text-sm text-muted">{r.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
