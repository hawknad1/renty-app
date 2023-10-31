"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Session } from "next-auth";
import AvatarProfile from "./AvatarProfile";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

function UserButton({ session }: { session: Session | null }) {
  if (!session) return <Button onClick={() => signIn()}>Sign In</Button>;
  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AvatarProfile
            image={session?.user?.image}
            name={session?.user?.name}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}

export default UserButton;
