import "server-only";

import { sql } from "drizzle-orm";

import { db } from "../db";
import { callback, contactUs } from "../schema/formSchemas";
import { users } from "../schema/users";

export async function getCallbacks() {
  return await db?.select().from(callback);
}
export async function getContactUs() {
  return await db?.select().from(contactUs);
}

export async function getUserType(userId: string) {
  return await db
    .select({ type: users.user_type })
    .from(users)
    .where(sql`${users.id} = ${userId}`);
}
