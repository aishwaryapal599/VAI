"use client";

import { Button } from "@/components/ui/button";
import { heroFormSubmit } from "@/serverActions/FormActions";
import { useFormState, useFormStatus } from "react-dom";
import FormErrorMessage from "./FormErrorMessage";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="w-full"
    >
      Request Callback
      {pending && <LoaderCircle className="h-4 w-4 animate-spin" />}
    </Button>
  );
}

export default function HeroForm() {
  const initialState = {
    type: null,
    message: "",
  };
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, fromAction] = useFormState(heroFormSubmit, initialState);
  formState.type === "error" && toast.error(formState.message);
  formState.type === "success" && toast.success(formState.message);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formRef.current?.reset();
        fromAction(formData);
      }}
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
        <SubmitButton />
      </div>
    </form>
  );
}
