import ProductCard from "src/components/ui/ProductCard/ProductCard";
import Product from "src/types/product";
import ProductCardSk from "src/components/ui/Skeletons/ProductCardSk";
const Products = ({
  products,
  loading,
}: {
  products: Product[];
  loading: boolean;
}) => {
  return (
    <div className="hidden grid-cols-1 sm:grid-cols-2 md:gap-x-6 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
      {loading ? (
        <>
          <ProductCardSk />
          <ProductCardSk />
          <ProductCardSk />
          <ProductCardSk />
        </>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
