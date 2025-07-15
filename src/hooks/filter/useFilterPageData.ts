import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/api/products";
import { useEffect ,useState} from "react";
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

  const [fakeProductsLoading, setFakeProductsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFakeProductsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return {
    categories: fullData?.categories?.map(transformBaseItem) || [],
    occasions: fullData?.occasions?.map(transformBaseItem) || [],
    productsData,
    refetchProducts,
    productsLoading: productsLoading || fakeProductsLoading,
    fullDataLoading,
    colors: fullData?.colors || [],
    prices: transformKeysToCamelCase(fullData?.prices) || {},
  };
};
