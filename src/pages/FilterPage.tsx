import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useFilterOptions } from "src/hooks/filter/useFilterOptions";
import { useSidebar } from "src/hooks/filter/useSidebar";
import { useFilterPageData } from "src/hooks/filter/useFilterPageData";
import { useEffect } from "react";

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
  const {
    categories,
    occasions,
    products,
    refetchProducts,
    productsLoading,
    categoriesLoading,
    occasionsLoading,
  } = useFilterPageData(appliedOptions);

  const onApplyFilter = () => {
    if (JSON.stringify(options) === JSON.stringify(appliedOptions)) return;
    setAppliedOptions(options);
  };
  useEffect(() => {
    if (appliedOptions === null) return;
    refetchProducts({ cancelRefetch: true });
  }, [appliedOptions]);

  return (
    <div className="container flex h-auto min-h-dvh gap-x-6 !py-10">
      <FilterBar
        loading={categoriesLoading || occasionsLoading}
        onSubmit={onApplyFilter}
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        categories={categories || []}
        occasions={occasions || []}
        colors={[{ hex: "#FF0000" }]}
        onOptionChange={handleOptionChange}
        handlePriceRangeChange={handlePriceRangeChange}
        options={options}
      />

      <Overlay show={sidebarOpen} onClick={closeSidebar} bgColor="#00000066" />

      <FilteredProducts
        openSidebar={toggleSidebar}
        loading={productsLoading}
        Products={products || []}
      />
    </div>
  );
};

export default FilterPage;
