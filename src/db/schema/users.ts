import { mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";

//user id should be varchar 255

export const userRoleEnums = mysqlEnum("role", ["user", "admin"]);

export const users = mysqlTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  username: varchar("username", { length: 255 }).unique().notNull(),
  first_name: varchar("first_name", { length: 255 }).notNull(),
  last_name: varchar("last_name", { length: 255 }).notNull(),
  hashed_password: varchar("hashed_password", { length: 255 }).notNull(),
  role: userRoleEnums.notNull().default("user"),
});
