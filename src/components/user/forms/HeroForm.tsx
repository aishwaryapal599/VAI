"use client";

import { Button } from "@/components/ui/button";
import { heroFormSubmit } from "@/serverActions/FormActions";
import { useFormState } from "react-dom";
import FormErrorMessage from "./FormErrorMessage";

export default function HeroForm() {
  const initialState = {
    message: "",
  };

  const [fromState, fromAction] = useFormState(heroFormSubmit, initialState);
  return (
    <form
      action={fromAction}
      className="min-w-96 space-y-4 rounded-lg bg-slate-50/45 p-8 text-left text-slate-950 shadow-lg  backdrop-blur-2xl"
    >
      <h1 className="text-xl font-semibold">Request Callback</h1>
      <div className="grid">
        <label>Name</label>
        <input
          name="name"
          className="border-1 rounded-lg border bg-slate-50/60 p-2 ring-gray-50"
          type="text"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="grid">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="border-1 rounded-lg border bg-slate-50/60 p-2 ring-gray-50"
          placeholder="Enter Your email id"
        />
      </div>
      <div className="grid">
        <label>Phone No</label>
        <input
          type="tel"
          name="tel"
          className="border-1 rounded-lg border bg-slate-50/60 p-2 ring-gray-50"
          placeholder="Enter Your Phone No"
        />
      </div>

      <div className="flex justify-end">
        <Button className="w-full">Request Callback</Button>
      </div>
      <FormErrorMessage message={fromState.message} />
    </form>
  );
}
