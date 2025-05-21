import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/api/products";
import {
  useGetCategories,
  useGetOccasions,
} from "src/hooks/category/categoryQueries";
import { useEffect } from "react";
export const useFilterPageData = (appliedOptions: any) => {
  const { data: categories, isLoading: categoriesLoading } = useGetCategories();
  const { data: occasions, isLoading: occasionsLoading } = useGetOccasions();
  const {
    data: products,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products", appliedOptions],
    queryFn: () => getProducts(appliedOptions),
    enabled: false,
  });

  useEffect(() => {
    refetchProducts();
  }, []);

  const isLoading = categoriesLoading || occasionsLoading || productsLoading;

  return {
    categories: categories?.data || [],
    occasions: occasions?.data || [],
    products,
    isLoading,
    refetchProducts,
  };
};
