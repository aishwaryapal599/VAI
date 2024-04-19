import type { MySql2Database } from "drizzle-orm/mysql2";
import { users } from "../schema/users";
import { eq, sql } from "drizzle-orm";

export async function createUser(
  db: MySql2Database<Record<string, never>> | null,
  userId: string,
  username: string,
  hashedPassword: string,
) {
  return await db
    ?.insert(users)
    .values({
      id: userId,
      username: username,
      hashed_password: hashedPassword,
    });
}

export async function getUserByUserName(
  username: string,
  db: MySql2Database<Record<string, never>> | null,
) {
  if (!db) return null;
  const user = db
    .select()
    .from(users)
    .where(eq(users.username, sql.placeholder(`username`)))
    .prepare();

  return await user.execute({ username: username });
}
