import axiosInstance from "./axios";
const getOccasions = async () => {
    const { data } = await axiosInstance.get("/occasions");
    return data;
};

const getCategories = async () => {
    const { data } = await axiosInstance.get("/categories");
    return data;
};

const getColors = async () => {
    const { data } = await axiosInstance.get("/colors");
    return data;
};

export { getOccasions, getCategories,getColors }