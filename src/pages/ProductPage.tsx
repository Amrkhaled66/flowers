import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import NavigationBar from "src/sections/ProductPage/NavigationBar";
import ProductOverView from "src/sections/ProductPage/ProductOverView";
import ProductDetails from "src/sections/ProductPage/ProductDetails";
import ProductImagesSlider from "src/sections/ProductPage/ProductImagesSlider";
import Recommendations from "src/sections/ProductPage/Recommendations";

import { getProductById } from "src/api/products";
import transformProduct from "src/utils/transforms/transformProduct";
import {
  getLocalizedName,
  getLocalizedDescription,
} from "src/utils/getLocalizedName";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";

const ProductPage = () => {
  usePageTitle("Product");

  const { id } = useParams();
  const {
    i18n: { language },
  } = useTranslation();
  const [showImagesSlider, setShowImagesSlider] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  const product = data?.data ? transformProduct(data.data) : null;
  const localizedName = product ? getLocalizedName(product, language) : "";
  const localizedDescription = product
    ? getLocalizedDescription(product, language)
    : "";
    
  return (
    <div className="h-auto min-h-screen py-6 lg:py-10">
      <div className="container space-y-6 lg:space-y-20">
        {/* Navigation + Overview */}
        <div className="space-y-6">
          <NavigationBar name={localizedName} />
          <ProductOverView
            isOutOfStock={product?.stock <= 0}
            id={product?.id}
            loading={isLoading}
            name={localizedName}
            images={product?.images}
            beforeDiscount={product?.beforeDiscount}
            afterDiscount={product?.afterDiscount}
            category={product?.categoryId}
            onShowImagesSlider={() => setShowImagesSlider(true)}
          />
        </div>

        {/* Description */}
        <ProductDetails
          loading={isLoading}
          description={localizedDescription}
        />
        {product?.recommendedProducts.length > 0 && (
          <Recommendations products={product?.recommendedProducts || []} />
        )}
      </div>

      {/* Image Slider Modal */}
      {showImagesSlider && product?.images && (
        <ProductImagesSlider
          images={product.images}
          onClose={() => setShowImagesSlider(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;
