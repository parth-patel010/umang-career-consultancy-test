"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!res.ok) {
      setError("Invalid password");
      return;
    }
    router.push("/admin/leads");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-mist p-4">
      <form onSubmit={onSubmit} className="card p-6 w-full max-w-sm space-y-4">
        <h1 className="font-display text-xl font-bold">Admin login</h1>
        <div>
          <label className="label" htmlFor="password">Password</label>
          <input id="password" type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="text-sm text-brand">{error}</p>}
        <button className="btn-primary w-full" disabled={loading}>{loading ? "…" : "Sign in"}</button>
      </form>
    </div>
  );
}
