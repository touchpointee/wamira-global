import { NextResponse } from "next/server";
import { adminCookie, createAdminSessionValue } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }));
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return NextResponse.json(
      { message: "Admin password is not configured on the server." },
      { status: 500 }
    );
  }

  if (password !== expectedPassword) {
    return NextResponse.json({ message: "Invalid admin password." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  const cookie = adminCookie();
  response.cookies.set(cookie.name, createAdminSessionValue(), cookie.options);
  return response;
}
