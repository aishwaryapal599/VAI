import { users } from "../schema/users";
import { eq, name, sql } from "drizzle-orm";
import "server-only";
import { db } from "../db";
import { callback } from "../schema/requestcallback";

export async function getCallbacks() {
  return await db?.select().from(callback);
}

export async function getUserType(userId: string) {
  return await db
    .select({ type: users.user_type })
    .from(users)
    .where(sql`${users.id} = ${userId}`);
}

// SELECT  users.user_type FROM users WHERE id = 'b1jap1489yzgu35'
