"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    setLoading(false);
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.message || "Unable to sign in.");
      return;
    }

    router.push("/admin/resources");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-md rounded border border-white/10 bg-white/[0.04] p-6 shadow-dark">
      <label className="block text-left">
        <span className="mb-2 block text-sm font-semibold text-ivory">Admin Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-sm border border-white/10 bg-obsidian/70 px-4 py-3 text-ivory outline-none transition focus:border-gold/60"
          required
        />
      </label>
      {error && <p className="mt-3 text-left text-sm text-red-300">{error}</p>}
      <Button type="submit" disabled={loading} className="mt-6 w-full">
        {loading ? "Signing In..." : "Enter Portal"}
      </Button>
    </form>
  );
}
