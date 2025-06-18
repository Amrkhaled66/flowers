import axiosInstance from "./axios";
import { axiosPrivate } from "./axios";

const getBusyTimes = async () => {
  const { data } = await axiosInstance.get("/api/busy-delivery-times");
  return data.data;
};

const getOrders = async () => {
  const { data: res } = await axiosPrivate.get("/api/orders");
  return res;
};

const getOrderById = async (id: number) => {
  const { data } = await axiosPrivate.get(`/api/orders/${id}`);
  return data;
};

const submitOrder = async (sentData: any) => {
  const { data } = await axiosPrivate.post("/api/orders", sentData);
  return data;
};
export { getBusyTimes, submitOrder, getOrders, getOrderById };
