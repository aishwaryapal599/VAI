import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import "dotenv/config";

export const dbConfig = {
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  port: Number(process.env.DB_PORT) as number,
};

const poolConnection = mysql.createPool({
  ...dbConfig,
  connectionLimit: 10,
});

export const db = drizzle(poolConnection);
