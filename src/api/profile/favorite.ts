import { axiosPrivate } from "../axios";

const getFavorites = async () => {
  const { data } = await axiosPrivate.get("/api/user-favourites");
  return data;
};

const addFavorite = async (id: number) => {
  const { data } = await axiosPrivate.post(`/api/user-favourites`, {
    product_id: id,
  });
  return data;
};

const removeFavorite = async (id: number) => {
  const { data } = await axiosPrivate.delete(`/api/user-favourites/${id}`);
  return data;
};

export { getFavorites, addFavorite, removeFavorite };
