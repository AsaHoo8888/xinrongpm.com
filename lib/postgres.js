import { existsSync, readFileSync } from "fs";
import pg from "pg";

const { Pool } = pg;

let pool;

function readDatabaseUrlFromEnvFile() {
  for (const file of [".env.production", ".env.local", ".env"]) {
    if (!existsSync(file)) {
      continue;
    }

    const line = readFileSync(file, "utf8")
      .split(/\r?\n/)
      .find((entry) => entry.startsWith("DATABASE_URL="));

    if (line) {
      return line.slice("DATABASE_URL=".length).replace(/^["']|["']$/g, "");
    }
  }

  return "";
}

function getPool() {
  const databaseUrl = process.env.DATABASE_URL || readDatabaseUrlFromEnvFile();

  if (!databaseUrl) {
    return null;
  }

  if (!pool) {
    pool = new Pool({
      connectionString: databaseUrl,
    });
  }

  return pool;
}

export async function createPostgresInquiry(fields) {
  const db = getPool();

  if (!db) {
    return { ok: false };
  }

  try {
    await db.query(
      `INSERT INTO contact_inquiries
        (submitted_at, full_name, email, phone, message, country)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        fields.submitted_at,
        fields.full_name,
        fields.email,
        fields.phone || null,
        fields.message,
        fields.country || null,
      ],
    );

    return { ok: true };
  } catch (error) {
    console.error("PostgreSQL inquiry insert failed:", error.message);
    return { ok: false };
  }
}
