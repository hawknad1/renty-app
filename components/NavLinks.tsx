"use client";

import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

function NavLinks() {
  const pathname = usePathname();
  return (
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
  );
}

export default NavLinks;
