"use client";

import { logout } from '@/serverActions/Authentication';

import { DropdownMenuItem } from '../ui/dropdown-menu';

export default function LogoutButton() {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={async () => {
        logout();
      }}
    >
      Sign out
    </DropdownMenuItem>
  );
}
