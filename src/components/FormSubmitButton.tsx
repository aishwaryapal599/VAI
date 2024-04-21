"use client";

import { useFormStatus } from 'react-dom';

import { LoaderCircle } from 'lucide-react';

import { Button } from './ui/button';

export default function FormSubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="w-full gap-1"
    >
      {children}
      {pending && <LoaderCircle className="h-4 w-4 animate-spin" />}
    </Button>
  );
}
