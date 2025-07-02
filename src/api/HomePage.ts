import axiosInstance from "./axios";

const getFullData = async () => {
  const { data } = await axiosInstance.get("/full-data");
  return data;
};

const getPinnedCategories = async () => {
  const { data } = await axiosInstance.get("/pin-categories");
  return data;
};

export { getFullData, getPinnedCategories };
