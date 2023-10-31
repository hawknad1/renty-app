import Image from "next/image";
import { cardInfo } from "@/constants";
import { MapPin, BedSingle, Bath, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import { StarIcon, UsersIcon } from "@heroicons/react/24/solid";

function SmallCard({
  name,
  image,
  address,
  price,
  bed,
  bath,
  occupants,
  rating,
}: {
  name: string;
  image: string;
  address: string;
  price: number;
  bed: number;
  bath: number;
  occupants: number;
  rating: number;
}) {
  return (
    <div className="bg-white flex flex-col items-center overflow-hidden rounded-lg w-[310px] h-[300px] cursor-pointer hover:shadow-sm hover:scale-105 ease-in transition-all ">
      <Image
        src={image}
        alt="Image of a House"
        width={310}
        height={180}
        className="w-[310px] h-[200px] object-cover"
      />

      <div className="flex flex-col bg-red-300 items-start  flex-1 gap-1 w-full">
        <div className="bg-white flex flex-col justify-between p-4 h-full w-full">
          <div className="flex items-center justify-between mb-1 ">
            <p className="text-sm font-medium">{name}</p>
            <div className="flex items-center space-x-1">
              <StarIcon className="h-3.5 w-3.5 " color="red" />
              <p className="text-sm text-gray-500">{rating}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <MapPin color="gray" size={14} />
            <p className="text-gray-500 text-xs">{address}</p>
          </div>
          <Separator className="mt-2 mb-2" />
          <div className="flex items-center w-full gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center space-x-1 ">
                <BedSingle size={16} />
                <p className="text-xs font-medium text-gray-600">{bed}</p>
              </div>
              <div className="flex items-center space-x-1 ">
                <Bath size={16} />
                <p className="text-xs font-medium text-gray-600">{bath}</p>
              </div>
              <div className="flex items-center space-x-1 ">
                <UsersIcon color="black" className="h-4 w-4" />
                <p className="text-xs font-medium text-gray-600">{occupants}</p>
              </div>
            </div>

            <p className="text-sm font-semibold">{`GHC${price}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
