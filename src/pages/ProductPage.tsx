import { useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import useGetProduct from "src/hooks/products/useGetProduct";

import NavigationBar from "src/sections/ProductPage/NavigationBar";
import ProductOverView from "src/sections/ProductPage/ProductOverView";
import ProductDetails from "src/sections/ProductPage/ProductDetails";
import ProductImagesSlider from "src/sections/ProductPage/ProductImagesSlider";
import Recommendations from "src/sections/ProductPage/Recommendations";

import {
  getLocalizedName,
  getLocalizedDescription,
} from "src/utils/getLocalizedName";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import Product from "src/types/product";

const ProductPage = () => {
  const { id } = useParams();
  const {
    i18n: { language },
  } = useTranslation();
  const [showImagesSlider, setShowImagesSlider] = useState(false);

  const { data: product, isLoading } = useGetProduct(id as string);

  const localizedName = product ? getLocalizedName(product, language) : "";
  const localizedDescription = product
    ? getLocalizedDescription(product, language)
    : "";
  usePageTitle(`Product Page - ${product?.nameEn}`);


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
            width={product?.width}
            height={product?.height}
          />
        </div>

        {/* Description */}
        <ProductDetails
          loading={isLoading}
          description={localizedDescription}
          marketingMessage={product?.marketingMessage}
        />
        {product?.recommendedProducts.length > 0 && (
          <Recommendations
            mainProductId={product?.id}
            mainProductName={ getLocalizedName(product as Product)}
            mainProductImage={product?.firstImage}
            products={product?.recommendedProducts || []}
            mainProductPrice={product?.afterDiscount || 0}
          />
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
