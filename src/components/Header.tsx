import { validateRequest } from "@/auth/validateRequest";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { Button } from "./ui/button";
import { CircleUserRound, LibrarySquare } from "lucide-react";
import Logo from "./Logo";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenu,
} from "./ui/dropdown-menu";
import Marquee from "react-fast-marquee";

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
                      {/* <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
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

        <div className="w-full border border-t border-t-gray-200">
          {/* <Marquee className="text-sm text-indigo-600">
            Data-Driven Decisions Start Here: Trusted Market Research for
            Strategic Growth | Navigate Your Market with Confidence: Tailored
            Research Solutions for Every Challenge | Illuminate Your Path to
            Success: Actionable Insights from Industry-Leading Market Research |
            Empowering Your Business with Precision: Customized Market Research
            Solutions | Transform Data into Strategy: Market Research Excellence
            for Sustainable Growth | Insightful Solutions, Tangible Results:
            Elevate Your Business with Our Market Research Expertise | Navigate
            Market Complexity: Strategic Insights Tailored to Your Business
            Goals | Harness the Power of Knowledge: Market Research Excellence
            for Competitive Advantage | From Data to Decisions: Your Trusted
            Partner in Market Intelligence | Discover, Analyze, Succeed: Unleash
            the Potential of Market Research for Your Business
          </Marquee> */}
        </div>
      </header>
    </>
  );
}
