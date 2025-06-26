import axiosInstance from "./axios";

const getFullData = async () => {
  const { data } = await axiosInstance.get("/full-data");
  return data;
};


export { getFullData, };
