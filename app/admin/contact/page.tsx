export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { SITE } from "@/lib/site";

export default async function AdminContactPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  return (
    <div className="container-page py-10 max-w-xl">
      <h1 className="font-display text-2xl font-bold mb-4">Contact settings</h1>
      <div className="card p-6 space-y-2 text-sm">
        <p><strong>Phone:</strong> {SITE.phone}</p>
        <p><strong>Email:</strong> {SITE.email}</p>
        <p><strong>WhatsApp:</strong> {SITE.whatsapp}</p>
        <p><strong>Address:</strong> {SITE.fullAddress}</p>
        <p className="text-muted mt-4">NAP is sourced from site config. Phone must remain +91 9173186109.</p>
      </div>
    </div>
  );
}
