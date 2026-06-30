import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/AdminLoginForm";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  if (isAdminAuthenticated()) redirect("/admin/resources");

  return (
    <section className="min-h-screen bg-luxury-radial px-5 pb-20 pt-36 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Wamira Global</p>
      <h1 className="mt-4 font-serif text-5xl text-ivory md:text-6xl">Admin Portal</h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">Sign in to manage resource articles and public insights.</p>
      <AdminLoginForm />
    </section>
  );
}
