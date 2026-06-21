import { NextResponse } from "next/server";

function firstHeaderValue(value) {
  return value ? value.split(",")[0].trim() : "";
}

function isPublicIp(ip) {
  const octets = ip.split(".").map((part) => Number(part));

  if (octets.length !== 4 || octets.some((part) => !Number.isInteger(part))) {
    return false;
  }

  const [first, second] = octets;
  return (
    first !== 10 &&
    first !== 127 &&
    !(first === 172 && second >= 16 && second <= 31) &&
    !(first === 192 && second === 168)
  );
}

async function lookupCountry(ip) {
  if (!isPublicIp(ip)) {
    return "";
  }

  try {
    const response = await fetch(`https://ipapi.co/${ip}/country/`, {
      cache: "no-store",
      signal: AbortSignal.timeout(2000),
    });

    if (!response.ok) {
      return "";
    }

    const country = (await response.text()).trim().toUpperCase();
    return /^[A-Z]{2}$/.test(country) ? country : "";
  } catch {
    return "";
  }
}

export async function GET(request) {
  const headers = request.headers;
  const headerCountry = (
    headers.get("cf-ipcountry") ||
    headers.get("x-vercel-ip-country") ||
    headers.get("x-country-code") ||
    ""
  ).toUpperCase();

  const country =
    /^[A-Z]{2}$/.test(headerCountry)
      ? headerCountry
      : await lookupCountry(
          firstHeaderValue(
            headers.get("x-forwarded-for") ||
              headers.get("x-real-ip") ||
              headers.get("cf-connecting-ip") ||
              "",
          ),
        );

  return NextResponse.json(
    { country },
    {
      headers: {
        "Cache-Control": "private, no-store",
      },
    },
  );
}
