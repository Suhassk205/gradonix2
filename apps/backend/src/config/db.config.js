import { db } from "./pg.config.js";

export const DBinit = async () => {
  try {
    const accountsTable = `
      CREATE TABLE IF NOT EXISTS accounts (
        account_id VARCHAR(24) PRIMARY KEY UNIQUE NOT NULL,
        username VARCHAR(64) UNIQUE NOT NULL,
        email VARCHAR(320) UNIQUE NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_at VARCHAR(64) NOT NULL,
        account_type VARCHAR(32) NOT NULL DEFAULT 'CLIENT'
      );`;
    await db.query(accountsTable);
    console.log(" \u2713 Database initialized");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};
