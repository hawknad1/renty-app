import SmallCard from "@/components/cards/SmallCard";
import { cardInfo } from "@/constants";

function page() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-4 pt-4 gap-y-8 ">
        {cardInfo.map((card) => (
          <SmallCard key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
}

export default page;
