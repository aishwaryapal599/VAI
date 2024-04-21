"use server";

import 'server-only';

import { z } from 'zod';

import {
  addUserCallbackRequest,
  addUserContactUs,
} from '@/db/queries/userQueries';
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
  const firstName = sanitizeHtmlUserInput(
    formData.get("fname")?.toString() || "",
  );
  const lastName = sanitizeHtmlUserInput(
    formData.get("lname")?.toString() || "",
  );
  const phoneNo = sanitizeHtmlUserInput(
    formData.get("phoneno")?.toString() || "",
  );
  const emailId = sanitizeHtmlUserInput(
    formData.get("email")?.toString() || "",
  );

  if (!firstName || !lastName || !phoneNo || !emailId)
    return {
      type: "success",
      message: `Invalid Input`,
    };
  try {
    const validatedFirstName = NameSchema.parse(firstName);
    const validatedLastName = NameSchema.parse(lastName);
    const validatedEmail = EmailSchema.parse(emailId);
    const validatedPhone = TelSchema.parse(phoneNo);
    await addUserContactUs({
      email: validatedEmail,
      firstName: validatedFirstName,
      lastName: validatedLastName,
      phone: validatedPhone,
    });
  } catch (error) {
    return {
      type: "error",
      message: "Invalid",
    };
  }

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
    await addUserCallbackRequest({
      email: validatedEmail,
      name: validatedEmail,
      phone: validatedEmail,
    });
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
