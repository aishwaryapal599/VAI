import {
  datetime,
  int,
  longtext,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";

export const services = mysqlTable("services", {
  id: int("id").primaryKey().unique().autoincrement(),
  title: varchar("title", { length: 255 }).unique().notNull(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  bannerImage: varchar("banner_image", { length: 255 }).notNull(),
  desc: longtext("desc").notNull(),
  expiresAt: datetime("expires_at").notNull(),
});
