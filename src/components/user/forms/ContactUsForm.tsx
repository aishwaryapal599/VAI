"use client";
import { useRef } from 'react';
import { useFormState } from 'react-dom';

import { toast } from 'sonner';

import FormSubmitButton from '@/components/FormSubmitButton';
import { aboutUsForm } from '@/serverActions/FormActions';

export default function ContactUsForm() {
  const initialState = { message: "", type: null };
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, fromAction] = useFormState(aboutUsForm, initialState);

  formState.type === "error" && toast.error(formState.message);
  formState.type === "success" && toast.success(formState.message);
  return (
    <form
      ref={formRef}
      className="mx-auto max-w-96 space-y-4 rounded-lg border border-gray-950/10 bg-slate-50 p-8 text-base font-semibold shadow-lg"
      action={async (formData) => {
        fromAction(formData);
        formRef.current?.reset();
      }}
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
      <FormSubmitButton>Contact us</FormSubmitButton>
    </form>
  );
}
