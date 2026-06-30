"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="inline-flex items-center gap-2 rounded-sm border border-gold-champagne/40 px-4 py-2 text-sm text-gold-champagne transition hover:bg-gold-champagne/10"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  );
}
