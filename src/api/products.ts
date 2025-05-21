import axiosInstance from "./axios";
import transformProduct from "src/utils/transformas/transformProduct";

const getProducts = async (filters?: any) => {
  const { data } = await axiosInstance.get(`api/products`, {
    params: filters,
    paramsSerializer: (params) => {
      return Object.entries(params)
        .flatMap(([key, values]) =>
          Array.isArray(values)
            ? values.map((value) => `${key}[]=${value}`)
            : `${key}=${values}`,
        )
        .join("&");
    },
  });
  return data.data.map(transformProduct);
};

export { getProducts };
