import axiosInstance from "./axios";
import transformProduct from "src/utils/transforms/transformProduct";

const getProducts = async (filters?: any, page?: number) => {
  const { data } = await axiosInstance.get(`api/products?page=${page}`, {
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

  return {
    total: data.data.total,
    perPage: data.data.per_page,
    products: data.data.data.map(transformProduct),
  };
};

const getProductById = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(`api/products/${id}`);
  return data;
};

export { getProducts, getProductById };
