import ProductCard from "src/components/ui/ProductCard/ProductCard";

export default function FilteredProducts({ Products, setSidebarOpen }) {
  return (
    <div className="flex h-fit flex-1 flex-col gap-y-6">
      <button
        onClick={() => setSidebarOpen(true)}
        className="bg-main flex w-fit items-center gap-2 rounded-2xl px-4 py-2 text-white lg:hidden"
      >
        {/* <FaFilter /> */}
        Filter
      </button>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {Products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
