import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import LogoImage from "@/images/logo.svg";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-44 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            src={LogoImage}
            alt="Logo"
            priority
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
