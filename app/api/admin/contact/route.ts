import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSql } from "@/lib/db";
import { SITE } from "@/lib/site";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const sql = getSql();
  if (!sql) {
    return NextResponse.json({
      phone: SITE.phone,
      email: SITE.email,
      address: SITE.fullAddress,
      whatsapp: SITE.whatsapp,
    });
  }
  const rows = await sql`SELECT * FROM contact_settings ORDER BY id ASC LIMIT 1`;
  return NextResponse.json(rows[0] || {
    phone: SITE.phone,
    email: SITE.email,
    address: SITE.fullAddress,
    whatsapp: SITE.whatsapp,
  });
}

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const sql = getSql();
  if (!sql) return NextResponse.json({ ok: true, note: "No DB" });
  await sql`
    INSERT INTO contact_settings (id, phone, email, address, whatsapp, updated_at)
    VALUES (1, ${String(body.phone || SITE.phone)}, ${String(body.email || SITE.email)},
      ${String(body.address || SITE.fullAddress)}, ${String(body.whatsapp || SITE.whatsapp)}, NOW())
    ON CONFLICT (id) DO UPDATE SET
      phone = EXCLUDED.phone,
      email = EXCLUDED.email,
      address = EXCLUDED.address,
      whatsapp = EXCLUDED.whatsapp,
      updated_at = NOW()
  `;
  return NextResponse.json({ ok: true });
}
