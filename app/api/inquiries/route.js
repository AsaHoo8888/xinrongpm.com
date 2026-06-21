import { NextResponse } from "next/server";
import { createPostgresInquiry } from "../../../lib/postgres";

function getFormValue(form, key) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function formatPhone(phone, phoneCode) {
  if (!phone) {
    return "";
  }

  if (!phoneCode || phone.startsWith(phoneCode)) {
    return phone;
  }

  return `${phoneCode} ${phone}`;
}

export async function POST(request) {
  const form = await request.formData();
  const phone = getFormValue(form, "phone");
  const phoneCode = getFormValue(form, "phone_code");
  const fields = {
    full_name: getFormValue(form, "full_name"),
    email: getFormValue(form, "email"),
    phone: formatPhone(phone, phoneCode),
    country: getFormValue(form, "country"),
    message: getFormValue(form, "message"),
    source_page: getFormValue(form, "source_page") || "/",
    product_title: getFormValue(form, "product_title"),
    submitted_at: new Date().toISOString(),
  };

  const result = await createPostgresInquiry(fields);
  const status = result.ok ? "sent" : "error";
  const sourcePage =
    typeof fields.source_page === "string" && fields.source_page.startsWith("/")
      ? fields.source_page
      : "/";

  return NextResponse.redirect(new URL(`${sourcePage}?inquiry=${status}`, request.url));
}
