import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL missing — skip migrate");
  process.exit(1);
}
const sql = neon(url);
const migration = readFileSync(resolve(__dirname, "../drizzle/001_init.sql"), "utf8");
// neon serverless runs one statement; split carefully
const parts = migration
  .split(/;\s*\n/)
  .map((s) => s.trim())
  .filter((s) => s && !s.startsWith("--"));
for (const part of parts) {
  await sql.query(part.endsWith(";") ? part : part + ";");
  console.log("ok:", part.slice(0, 60).replace(/\n/g, " "));
}
console.log("Migration complete");
