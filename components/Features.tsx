import { cardBuyInfo } from "@/constants";
import FeatureCard from "./cards/FeatureCard";

const Features = () => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide">
      <div className="flex space-x-3 p-4">
        {cardBuyInfo.map((card) => (
          <FeatureCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Features;
