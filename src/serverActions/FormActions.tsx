"use server";

import 'server-only';

import { z } from 'zod';

import { addUserCallbackRequest } from '@/db/queries/userQueries';
import { sanitizeHtmlUserInput } from '@/lib/utils';

type ActionResult = {
  type: null | "success" | "error";
  message?: string;
};

const NameSchema = z.string().min(2).max(50);
const EmailSchema = z.string().email();
const TelSchema = z.string().regex(/^\d{10}$/);

export async function aboutUsForm(
  currentState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const firstName = formData.get("fname");
  const lastName = formData.get("lname");
  const phoneNo = formData.get("phoneno");
  const emailId = formData.get("email");
  return {
    type: "success",
    message: ` ${firstName} ${lastName} ${phoneNo} ${emailId}`,
  };
}

export async function heroFormSubmit(
  currentState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const name = sanitizeHtmlUserInput(formData.get("name")?.toString() || "");
  const email = sanitizeHtmlUserInput(formData.get("email")?.toString() || "");
  const tel = sanitizeHtmlUserInput(formData.get("tel")?.toString() || "");

  if (!name || !email || !tel || name == "" || email == "" || tel == "")
    return {
      type: "error",
      message: "Invalid",
    };

  try {
    const validatedName = NameSchema.parse(name);
    const validatedEmail = EmailSchema.parse(email);
    const validatedTel = TelSchema.parse(tel);
    await addUserCallbackRequest(validatedName, validatedEmail, validatedTel);
  } catch (error) {
    return {
      type: "error",
      message: "Invalid",
    };
  }

  return {
    type: "success",
    message: "Submitted",
  };
}
