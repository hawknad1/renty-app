import { footerHosting, footerSupport } from "@/constants";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="bg-[#EFF5F5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="">
            <h3 className="font-medium mb-2">Support</h3>
            <div className="flex flex-col gap-2">
              {footerSupport.map(({ label, href }) => (
                <Link
                  className="self-start text-zinc-700 hover:underline"
                  key={label}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Hosting</h3>
            <div className="flex flex-col gap-2">
              {footerHosting.map(({ label, href }) => (
                <Link
                  className="self-start text-zinc-700 hover:underline"
                  key={label}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Renty</h3>
            <div className="flex flex-col gap-2">
              {footerSupport.map(({ label, href }) => (
                <Link
                  className="text-zinc-700 self-start hover:underline"
                  key={label}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator className="bg-neutral-400/50 mt-10" />
        <div className="flex flex-col lg:flex-row items-center space-x-2 mt-8 text-zinc-700">
          <p>© 2023 Airbnb, Inc.</p>
          <div className="flex space-x-2">
            <Link href="/terms">· Terms </Link>
            <Link href="/terms">· Sitemap </Link>
            <Link href="/terms">· Privacy </Link>
            <Link href="/terms">· Your Privacy Choices </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
