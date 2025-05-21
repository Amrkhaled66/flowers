import ProductCardUI from "./ProductCardUI";
import FavoriteButton from "./FavoriteButton";
import Product from "src/types/product";

const ProductCard = ({
  product,
  isFavorite = false,
  isFilterCard = false,
}: {
  product: Product;
  isFavorite?: boolean;
  isFilterCard?: boolean;
}) => {
  return (
    <ProductCardUI isFilterCard={isFilterCard}  product={product}  isFavorite={isFavorite}>
      <FavoriteButton isFavorite={isFavorite} productId={"d"} />
    </ProductCardUI>
  );
};

export default ProductCard;
