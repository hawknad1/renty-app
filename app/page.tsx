import HomeCard from "@/components/HomeCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f8f8f8] h-screen">
      <div className="max-w-7xl mx-auto">
        <HomeCard />
      </div>
    </main>
  );
}
