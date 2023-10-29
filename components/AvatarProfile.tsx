import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarProfile() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default AvatarProfile;
