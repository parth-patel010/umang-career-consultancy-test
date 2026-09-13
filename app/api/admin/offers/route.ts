import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSql } from "@/lib/db";
import { z } from "zod";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const sql = getSql();
  if (!sql) return NextResponse.json({ offers: [] });
  const rows = await sql`SELECT * FROM offers ORDER BY created_at DESC LIMIT 100`;
  return NextResponse.json({ offers: rows });
}

const offerSchema = z.object({
  slug: z.string().min(2).max(80),
  title: z.string().min(2).max(200),
  description: z.string().min(2).max(4000),
  image_url: z.string().url().optional().nullable().or(z.literal("")),
  status: z.enum(["draft", "published"]).default("draft"),
});

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = offerSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  const d = parsed.data;
  const sql = getSql();
  if (!sql) return NextResponse.json({ ok: true, note: "No DATABASE_URL — not persisted" });
  await sql`
    INSERT INTO offers (slug, title, description, image_url, status)
    VALUES (${d.slug}, ${d.title}, ${d.description}, ${d.image_url || null}, ${d.status})
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      image_url = EXCLUDED.image_url,
      status = EXCLUDED.status,
      updated_at = NOW()
  `;
  return NextResponse.json({ ok: true });
}
