import {
  useAddFavorite,
  useRemoveFavorite,
} from "src/hooks/profile/favorites/FavoritesMutations";
import { toast } from "react-toastify";

import { useAuthGuard } from "src/hooks/shared/useAuthGuard";

export const useFavoriteHandler = (favoriteId: number, productId: number) => {
  const { check } = useAuthGuard();
  const { mutate: addFavorite, isPending: isAddPending } =
    useAddFavorite(productId);
  const { mutate: removeFavorite, isPending: isRemovePending } =
    useRemoveFavorite(favoriteId);

  const isPending = isAddPending || isRemovePending;

  const handleToggleFavorite = async () => {
    const isAuthenticated = await check();
    if (!isAuthenticated) return;

    const action = favoriteId ? removeFavorite : addFavorite;

    action(undefined, {
      onSuccess: () => {
        toast(`Favorite ${favoriteId ? "removed" : "added"}`, {
          type: "success",
        });
      },
    });
  };

  return { handleToggleFavorite, isPending };
};
