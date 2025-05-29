import NavigationBar from "src/sections/ProductPage/NavigationBar";
import ProductOverView from "src/sections/ProductPage/ProductOverView";
import ProductDetails from "src/sections/ProductPage/ProductDetails";
import ProductImagesSlider from "src/sections/ProductPage/ProductImagesSlider";

// import { useParams } from "react-router";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useState } from "react";

import imag1 from "src/assets/products/1.webp";
import imag2 from "src/assets/products/2.webp";
const product = {
  name: "Rose Bouquet",
  images: [imag1, imag2],
  price: 50,
  stars: 4,
  reviews: 100,
  description: "dfdsf",
  category: "dfdsf",
};
const ProductPage = () => {
  usePageTitle("Product");
  // const { id } = useParams();
  const [showImagesSlider, setShowImagesSlider] = useState(false);

  const isLoading = false;
  return (
    <div className="h-auto min-h-screen py-[24px] lg:py-[40px]">
      <div className="container space-y-[24px] lg:space-y-[80px]">
        <div className="space-y-6">
          <NavigationBar name={product?.name} />
          <ProductOverView
            onShowImagesSlider={() => setShowImagesSlider(true)}
            loading={isLoading}
            images={product?.images}
            name={product?.name}
            price={product?.price}
            description={product?.description}
            category={product?.category}
          />
        </div>
        <ProductDetails loading={isLoading} />
      </div>
      {showImagesSlider && (
        <ProductImagesSlider
          onClose={() => setShowImagesSlider(false)}
          images={product?.images}
        />
      )}
    </div>
  );
};

export default ProductPage;
