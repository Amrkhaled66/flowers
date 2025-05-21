import { axiosPrivate } from "./axios";

const getCart = async () => {
  console.log("getCart");
  const { data } = await axiosPrivate.get("/api/user-carts");
  return data;
};

const addToCart = async (id: number) => {
  const { data } = await axiosPrivate.post(`/api/user-carts`, {
    product_id: id,
  });
  return data;
};

const updateCart = async (quantity: number, id: number) => {
  const { data } = await axiosPrivate.put(`/api/user-carts/${id}`, {
    quantity,
  });
  return data;
};

const deleteCart = async (id: number) => {
  const { data } = await axiosPrivate.delete(`/api/user-carts/${id}`);
  return data;
};

export { getCart, addToCart, updateCart, deleteCart };
