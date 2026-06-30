import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "wamira_admin_session";

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "wamira-development-secret";
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createAdminSessionValue() {
  const value = `admin:${Date.now()}`;
  return `${value}.${sign(value)}`;
}

export function isValidAdminSession(session?: string) {
  if (!session) return false;
  const [value, signature] = session.split(".");
  if (!value || !signature) return false;
  const expected = sign(value);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (signatureBuffer.length !== expectedBuffer.length) return false;
  return timingSafeEqual(signatureBuffer, expectedBuffer);
}

export function isAdminAuthenticated() {
  return isValidAdminSession(cookies().get(COOKIE_NAME)?.value);
}

export function adminCookie() {
  return {
    name: COOKIE_NAME,
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8
    }
  };
}
