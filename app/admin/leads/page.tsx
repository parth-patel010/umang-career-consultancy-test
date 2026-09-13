export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSql } from "@/lib/db";

export default async function LeadsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const sql = getSql();
  const leads = sql ? await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT 200` : [];
  return (
    <div className="container-page py-10">
      <h1 className="font-display text-2xl font-bold mb-6">Leads</h1>
      {!sql && <p className="text-muted mb-4">DATABASE_URL not set — showing empty list.</p>}
      <div className="overflow-x-auto card">
        <table className="w-full text-sm">
          <thead className="bg-mist text-left">
            <tr>
              <th className="p-3">When</th>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Source</th>
              <th className="p-3">Country</th>
              <th className="p-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {(leads as Record<string, unknown>[]).map((l, i) => (
              <tr key={String(l.id || i)} className="border-t border-line">
                <td className="p-3 whitespace-nowrap">{String(l.created_at || "")}</td>
                <td className="p-3">{String(l.name || "")}</td>
                <td className="p-3">{String(l.phone || "")}</td>
                <td className="p-3">{String(l.source || "")}</td>
                <td className="p-3">{String(l.country || "")}</td>
                <td className="p-3 max-w-xs truncate">{String(l.message || "")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
