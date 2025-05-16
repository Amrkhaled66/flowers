import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "src/api/profile/favorite";

const useGetFavorites = () =>
  useQuery({
    queryKey: ["user-favorites"],
    queryFn: () => getFavorites(),
    retry: 2,
  });

const useAddFavorite = () =>
  useMutation({
    mutationFn: (id: string) => addFavorite(id),
  });

const useRemoveFavorite = () =>
  useMutation({
    mutationFn: (id: string) => removeFavorite(id),
  });

export { useGetFavorites, useAddFavorite, useRemoveFavorite };
