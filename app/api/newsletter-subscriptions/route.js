import { NextResponse } from "next/server";
import { createNewsletterSubscription } from "../../../lib/directus";

function getFormValue(form, key) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  const form = await request.formData();
  const email = getFormValue(form, "email").toLowerCase();
  const sourcePage = getFormValue(form, "source_page") || "/news";
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const result = isValidEmail
    ? await createNewsletterSubscription({
        email,
        source_page: sourcePage,
        submitted_at: new Date().toISOString(),
      })
    : { ok: false };
  const status = result.ok ? "subscribed" : "error";
  const redirectPath =
    typeof sourcePage === "string" && sourcePage.startsWith("/")
      ? sourcePage
      : "/news";
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") || "http";
  const origin = host ? `${protocol}://${host}` : request.url;

  return NextResponse.redirect(new URL(`${redirectPath}?newsletter=${status}`, origin));
}
