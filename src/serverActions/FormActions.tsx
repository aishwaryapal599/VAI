"use server";

type ActionResult = { message?: string };

export async function aboutUsForm(
  currentState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const firstName = formData.get("fname");
  const lastName = formData.get("lname");
  const phoneNo = formData.get("phoneno");
  const emailId = formData.get("email");
  return { message: ` ${firstName} ${lastName} ${phoneNo} ${emailId}` };
}
