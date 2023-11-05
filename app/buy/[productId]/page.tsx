import ProductDetails from "@/components/ProductDetails";
import { cardBuyInfo } from "@/constants";

interface Params {
  productId: number;
}

function Products({ params }: { params: Params }) {
  console.log(cardBuyInfo);
  return (
    <div>
      <ProductDetails data={cardBuyInfo} />
    </div>
  );
}

export default Products;
