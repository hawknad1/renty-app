import Logo from "./Logo";
import { BellIcon } from "lucide-react";
import AvatarProfile from "./AvatarProfile";
import { ModeToggle } from "./ModeToggle";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Button } from "./ui/button";
import NavLinks from "./NavLinks";
import UserButton from "./UserButton";

async function Header() {
  const session = await getServerSession(authOptions);
  return (
    
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <nav className="flex items-center max-w-7xl mx-auto justify-between p-2">
          <Logo />
          <NavLinks />
          <div className="flex items-center gap-5">
            {session && <BellIcon />}
            <UserButton session={session} />
            <ModeToggle />
          </div>
        </nav>
      </header>
  );
}

export default Header;
