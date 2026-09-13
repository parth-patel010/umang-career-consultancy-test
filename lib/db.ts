import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  message: string | null;
  role: string | null;
  country: string | null;
  intake: string | null;
  source: string;
  offer_slug: string | null;
  status: string;
  created_at: string;
};

export type ContactSettings = {
  id: number;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  updated_at: string;
};

export type Offer = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image_url: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};
