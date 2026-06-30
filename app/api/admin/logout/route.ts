import { NextResponse } from "next/server";
import { adminCookie } from "@/lib/admin-auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  const cookie = adminCookie();
  response.cookies.set(cookie.name, "", { ...cookie.options, maxAge: 0 });
  return response;
}
