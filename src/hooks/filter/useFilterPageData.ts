import { useQuery } from "@tanstack/react-query";
import {  useEffect } from "react";
import { getProducts } from "src/api/products";
import {
  useGetCategories,
  useGetOccasions,
} from "src/hooks/category/categoryQueries";
export const useFilterPageData = (appliedOptions: any) => {
  const { data: categories, isLoading: categoriesLoading } = useGetCategories();
  const { data: occasions, isLoading: occasionsLoading } = useGetOccasions();
  const {
    data: products,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products",appliedOptions],
    queryFn: () => getProducts(appliedOptions),
    enabled: false,
  });

  useEffect(() => {
    refetchProducts();
  }, []);
  const isLoading = categoriesLoading || occasionsLoading ;

  return {
    categories: categories || [],
    occasions: occasions || [],
    products,
    isLoading,
    refetchProducts,
    productsLoading,
  };
};
