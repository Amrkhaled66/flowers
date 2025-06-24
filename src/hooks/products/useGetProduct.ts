import { useQuery } from "@tanstack/react-query";
import { getProductById } from "src/api/products";
import transformProduct from "src/utils/transforms/transformProduct";

const useGetProduct = (id: string | null) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const data = await getProductById(id as string);
      const product = data?.data ? transformProduct(data.data) : null;
      return product;
    },
    enabled: !!id,
  });

export default useGetProduct;
