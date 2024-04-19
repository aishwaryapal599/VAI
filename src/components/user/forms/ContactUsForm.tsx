"use client";

import { useFormState } from "react-dom";
import { Button } from "../../ui/button";
import { aboutUsForm } from "@/serverActions/FormActions";

export default function ContactUsForm() {
  const initialState = {
    message: "",
  };

  const [fromState, fromAction] = useFormState(aboutUsForm, initialState);

  return (
    <form
      className="mx-auto max-w-96 space-y-4 rounded-lg border border-gray-950/10 bg-slate-50 p-8 text-base font-semibold shadow-lg"
      action={fromAction}
    >
      <div className="grid w-full">
        <label> First Name: </label>
        <input
          className="rounded-lg border border-gray-950/10 p-2 "
          type="text"
          name="fname"
        />
      </div>
      <div className="grid w-full">
        <label> Last Name: </label>
        <input
          className="rounded-lg border border-gray-950/10 p-2 "
          type="text"
          name="lname"
        />
      </div>
      <div className="grid w-full">
        <label> Phone: </label>
        <input
          className="rounded-lg border border-gray-950/10 p-2 "
          type="text"
          name="phoneno"
        />
      </div>
      <div className="grid w-full">
        <label> Email ID: </label>
        <input
          className="rounded-lg border border-gray-950/10 p-2 "
          type="text"
          name="email"
        />
      </div>

      <Button className="rounded-lg border border-gray-950/10 p-2 ">
        Contact us
      </Button>
    </form>
  );
}
