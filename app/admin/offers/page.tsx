export const dynamic = "force-dynamic";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSql } from "@/lib/db";

export default async function OffersAdminPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const sql = getSql();
  const offers = sql ? await sql`SELECT * FROM offers ORDER BY created_at DESC LIMIT 100` : [];
  return (
    <div className="container-page py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold">Offers</h1>
        <Link href="/admin/offers/new" className="btn-primary !min-h-10 text-sm">New offer</Link>
      </div>
      <ul className="space-y-3">
        {(offers as Record<string, unknown>[]).map((o, i) => (
          <li key={String(o.id || i)} className="card p-4 flex justify-between gap-4">
            <div>
              <p className="font-semibold">{String(o.title)}</p>
              <p className="text-xs text-muted">/{String(o.slug)} · {String(o.status)}</p>
            </div>
            <Link className="text-sm text-brand" href={`/offers/${o.slug}`}>View</Link>
          </li>
        ))}
        {!offers.length && <p className="text-muted">No offers yet.</p>}
      </ul>
    </div>
  );
}
