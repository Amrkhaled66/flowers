import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useFilterOptions } from "src/hooks/filter/useFilterOptions";
import { useSidebar } from "src/hooks/filter/useSidebar";
import { useFilterPageData } from "src/hooks/filter/useFilterPageData";

import FilterBar from "src/sections/FilterPage/FilterBar";
import FilteredProducts from "src/sections/FilterPage/FilteredProducts";
import Overlay from "src/components/ui/Overlay";

const FilterPage = () => {
  usePageTitle("Products");

  const {
    options,
    handleOptionChange,
    handlePriceRangeChange,
    appliedOptions,
    setAppliedOptions,
  } = useFilterOptions();
  const { sidebarOpen, closeSidebar, toggleSidebar } = useSidebar();
  const { categories, occasions, products, isLoading, refetchProducts } =
    useFilterPageData(appliedOptions);

  const onApplyFilter = () => {
    if (JSON.stringify(options) === JSON.stringify(appliedOptions)) return;
    setAppliedOptions(options);
    refetchProducts();
  };
  
  if (isLoading) {
    return (
      <div className="container flex h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container flex h-auto min-h-dvh gap-x-6 !py-10">
      <FilterBar
        onSubmit={onApplyFilter}
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        categories={categories || []}
        occasions={occasions || []}
        colors={[{ hex: "#FF0000" }]}
        onOptionChange={handleOptionChange}
        handlePriceRangeChange={handlePriceRangeChange}
      />

      {sidebarOpen && <Overlay onClick={closeSidebar} bgColor="#00000066" />}

      <FilteredProducts openSidebar={toggleSidebar} Products={products || []} />
    </div>
  );
};

export default FilterPage;
