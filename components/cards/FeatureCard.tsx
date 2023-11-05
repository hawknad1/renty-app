"use client";
import Image from "next/image";
import { MapPin, BedSingle, Bath, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import { StarIcon, UsersIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

interface FeatureCardProps {
  data: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="bg-white border border-slate-200 flex flex-col cursor-pointer items-center overflow-hidden rounded-lg w-[310px] h-[300px] xl:w-[300px] xl:h-[290px]  hover:shadow-sm hover:scale-105 ease-out transform transition duration-300 ">
      <Image
        src={data?.image}
        alt="Image of a House"
        width={310}
        height={180}
        className="w-[310px] h-[200px] xl:w-[300px] xl:h-[190px] object-cover"
      />

      <div className="flex flex-col items-start  flex-1 gap-1 w-full">
        <div className="bg-white flex flex-col justify-between p-4 h-full w-full">
          <div className="flex items-center justify-between mb-1 ">
            <p className="text-sm font-medium">{data.name}</p>
            <div className="flex items-center space-x-1">
              <StarIcon className="h-3.5 w-3.5 " color="red" />
              <p className="text-sm text-gray-500">{data.rating}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <MapPin color="gray" size={14} />
            <p className="text-gray-500 text-xs">{data.address}</p>
          </div>
          <Separator className="mt-2 mb-2" />
          <div className="flex items-center w-full gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center space-x-1 ">
                <BedSingle size={16} />
                <p className="text-xs font-medium text-gray-600">{data.bed}</p>
              </div>
              <div className="flex items-center space-x-1 ">
                <Bath size={16} />
                <p className="text-xs font-medium text-gray-600">{data.bath}</p>
              </div>
              <div className="flex items-center space-x-1 ">
                <UsersIcon color="black" className="h-4 w-4" />
                <p className="text-xs font-medium text-gray-600">
                  {data.occupants}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold">{`GHC ${
              data.price || data.monthlyPrice
            }`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
