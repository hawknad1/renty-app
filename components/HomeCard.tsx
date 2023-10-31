import Image from "next/image";
import HomeImage from "../images/bg3.jpg";

function HomeCard() {
  return (
    <div className=" p-4 ">
      <Image
        src={HomeImage}
        alt="Home Image"
        width={480}
        height={300}
        className="w-full h-[450px] object-cover rounded-lg"
      />
    </div>
  );
}

export default HomeCard;
