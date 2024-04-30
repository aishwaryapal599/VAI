import "dotenv/config";

import { Config } from "drizzle-kit";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const dbCredentials = {
  host: DB_HOST as string,
  port: Number(DB_PORT),
  user: DB_USER as string,
  password: DB_PASSWORD as string,
  database: DB_NAME as string,
};

const drizzleConfig: Config = {
  schema: "./src/db/schema/",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials,
  verbose: true,
  strict: true,
};

export default drizzleConfig;
