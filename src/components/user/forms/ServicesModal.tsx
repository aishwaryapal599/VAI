"use client";
import React, { useRef } from "react";
import { useFormState } from "react-dom";

import { Divide } from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { surveyFormSubmit } from "@/serverActions/FormActions";

type Questions = (
  | {
      qno: number;
      question: string;
      type: string;
      options: string[];
    }
  | {
      qno: number;
      question: string;
      type: string;
      options?: undefined;
    }
)[];

export default function ServicesModal({ questions }: { questions: Questions }) {
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { type: null, message: "" };
  const [formState, fromAction] = useFormState(surveyFormSubmit, initialState);

  formState.type === "error" && toast.error(formState.message);
  formState.type === "success" && toast.success(formState.message);
  return (
    <Dialog>
      <DialogTrigger className="rounded-full bg-indigo-700 p-4 font-semibold text-indigo-50 shadow-lg backdrop-blur-3xl hover:bg-indigo-50/75">
        Sample format for data Collection
      </DialogTrigger>
      <DialogContent className="h-5/6 max-w-2xl overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="mb-4  text-3xl">
            Data Collection Form
          </DialogTitle>
          <DialogDescription>
            <form
              ref={formRef}
              action={async (formData) => {
                fromAction(formData);
                formRef.current?.reset();
              }}
            >
              <input type="hidden" name="pathname" value={pathname} />
              <div className="flex flex-col  rounded-lg ">
                <div className="mb-4 space-y-2">
                  <label className="flex text-base">Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Write your name"
                    className=" w-full rounded-lg border-2 border-gray-300 p-2"
                  />
                </div>
                <div className="mb-4 space-y-2">
                  <label className="flex text-base">Organization Name</label>
                  <input
                    name="organizationName"
                    type="text"
                    placeholder="Write your organization name"
                    className=" w-full rounded-lg border-2 border-gray-300 p-2"
                  />
                </div>
                <div className="mb-4 space-y-2">
                  <label className="flex text-base">Organization email</label>
                  <input
                    name="organizationEmail"
                    type="email"
                    placeholder="Write your organization email"
                    className=" w-full rounded-lg border-2 border-gray-300 p-2"
                  />
                </div>
                <div className="mb-4 space-y-2">
                  <label className="flex text-base">Organization phone</label>
                  <input
                    name="organizationPhone"
                    type="tel"
                    placeholder="Write your organization phone"
                    className=" w-full rounded-lg border-2 border-gray-300 p-2"
                  />
                </div>
                <Divide className="my-4 h-px w-full bg-gray-300" />

                {questions.map((item) => (
                  <div key={item.qno} className="mb-4 space-y-2">
                    <label className="flex text-base">{item.question}</label>
                    {item.type === "select" ? (
                      <select
                        className=" w-full rounded-lg border-2 border-gray-300 p-2"
                        name={item.question}
                      >
                        <option disabled selected value="">
                          Select an option
                        </option>
                        {item.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        name={item.question}
                        type="text"
                        placeholder="Write your answer"
                        className=" w-full rounded-lg border-2 border-gray-300 p-2"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-indigo-50 transition-all hover:bg-blue-500">
                Submit
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
