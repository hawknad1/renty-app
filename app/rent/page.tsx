import SmallCard from "@/components/cards/SmallCard";
import { cardRentInfo } from "@/constants";

function page() {
  return (
    <div className="flex justify-center">
      <div className="max-w-md grid gap-6 p-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto md:max-w-7xl">
        {cardRentInfo.map((card: any) => (
          <SmallCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}

export default page;
