import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useFilterOptions } from "src/hooks/filter/useFilterOptions";
import { useSidebar } from "src/hooks/filter/useSidebar";
import { useFilterPageData } from "src/hooks/filter/useFilterPageData";
import { useEffect } from "react";

import FilterBar from "src/sections/FilterPage/FilterBar";
import FilteredProducts from "src/sections/FilterPage/FilteredProducts";
import Overlay from "src/components/ui/Overlay";
import Pagination from "src/components/ui/Pagination";

const FilterPage = () => {
  usePageTitle("Products");

  const {
    options,
    handleOptionChange,
    handlePriceRangeChange,
    appliedOptions,
    setAppliedOptions,
    page,
    setPage,
  } = useFilterOptions();
  const { sidebarOpen, closeSidebar, toggleSidebar } = useSidebar();
  const {
    categories,
    occasions,
    productsData,
    refetchProducts,
    productsLoading,
    fullDataLoading,
    colors,
    prices,
  } = useFilterPageData(appliedOptions, page);

  const onApplyFilter = () => {
    if (JSON.stringify(options) === JSON.stringify(appliedOptions)) return;
    setAppliedOptions(options);
  };

  useEffect(() => {
    if (appliedOptions === null) return;
    refetchProducts({ cancelRefetch: true });
  }, [appliedOptions]);

  useEffect(() => {
    if (appliedOptions === null) return;
    setPage(1);
  }, [appliedOptions]);

  useEffect(() => {
    refetchProducts({ cancelRefetch: true });
  }, [page]);

  return (
    <div className="container flex min-h-dvh flex-col justify-between !py-10">
      <div className="flex h-auto gap-x-6">
        <FilterBar
          loading={fullDataLoading}
          onSubmit={onApplyFilter}
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          categories={categories || []}
          occasions={occasions || []}
          colors={colors}
          onOptionChange={handleOptionChange}
          handlePriceRangeChange={handlePriceRangeChange}
          options={options}
          prices={prices}
        />

        <Overlay
          show={sidebarOpen}
          onClick={closeSidebar}
          bgColor="#00000066"
        />

        <FilteredProducts
          openSidebar={toggleSidebar}
          loading={productsLoading}
          Products={productsData?.products || []}
        />
      </div>
      {!productsLoading && (
        <Pagination
          pageCount={
            Math.ceil(productsData?.total / productsData?.perPage) || 0
          }
          handlePageClick={({ selected }: { selected: number }) => {
            setPage(selected + 1);
          }}
        />
      )}
    </div>
  );
};

export default FilterPage;
