import { axiosPrivate } from "../axios";
import Address from "src/types/UserInfo/Address";
export const getAddresses = async () => {
  const { data } = await axiosPrivate.get("/user-addresses");
  return data;
};

export const addAddress = async (address: Address) => {
  const { data } = await axiosPrivate.post("/user-addresses", address);
  return data;
};

export const deleteAddress = async (id: number) => {
  const { data } = await axiosPrivate.delete(`/user-addresses/${id}`);
  return data;
};

export const updateAddress = async (address: Address, id: number) => {
  const { data } = await axiosPrivate.put(`/user-addresses/${id}`, {
    ...address,
    title: "Address",
  });
  return data;
};
