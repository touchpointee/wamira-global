"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteResourceButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function remove() {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setLoading(true);
    await fetch(`/api/admin/resources/${id}`, { method: "DELETE" });
    setLoading(false);
    router.refresh();
  }

  return (
    <button
      onClick={remove}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-sm border border-red-300/30 px-3 py-2 text-sm text-red-200 transition hover:bg-red-400/10"
    >
      <Trash2 className="h-4 w-4" />
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
