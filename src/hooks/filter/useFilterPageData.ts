import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProducts } from "src/api/products";
import {
  useGetCategories,
  useGetOccasions,
  useGetColors
} from "src/hooks/filter/useFilterSectionsMutations";

export const useFilterPageData = (appliedOptions: any,page: number) => {
  const { data: categories, isLoading: categoriesLoading } = useGetCategories();
  const { data: occasions, isLoading: occasionsLoading } = useGetOccasions();
  const { data: colors, isLoading: colorsLoading } = useGetColors();
  const {
    data: productsData,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products", appliedOptions],
    queryFn: () => getProducts(appliedOptions,page),
    enabled: false,
  });

  useEffect(() => {
    refetchProducts();
  }, []);

  return {
    categories: categories || [],
    occasions: occasions || [],
    productsData,
    refetchProducts,
    productsLoading,
    categoriesLoading,
    occasionsLoading,
    colors: colors || [],
    colorsLoading,
  };
};
