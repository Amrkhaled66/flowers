import axiosInstance from "./axios";

const getOccasions = async () => {
    const { data } = await axiosInstance.get("api/occasions");
    return data;
};

const getCategories = async () => {
    const { data } = await axiosInstance.get("api/categories");
    return data;
};
export { getOccasions, getCategories }