import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import FilterBar from "src/sections/FilterPage/FilterBar";
import FilteredProducts from "src/sections/FilterPage/FilteredProducts";

import { products1 } from "src/data/products";
const FilterPage = () => {
  usePageTitle("Products");
  return (
    <div className="container flex h-auto min-h-dvh gap-x-6 !py-10">
      <FilterBar
        sidebarOpen={true}
        setSidebarOpen={() => {}}
        categories={["love", "hate"]}
        colors={["f"]}
      />
      <FilteredProducts setSidebarOpen={() => {}} Products={products1} />
    </div>
  );
};

export default FilterPage;
