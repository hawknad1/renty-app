import Image from "next/image";
import HomeImage from "@/images/bg3.jpg";

function BannerCard() {
  return (
    <div className="relative h-[250px] sm:h-[200p] md:h-[300px] lg:h-[400px] xl:h-[450px]">
      <Image
        src={HomeImage}
        alt="Home Image"
        fill
        className="object-cover rounded-lg "
      />
    </div>
  );
}

export default BannerCard;
