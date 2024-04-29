"use server";

import "server-only";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import {
  addUserCallbackRequest,
  addUserContactUs,
  saveSurveyData,
} from "@/db/queries/userQueries";
import { sanitizeHtmlUserInput } from "@/lib/utils";

type ActionResult = {
  type: null | "success" | "error";
  message?: string;
};

const NameSchema = z.string().min(2).max(50);
const EmailSchema = z.string().email();
const TelSchema = z.string().regex(/^\d{10}$/);

export async function contactUsFormSubmit(
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
  revalidatePath("/dashboard/contact-us");
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
      name: validatedName,
      phone: validatedTel,
    });
  } catch (error) {
    return {
      type: "error",
      message: "Invalid",
    };
  }

  revalidatePath("/dashboard/callback");

  return {
    type: "success",
    message: "Submitted",
  };
}

export async function surveyFormSubmit(
  currentState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const formDataObject: { [key: string]: string } = {};

  for (const [key, value] of formData.entries()) {
    formDataObject[key] = sanitizeHtmlUserInput(value.toString() || "");
  }

  const {
    fullName,
    organizationName,
    organizationEmail,
    organizationPhone,
    pathname,
    ...jsonData
  } = formDataObject;

  if (
    !fullName ||
    !organizationName ||
    !organizationEmail ||
    !organizationPhone ||
    !pathname ||
    !jsonData
  )
    return {
      type: "error",
      message: "Invalid",
    };

  try {
    saveSurveyData({
      fullName: fullName,
      organizationName: organizationName,
      organizationEmail: organizationEmail,
      organizationPhone: organizationPhone,
      pathname: pathname,
      surveyData: JSON.stringify(jsonData),
    });
  } catch (error) {
    return {
      type: "error",
      message: "Invalid",
    };
  }

  return {
    type: "success",
    message: "thanks for your taking time to fill the survey",
  };
}
