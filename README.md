# Xinrongpm Homepage

Next.js homepage scaffold for Xinrongplas with Directus and PostgreSQL.

## Run locally

1. Copy environment values:

```bash
cp .env.example .env.local
```

2. Install dependencies:

```bash
npm install
```

3. Start Directus and PostgreSQL:

```bash
docker compose up -d
```

4. Start Next.js:

```bash
npm run dev
```

Next.js runs at `http://localhost:3000`. Directus runs at `http://localhost:8055`.

## Directus collections

The homepage works with built-in fallback content. To manage it in Directus, create these collections and set `DIRECTUS_STATIC_TOKEN` in `.env.local`.

- `homepage`: `hero_eyebrow`, `hero_title`, `hero_text`, `hero_image_url`, `products_title`, `products_text`
- `home_stats`: `sort`, `value`, `label`
- `products`: `sort`, `featured`, `name`, `tag`, `range`, `image`
- `contact_inquiries`: `full_name`, `email`, `phone`, `country`, `message`, `source_page`

The design references `/Users/asa/Downloads/xinrongpm.md` and `/Users/asa/Downloads/xinrongpm homepage.html`.
