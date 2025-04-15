import products from "src/data/products";
import ProductCard from "src/components/ui/ProductCard";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};

export default Products;
