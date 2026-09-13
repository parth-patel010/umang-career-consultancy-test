"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewOfferPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/admin/offers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: fd.get("slug"),
        title: fd.get("title"),
        description: fd.get("description"),
        image_url: fd.get("image_url") || null,
        status: fd.get("status"),
      }),
    });
    if (!res.ok) {
      setError("Could not save");
      return;
    }
    router.push("/admin/offers");
  }
  return (
    <div className="container-page py-10 max-w-xl">
      <h1 className="font-display text-2xl font-bold mb-6">New offer</h1>
      <form onSubmit={onSubmit} className="card p-6 space-y-4">
        <div><label className="label">Slug</label><input name="slug" className="input" required placeholder="free-counselling" /></div>
        <div><label className="label">Title</label><input name="title" className="input" required /></div>
        <div><label className="label">Description</label><textarea name="description" className="input !min-h-[120px]" required /></div>
        <div><label className="label">Image URL</label><input name="image_url" className="input" placeholder="https://..." /></div>
        <div>
          <label className="label">Status</label>
          <select name="status" className="input">
            <option value="draft">draft</option>
            <option value="published">published</option>
          </select>
        </div>
        {error && <p className="text-sm text-brand">{error}</p>}
        <button className="btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
}
