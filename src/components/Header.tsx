import { validateRequest } from "@/auth/validateRequest";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default async function Header() {
  const { user } = await validateRequest();

  return (
    <header className="sticky top-0 z-50 flex items-center gap-4 bg-gray-50/60 text-gray-900 shadow-xl backdrop-blur-3xl">
      <div className="container mx-auto flex grow items-center justify-between p-1 font-semibold">
        <Link className="text-4xl " href="/">
          LOGO
        </Link>
        <div className="flex items-center justify-between gap-4">
          <ul className="flex gap-4  ">
            <li>
              <Link
                className="text-sm transition-all duration-300 ease-in-out hover:text-indigo-500"
                href="/about"
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                className="text-sm transition-all duration-300 ease-in-out hover:text-indigo-500"
                href="/services"
              >
                Services
              </Link>
            </li> */}
            <li>
              <Link
                className="text-sm transition-all duration-300 ease-in-out hover:text-indigo-500"
                href="/contact-us"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
