import { attachHomeProductMedia, fallbackHome } from "./content";

const directusUrl =
  process.env.DIRECTUS_URL ||
  process.env.NEXT_PUBLIC_DIRECTUS_URL ||
  "http://directus-rr2qeaoulsduu2aldec5sqse.2.25.185.14.sslip.io";
const token = process.env.DIRECTUS_STATIC_TOKEN;

async function readItems(collection, query = "") {
  if (!directusUrl || !token) {
    return null;
  }

  const url = `${directusUrl.replace(/\/$/, "")}/items/${collection}${query}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  return payload.data;
}

export async function getHomeContent() {
  const [homepage, stats, products] = await Promise.all([
    readItems("homepage", "?limit=1"),
    readItems("home_stats", "?sort=sort"),
    readItems("products", "?sort=sort&filter[featured][_eq]=true"),
  ]);

  const homeRecord = Array.isArray(homepage) ? homepage[0] : null;

  const homeProducts = products?.length ? products : fallbackHome.products;

  return {
    hero: homeRecord
      ? {
          eyebrow: homeRecord.hero_eyebrow || fallbackHome.hero.eyebrow,
          title: homeRecord.hero_title || fallbackHome.hero.title,
          text: homeRecord.hero_text || fallbackHome.hero.text,
          image: homeRecord.hero_image_url || fallbackHome.hero.image,
        }
      : fallbackHome.hero,
    stats: stats?.length ? stats : fallbackHome.stats,
    intro: homeRecord
      ? {
          title: homeRecord.products_title || fallbackHome.intro.title,
          text: homeRecord.products_text || fallbackHome.intro.text,
        }
      : fallbackHome.intro,
    products: homeProducts.map(attachHomeProductMedia),
  };
}

export async function createInquiry(fields) {
  if (!directusUrl) {
    return { ok: false };
  }

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `${directusUrl.replace(/\/$/, "")}/items/contact_inquiries`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(fields),
    },
  );

  return { ok: response.ok };
}
