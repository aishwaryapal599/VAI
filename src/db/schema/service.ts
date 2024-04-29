import {
  datetime,
  int,
  json,
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

export const servicesSurvey = mysqlTable("services_survey", {
  id: int("id").primaryKey().unique().autoincrement(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  organizationName: varchar("organization_name", { length: 255 }).notNull(),
  organizationEmail: varchar("organization_email", { length: 255 }).notNull(),
  organizationPhone: varchar("organization_phone", { length: 255 }).notNull(),
  pathname: varchar("pathname", { length: 255 }).notNull(),
  surveyData: json("survey_data").notNull(),
  createdAt: datetime("created_at").notNull().default(new Date()),
});
