"use client";

import { useFormState } from "react-dom";

import Link from "next/link";

import { signup } from "@/serverActions/Authentication";

import FormErrorMessage from "./FormErrorMessage";

export default function SignupForm() {
  const initialState = {
    message: "",
  };
  const [fromState, fromAction] = useFormState(signup, initialState);

  return (
    <form className=" grid grid-flow-row space-y-5 text-xl" action={fromAction}>
      <h1 className="text-3xl font-semibold">Create an account</h1>
      <label htmlFor="username">
        First Name:
        <input
          className="ring-indigo-700/border-indigo-400 w-full rounded-md border-indigo-400 px-3 py-1.5 text-2xl ring-2 "
          name="firstName"
          id="username"
        />
      </label>
      <label htmlFor="username">
        Last Name:
        <input
          className="ring-indigo-700/border-indigo-400 w-full rounded-md border-indigo-400 px-3 py-1.5 text-2xl ring-2 "
          name="lastName"
          id="username"
        />
      </label>
      <label htmlFor="username">
        Username:
        <input
          className="ring-indigo-700/border-indigo-400 w-full rounded-md border-indigo-400 px-3 py-1.5 text-2xl ring-2 "
          name="username"
          id="username"
        />
      </label>

      <label htmlFor="password">
        Password:
        <input
          className="ring-indigo-700/border-indigo-400 w-full rounded-md border-indigo-400 px-3 py-1.5 text-2xl ring-2 "
          type="password"
          name="password"
          id="password"
        />
      </label>

      <div className="flex justify-end">
        <Link className=" text-base  hover:text-indigo-700" href={"/signin"}>
          Already Have An Account?
        </Link>
      </div>

      <button className="rounded-md bg-indigo-600 px-4 py-2 font-semibold text-indigo-50 transition-all hover:bg-indigo-500">
        Continue
      </button>

      <FormErrorMessage message={fromState?.message || ""} />
    </form>
  );
}
