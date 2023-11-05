"use client";

import SmallCard from "@/components/cards/SmallCard";
import { cardBuyInfo } from "@/constants";
import { useRouter } from "next/navigation";

interface Params {
  buyId: string;
}

function page({ params }: { params: Params }) {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="max-w-md grid gap-6 p-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto md:max-w-7xl">
        {cardBuyInfo.map((card) => (
          <div key={card.id} onClick={() => router.push(`/buy/${card.id}`)}>
            <SmallCard data={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
