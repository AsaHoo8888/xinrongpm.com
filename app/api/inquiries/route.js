import { NextResponse } from "next/server";
import { createInquiry } from "../../../lib/directus";

export async function POST(request) {
  const form = await request.formData();
  const fields = {
    full_name: form.get("full_name"),
    email: form.get("email"),
    phone: form.get("phone"),
    country: form.get("country"),
    message: form.get("message"),
    source_page: form.get("source_page") || "/",
  };

  const result = await createInquiry(fields);
  const status = result.ok || result.skipped ? "sent" : "error";
  const sourcePage =
    typeof fields.source_page === "string" && fields.source_page.startsWith("/")
      ? fields.source_page
      : "/";

  return NextResponse.redirect(new URL(`${sourcePage}?inquiry=${status}`, request.url));
}
