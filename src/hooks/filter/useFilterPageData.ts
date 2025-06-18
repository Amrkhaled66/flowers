import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProducts } from "src/api/products";

import useGetFullData from "../shared/useGetFullData";
import transformBaseItem from "src/utils/transforms/transformCategory";
import transformKeysToCamelCase from "src/utils/transformToCamalCase";
export const useFilterPageData = (appliedOptions: any, page: number) => {
  const { data: fullData, isLoading: fullDataLoading } = useGetFullData();
  const {
    data: productsData,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products", appliedOptions],
    queryFn: () => getProducts(appliedOptions, page),
    enabled: false,
  });

  useEffect(() => {
    refetchProducts();
  }, []);

  console.log(fullData);

  return {
    categories: fullData?.categories?.map(transformBaseItem) || [],
    occasions: fullData?.occasions?.map(transformBaseItem) || [],
    productsData,
    refetchProducts,
    productsLoading,
    fullDataLoading,
    colors: fullData?.colors || [],
    prices: transformKeysToCamelCase(fullData?.prices) || {},
  };
};
