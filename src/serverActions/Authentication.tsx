"use server";
import "server-only";

import bcrypt from "bcrypt";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { lucia } from "@/auth/auth";
import { validateRequest } from "@/auth/validateRequest";
import { createUser, getUserByUserName } from "@/db/queries/userQueries";

type ActionResult = { message?: string };
const saltRounds = 10;

export async function signup(
  currentState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const username = formData.get("username")?.toString().toLowerCase() || "";
  const password = formData.get("password")?.toString() || "";
  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";

  if (!username || !password || !firstName || !lastName)
    return { message: "Username & Password Required" };
  if (testUserName(username)) return { message: "Invalid username" };
  if (testPassword(password)) return { message: "Invalid password" };

  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  // const hashedPassword = await new Argon2id().hash(password);
  const existingUser = await getUserByUserName(username);
  if (existingUser && existingUser.length > 0)
    return { message: "Username is already taken." };

  const userId = generateId(15);

  createUser({
    userId: userId,
    username: username,
    hashedPassword: hashedPassword,
    firstName: firstName,
    lastName: lastName,
  });

  return redirect(`/signin`);
}

export async function signin(
  currentState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const username = formData.get("username")?.toString().toLowerCase() || "";
  const password = formData.get("password")?.toString() || "";

  if (!username || !password)
    return { message: "Username & Password Required" };
  if (testUserName(username)) return { message: "Invalid username" };
  if (testPassword(password)) return { message: "Invalid password" };

  const existingUser = await getUserByUserName(username);

  // NOTE:
  // Returning immediately allows malicious actors to figure out valid usernames from response times,
  // allowing them to only focus on guessing passwords in brute-force attacks.
  // As a preventive measure, you may want to hash passwords even for invalid usernames.
  // However, valid usernames can be already be revealed with the signup page among other methods.
  // It will also be much more resource intensive.
  // Since protecting against this is non-trivial,
  // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
  // If usernames are public, you may outright tell the user that the username is invalid.

  if (!existingUser || existingUser.length === 0)
    return { message: "Incorrect username or password" };

  const validPassword = bcrypt.compareSync(
    password,
    existingUser[0].hashed_password,
  );

  // const validPassword = await new Argon2id().verify(existingUser[0].hashed_password, password);

  if (!validPassword) return { message: "Incorrect username or password" };

  const session = await lucia.createSession(existingUser[0].id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/");
}

export async function logout(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) return { message: "Unauthorized" };

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/");
}

function testUserName(username: FormDataEntryValue) {
  return (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  );
}

function testPassword(password: FormDataEntryValue) {
  return (
    typeof password !== "string" || password.length < 6 || password.length > 255
  );
}
