import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/api/products";
import { useGetCategories, useGetOccasions } from "src/hooks/category/categoryQueries";

export const useFilterPageData = () => {
  const { data: categories, isLoading: categoriesLoading } = useGetCategories();
  const { data: occasions, isLoading: occasionsLoading } = useGetOccasions();
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const isLoading = categoriesLoading || occasionsLoading || productsLoading;

  return {
    categories: categories?.data || [],
    occasions: occasions?.data || [],
    products,
    isLoading,
  };
};