import { axiosPrivate } from "./axios";

const getCart = async () => {
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

const clearCart = async () => {
  const { data } = await axiosPrivate.delete(`/api/user-carts/clear`);
  return data;
};

const applyCoupon = async (couponCode: string) => {
  const { data } = await axiosPrivate.get(`/api/coupons?code=${couponCode}`);
  console.log(data)
  return data;
};

export { getCart, addToCart, updateCart, deleteCart, clearCart, applyCoupon };
