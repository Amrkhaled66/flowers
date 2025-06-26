import { axiosPrivate } from "./axios";

const getCart = async () => {
  const { data } = await axiosPrivate.get("/user-carts");
  return data;
};

const addToCart = async (id: number) => {
  const { data } = await axiosPrivate.post(`/user-carts`, {
    product_id: id,
  });
  return data;
};

const updateCart = async (quantity: number, id: number) => {
  const { data } = await axiosPrivate.put(`/user-carts/${id}`, {
    quantity,
  });
  return data;
};

const deleteCart = async (id: number) => {
  const { data } = await axiosPrivate.delete(`/user-carts/${id}`);
  return data;
};

const clearCart = async () => {
  const { data } = await axiosPrivate.delete(`/user-carts/clear`);
  return data;
};

const applyCoupon = async (couponCode: string) => {
  const { data } = await axiosPrivate.get(`/coupons?code=${couponCode}`);
  return data;
};

export { getCart, addToCart, updateCart, deleteCart, clearCart, applyCoupon };
