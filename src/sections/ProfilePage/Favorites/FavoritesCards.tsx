import Product from "src/types/product";
import ProductCard from "src/components/ui/ProductCard/ProductCard";
const FavoritesCards = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
      {products.map((product) => (
        <ProductCard
          isFavorite
          img={product.img}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default FavoritesCards;
