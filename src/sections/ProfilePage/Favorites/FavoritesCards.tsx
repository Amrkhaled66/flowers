import Product from "src/types/product";
import ProductCard from "src/components/ui/ProductCard";
const FavoritesCards = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          img={product.img}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default FavoritesCards;
