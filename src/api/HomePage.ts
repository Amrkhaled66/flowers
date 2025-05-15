import axiosInstance from "./axios";

const getFullData = async () => {
  const { data } = await axiosInstance.get("api/full-data");
  return data;
};

const getOccasions = async () => {
  const { data } = await axiosInstance.get("api/occasions");
  return data;
};

const getCategories = async () => {
  const { data } = await axiosInstance.get("api/categories");
  return data;
};

export { getFullData, getOccasions, getCategories };
