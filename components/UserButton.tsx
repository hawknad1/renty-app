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
import * as Dialog from "@radix-ui/react-dialog";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

function UserButton({ session }: { session: Session | null }) {
  // const isOpen = useStoreModal((state) => state.isOpen);
  // const onOpen = useStoreModal((state) => state.onOpen);

  // useEffect(() => {
  //   if (!isOpen) {
  //     onOpen();
  //   }
  // }, [isOpen, onOpen]);

  const handleGoogleSignIn = () => {
    signIn();
  };
  if (!session) return <Button onClick={handleGoogleSignIn}>Sign In</Button>;

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
