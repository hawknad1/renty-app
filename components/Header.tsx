"use client";

import Link from "next/link";
import Logo from "./Logo";
import { BellIcon } from "lucide-react";
import AvatarProfile from "./AvatarProfile";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ModeToggle";

function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <nav className="flex items-center max-w-7xl mx-auto justify-between p-2">
        <Logo />
        <div className="hidden md:inline-flex p-4 gap-10 ">
          {navLinks.map(({ label, path }) => {
            const isActive =
              (pathname.includes(path) && path.length > 1) || pathname === path;
            return (
              <Link
                href={path}
                key={label}
                className={`text-sm font-medium flex-col items-center`}
              >
                {label}
                {isActive && <Separator className="bg-black h-0.5 mt-0.5 " />}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <BellIcon />

          <AvatarProfile />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
