import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const callback = mysqlTable("callback", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 10 }).notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});
