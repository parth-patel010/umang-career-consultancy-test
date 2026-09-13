import { NextResponse } from "next/server";
import { z } from "zod";
import { getSql } from "@/lib/db";

const schema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(8).max(30),
  email: z.string().email().optional().nullable().or(z.literal("")),
  message: z.string().max(2000).optional().nullable(),
  role: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  intake: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
  offer_slug: z.string().optional().nullable(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    const d = parsed.data;
    const sql = getSql();
    if (sql) {
      await sql`
        INSERT INTO leads (name, phone, email, message, role, country, intake, source, offer_slug, status)
        VALUES (
          ${d.name},
          ${d.phone},
          ${d.email || null},
          ${d.message || null},
          ${d.role || null},
          ${d.country || null},
          ${d.intake || null},
          ${d.source || "web"},
          ${d.offer_slug || null},
          ${"new"}
        )
      `;
    } else {
      console.log("[lead]", d);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
