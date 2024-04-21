import { users } from "../schema/users";
import { eq, sql } from "drizzle-orm";
import "server-only";
import { db } from "../db";
import { callback } from "../schema/requestcallback";

export async function createUser(
  userId: string,
  username: string,
  hashedPassword: string,
) {
  return await db?.insert(users).values({
    id: userId,
    username: username,
    hashed_password: hashedPassword,
  });
}

export async function getUserByUserName(username: string) {
  if (!db) return null;
  const user = db
    .select()
    .from(users)
    .where(eq(users.username, sql.placeholder(`username`)))
    .prepare();

  return await user.execute({ username: username });
}

export async function addUserCallbackRequest(
  name: string,
  email: string,
  phone: string,
) {
  return await db?.insert(callback).values({
    name: name,
    email: email,
    phone: phone,
  });
}
