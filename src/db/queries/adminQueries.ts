import "server-only";

import { db } from "../db";
import { callback, contactUs } from "../schema/formSchemas";
import { servicesSurvey } from "../schema/service";

export async function getCallbacks() {
  return await db?.select().from(callback);
}
export async function getContactUs() {
  return await db?.select().from(contactUs);
}

export async function allSurveyData() {
  return await db.select().from(servicesSurvey);
}
