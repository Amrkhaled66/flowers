// import { useParams } from "react-router";
import NavigationBar from "src/sections/ProductPage/NavigationBar";
import ProductOverView from "src/sections/ProductPage/ProductOverView";
import ProductDetails from "src/sections/ProductPage/ProductDetails";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";

const product = {
  name: "Rose Bouquet",
  images: [
    "/images/products/1.webp",
    "/images/products/2.webp",
    "/images/products/3.webp",
    "/images/products/4.webp",
  ],
  price: 50,
  stars: 4,
  reviews: 100,
  description: "dfdsf",
  category: "dfdsf",
};
const ProductPage = () => {
  usePageTitle("Product");
  // const { id } = useParams();

  const isLoading = false;
  return (
    <div className="h-auto min-h-screen py-[24px] lg:py-[40px]">
      <div className="container space-y-[24px] lg:space-y-[80px]">
        <div className="space-y-6">
          <NavigationBar name={product?.name} />
          <ProductOverView
          loading={isLoading}
            images={product?.images}
            name={product?.name}
            price={product?.price}
            stars={product?.stars}
            reviews={product?.reviews}
            description={product?.description}
            category={product?.category}
          />
        </div>
        <ProductDetails loading={isLoading} />
      </div>
    </div>
  );
};

export default ProductPage;
