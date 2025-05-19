import axiosInstance from "./axios";
import transformProduct from "src/utils/transformas/transformProduct";

const getProducts = async (queryParams?: string) => {
    const { data } = await axiosInstance.get(`api/products?${queryParams}`);
    return data.data.map(transformProduct);
};

export {
    getProducts
}