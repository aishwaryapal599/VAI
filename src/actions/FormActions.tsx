"use server";

type ActionResult = { message?: string };

export async function aboutUSForm(
  currentState: ActionResult,
  formData: FormData,
) {
  const firstName = formData.get("fname");
  const lastName = formData.get("lname");
  const phoneNo = formData.get("phoneno");
  const emailId = formData.get("email");

  console.log("🚀 ~ lastName:", lastName);
  console.log("🚀 ~ phoneNo:", phoneNo);
  console.log("🚀 ~ emailId:", emailId);
  console.log("🚀 ~ firstName:", firstName);
}
