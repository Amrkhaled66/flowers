import Product from "src/types/product";
import ProductCard from "src/components/ui/ProductCard/ProductCard";
import ProductCardSk from "src/components/ui/Skeletons/ProductCardSk";
import { useTranslation } from "react-i18next";
type Props = {
  products: Product[];
  isLoading?: boolean;
};

const ProductList = ({ products, isLoading }: Props) => {
  const { t } = useTranslation("addedToCartModel");
  if (!products.length && !isLoading) {
    return (
      <div className="mb-[90px] text-center text-gray-500">
        {t("noProducts")}
      </div>
    );
  }
  return isLoading ? (
    <div className="mb-[90px] grid grid-cols-2 gap-3 bg-white p-2 sm:grid-cols-3">
      <ProductCardSk />
      <ProductCardSk />
      <ProductCardSk />
      <ProductCardSk />
    </div>
  ) : (
    <div className="bg-main-50 mb-[90px] grid w-full grid-cols-2 gap-3 !overflow-y-auto rounded-xl px-2 py-3 sm:grid-cols-3 lg:py-4">
      {products.map((product) => (
        <div key={product.id} className="aspect-square">
          <ProductCard isAddedModelCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
