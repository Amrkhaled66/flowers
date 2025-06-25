import { axiosPrivate } from "./axios";

const getPoints = async () => {
  const { data } = await axiosPrivate.get("/points");
  return data;
};

const getBalance = async () => {
  const { data } = await axiosPrivate.get("/balance");
  return data;
};

const redeemPoints = async () => {
  const { data } = await axiosPrivate.post("/points/redeem");
  return data;
};

export { getPoints, redeemPoints, getBalance };
