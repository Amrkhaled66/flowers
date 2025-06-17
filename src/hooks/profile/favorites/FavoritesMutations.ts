import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "src/api/profile/favorite";
import { useAuth } from "src/context/authCtx";
import { useFavorites } from "src/context/user/favoritesCtx";

const useGetFavorites = () => {
  const { 
    // isVerified 
isAuthenticated
   } = useAuth();
  const { storeFavorites } = useFavorites();
  return useQuery({
    queryKey: ["user-favorites"],
    queryFn: async () => {
      const data = await getFavorites();
      storeFavorites(data.data);
      return data;
    },
    enabled: isAuthenticated,
    retry: 2,
  });
};

const useAddFavorite = (productId: number) => {
  const { favorites, storeFavorites } = useFavorites();
  return useMutation({
    mutationFn: () => addFavorite(productId),
    onSuccess: (data) => {
      storeFavorites([...favorites, data.data]);
    },
  });
};

const useRemoveFavorite = (id: number) => {
  const { favorites, storeFavorites } = useFavorites();

  return useMutation({
    mutationFn: () => removeFavorite(id),
    onSuccess: () => {
      storeFavorites(favorites.filter((item) => id !== item.id));
    },
  });
};

export { useGetFavorites, useAddFavorite, useRemoveFavorite };
