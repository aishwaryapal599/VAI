import "server-only";

import { eq, sql } from "drizzle-orm";

import { db } from "../db";
import { callback, contactUs } from "../schema/formSchemas";
import { servicesSurvey } from "../schema/service";
import { users } from "../schema/users";

export async function createUser({
  userId,
  username,
  hashedPassword,
  firstName,
  lastName,
}: {
  userId: string;
  username: string;
  hashedPassword: string;
  firstName: string;
  lastName: string;
}) {
  return await db.insert(users).values({
    first_name: firstName,
    last_name: lastName,
    id: userId,
    username: username,
    hashed_password: hashedPassword,
  });
}

export async function getUserByUserName(username: string) {
  const user = db
    .select()
    .from(users)
    .where(eq(users.username, sql.placeholder(`username`)))
    .prepare();

  return await user.execute({ username: username });
}

export async function addUserCallbackRequest({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) {
  return await db
    .insert(callback)
    .values({ name: name, email: email, phone: phone });
}

export async function addUserContactUs({
  firstName,
  lastName,
  email,
  phone,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  return await db.insert(contactUs).values({
    email: email,
    first_name: firstName,
    last_name: lastName,
    phone: phone,
  });
}

export async function saveSurveyData({
  fullName,
  organizationName,
  organizationEmail,
  organizationPhone,
  pathname,
  surveyData,
}: {
  fullName: string;
  organizationName: string;
  organizationEmail: string;
  organizationPhone: string;
  pathname: string;
  surveyData: string;
}) {
  return await db.insert(servicesSurvey).values({
    fullName: fullName,
    organizationName: organizationName,
    organizationEmail: organizationEmail,
    organizationPhone: organizationPhone,
    pathname: pathname,
    surveyData: surveyData,
  });
}
