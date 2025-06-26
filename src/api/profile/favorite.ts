import { axiosPrivate } from "../axios";

const getFavorites = async () => {
  const { data } = await axiosPrivate.get("/user-favourites");
  return data;
};

const addFavorite = async (id: number) => {
  const { data } = await axiosPrivate.post(`/user-favourites`, {
    product_id: id,
  });
  return data;
};

const removeFavorite = async (id: number) => {
  const { data } = await axiosPrivate.delete(`/user-favourites/${id}`);
  return data;
};

export { getFavorites, addFavorite, removeFavorite };
