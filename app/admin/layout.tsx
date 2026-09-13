export const dynamic = "force-dynamic";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/auth";
import { LogoutButton } from "@/components/admin/LogoutButton";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const ok = await isAdminAuthenticated();
  return (
    <div className="min-h-screen bg-mist">
      {ok && (
        <nav className="border-b border-line bg-white">
          <div className="container-page flex flex-wrap gap-4 h-14 items-center text-sm font-semibold">
            <Link href="/admin/leads">Leads</Link>
            <Link href="/admin/offers">Offers</Link>
            <Link href="/admin/contact">Contact</Link>
            <LogoutButton />
            <Link href="/" className="text-brand">View site</Link>
          </div>
        </nav>
      )}
      {children}
    </div>
  );
}
