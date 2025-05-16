import { axiosPrivate } from "../axios";

const getFavorites = async () => {
  const { data } = await axiosPrivate.get("/api/user-favourites");
  return data;
};

const addFavorite = async (id: string) => {
  const { data } = await axiosPrivate.post(`/api/user-favourites`, {
    productId: id,
  });
  return data;
};

const removeFavorite = async (id: string) => {
  const { data } = await axiosPrivate.delete(`/api/user-favourites`, {
    data: { product_id: id },
  });
  return data;
};

export { getFavorites, addFavorite, removeFavorite };
