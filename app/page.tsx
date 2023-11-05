"use client";

import Features from "@/components/Features";
import BannerCard from "@/components/cards/BannerCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] h-full">
      <div className="max-w-md sm:max-w-[600px] md:max-w-[800px]  lg:max-w-6xl xl:max-w-7xl mx-auto pt-6 flex-col justify-center items-center">
        <BannerCard />
        <div className="flex flex-col">
          <div className="flex flex-col mt-12 mb-2">
            <h2 className="font-bold text-2xl">Explore</h2>
            <Features />
          </div>
          <div className="flex flex-col mt-12 mb-2">
            <h2 className="font-bold text-2xl">Explore</h2>
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
}
