import { useParams } from "react-router";
import { products1 } from "src/data/products";

import NavigationBar from "src/sections/ProductPage/NavigationBar";
import ProductOverView from "src/sections/ProductPage/ProductOverView";
import ProductDetails from "src/sections/ProductPage/ProductDetails";
import usePageTitle from "src/hooks/useUpdatePageTitle";

const ProductPage = () => {
  usePageTitle("Product");
  const { id } = useParams();

  const product = products1.find((product) => product.name === id);
  console.log(product);
  return (
    <div className="min-h-dvh py-[24px] lg:py-[40px]">
      <div className="container space-y-[24px] lg:space-y-[80px]">
        <div className="space-y-6">
          <NavigationBar name={product?.name} />
          <ProductOverView
            images={product?.images}
            name={product?.name}
            price={product?.price}
            stars={product?.stars}
            reviews={product?.reviews}
            description={product?.description}
            category={product?.category}
          />
        </div>
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductPage;
