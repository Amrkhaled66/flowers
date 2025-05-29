import ProductCardUI from "./ProductCardUI";
import FavoriteButton from "./FavoriteButton";
import Product from "src/types/product";
const ProductCard = ({
  isFavoriteCard,
  product,
  isFilterCard = false,
}: {
  product: Product;
  isFilterCard?: boolean;
  isFavoriteCard?: boolean;
}) => {
  return (
    <ProductCardUI
      isFavorite={isFavoriteCard}
      isFilterCard={isFilterCard}
      product={product}
    >
      <FavoriteButton className="absolute top-2 right-2 z-40" productId={product.id} />
    </ProductCardUI>
  );
};

export default ProductCard;
