import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';

import { validateRequest } from '@/auth/validateRequest';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Logo from './Logo';
import LogoutButton from './LogoutButton';

export default async function Header() {
  const { user } = await validateRequest();

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col items-center  bg-gray-50/60 text-gray-900 shadow-xl backdrop-blur-3xl">
        <div className="flex w-full justify-between gap-4">
          <div className="container mx-auto flex grow items-center justify-between p-1 font-semibold">
            <Link className="text-4xl " href="/">
              <Logo />
            </Link>
            <div className="flex items-center justify-between gap-4">
              <ul className="flex items-center  gap-4">
                <li>
                  <Link
                    className="text-sm transition-all duration-300 ease-in-out hover:text-indigo-500"
                    href="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-sm transition-all duration-300 ease-in-out hover:text-indigo-500"
                    href="/contact-us"
                  >
                    Contact
                  </Link>
                </li>

                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <CircleUserRound />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem> */}
                      <DropdownMenuItem>
                        <LogoutButton />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <li>
                      <Link href="/signup">
                        <Button variant={"secondary"}>Sign Up</Button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signin">
                        <Button>Sign In</Button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full border border-t border-t-gray-200"></div>
      </header>
    </>
  );
}
