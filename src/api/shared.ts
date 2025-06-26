import axiosInstance from "./axios";

const getConfig = async () => {
  const { data } = await axiosInstance.get("/config");
  return data;
};

export { getConfig };
