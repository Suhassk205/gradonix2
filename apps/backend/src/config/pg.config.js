import pgPromise from "pg-promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./env.config.js";

const pgp = pgPromise({
  // Optional: Query event logging (for debugging)
  query() {},
  error(err, e) {
    console.error("DB ERROR:", err);
    if (e.query) console.error("QUERY:", e.query);
  },
});

// Database connection config
const db = pgp({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  max: 10, // Connection pool size (adjust for production)
  idleTimeoutMillis: 30000, // Close idle connections after 30s
});

export { db, pgp };

