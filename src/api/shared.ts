import axiosInstance from "./axios";

const getConfig = async () => {
  const { data } = await axiosInstance.get("/api/config");
  return data;
};

export { getConfig };
