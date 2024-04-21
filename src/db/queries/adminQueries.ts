import { users } from "../schema/users";
import { eq, name, sql } from "drizzle-orm";
import "server-only";
import { db } from "../db";
import { callback } from "../schema/requestcallback";

export async function getCallbacks() {
  return await db?.select().from(callback);
}
