"use client";
import { logout } from "@/actions/Authentication";
import React from "react";

type LogoutButtonProps = {
  className?: string;
};

export default function LogoutButton({ className = "" }: LogoutButtonProps) {
  return (
    <button
      onClick={async () => {
        logout();
      }}
      className={`${className}`}
    >
      Sign out
    </button>
  );
}
