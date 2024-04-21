import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { createConnection } from "mysql2";
import { dbConfig } from "./db";

const connection = createConnection(dbConfig);

const db = drizzle(connection);
const migrateDB = async () => {
  try {
    console.log("Migration Started");
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("migration Completed");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Connection Closed");
    await connection.end();
  }
};

migrateDB();
