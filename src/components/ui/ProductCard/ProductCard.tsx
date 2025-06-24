import ProductCardUI from "./ProductCardUI";
import FavoriteButton from "./FavoriteButton";
import Product from "src/types/product";
const ProductCard = ({
  product,
  isAddedModelCard,
}: {
  product: Product;
  isAddedModelCard?: boolean;
}) => {
  return (
    <ProductCardUI isAddedModelCard={isAddedModelCard} product={product}>
      <FavoriteButton
        className="absolute end-2 top-2 z-40"
        productId={product.id}
      />
    </ProductCardUI>
  );
};

export default ProductCard;
