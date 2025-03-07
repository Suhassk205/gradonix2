import { config } from "dotenv";
import { exit } from "node:process";

const envCon = config({ path: ".env" });

const expectedEnvs = [
  "PORT",
  "NODE_ENV",
  "CLIENT_URL",
  "DB_USER",
  "DB_HOST",
  "DB_DATABASE",
  "DB_PASSWORD",
  "DB_PORT",
  "MAIL_SERVICE_EMAIL",
  "MAIL_SERVICE_PASSWORD",
  "JWT_SECRET",
];

export const {
  PORT,
  NODE_ENV,
  SERVER_URL,
  CLIENT_URL,
  DB_USER,
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_PORT,
  MAIL_SERVICE_EMAIL,
  MAIL_SERVICE_PASSWORD,
  JWT_SECRET,
  ANTHROPIC_API_KEY,
} = envCon.parsed;

export const checkEnvs = () => {
  const cpy = [...expectedEnvs];
  Object.entries(envCon.parsed).forEach(([key, value]) => {
    if (cpy.includes(key)) cpy.splice(cpy.indexOf(key), 1);
  });
  if (cpy.length > 0) {
    console.log("some env vars are missing:");
    console.log(cpy);
    console.log("terminating process...");
    exit(1);
  }
  console.log("all env vars checked...");
};
