import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getFavorites,
  getFavoritesIds,
  addFavorite,
  removeFavorite,
} from "src/api/profile/favorite";
import { useAuth } from "src/context/authCtx";
import { useFavorites } from "src/context/user/favoritesCtx";

const useGetFavorites = () =>
  useQuery({
    queryKey: ["user-favorites"],
    queryFn: () => getFavorites(),
    retry: 2,
  });

const useGetFavoritesIds = () => {
  const { isAuthenticated } = useAuth();
  const { storeFavorites } = useFavorites();
  return useQuery({
    queryKey: ["user-favorites-ids"],
    queryFn: async () => {
      const data = await getFavoritesIds();
      storeFavorites(data.data);
      return data;
    },
    retry: 2,
    enabled: isAuthenticated,
  });
};

const useAddFavorite = (productId: number) => {
  const { favorites, storeFavorites } = useFavorites();
  return useMutation({
    mutationFn: () => addFavorite(productId),
    onSuccess: () => {
      storeFavorites([...favorites, productId]);
    },
  });
};

const useRemoveFavorite = (productId: number) => {
  const { favorites, storeFavorites } = useFavorites();

  return useMutation({
    mutationFn: () => removeFavorite(productId),
    onSuccess: () => {
      storeFavorites(favorites.filter((id) => id !== productId));
    },
  });
};
export {
  useGetFavorites,
  useAddFavorite,
  useGetFavoritesIds,
  useRemoveFavorite,
};
