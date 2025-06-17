import { axiosPrivate } from "./axios";

const getPoints = async () => {
  const { data } = await axiosPrivate.get("/api/points");
  return data;
};

const getBalance = async () => {
  const { data } = await axiosPrivate.get("/api/balance");
  return data;
};

const redeemPoints = async () => {
  const { data } = await axiosPrivate.post("/api/points/redeem");
  return data;
};

export { getPoints, redeemPoints, getBalance };
