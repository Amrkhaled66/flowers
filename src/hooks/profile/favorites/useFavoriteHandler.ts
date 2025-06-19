import {
  useAddFavorite,
  useRemoveFavorite,
} from "src/hooks/profile/favorites/FavoritesMutations";
import { showToast } from "src/utils/toast";

import { useAuthGuard } from "src/hooks/shared/useAuthGuard";
import { useTranslation } from "react-i18next";
export const useFavoriteHandler = (favoriteId: number, productId: number) => {
  const { check } = useAuthGuard();
  const { mutate: addFavorite, isPending: isAddPending } =
    useAddFavorite(productId);
  const { mutate: removeFavorite, isPending: isRemovePending } =
    useRemoveFavorite(favoriteId);
  const { t } = useTranslation("toast");

  const isPending = isAddPending || isRemovePending;

  const handleToggleFavorite = async () => {
    const isAuthenticated = await check();
    if (!isAuthenticated) return;

    const action = favoriteId ? removeFavorite : addFavorite;

    action(undefined, {
      onSuccess: () => {
        showToast.success(` ${favoriteId ? t("favorite.deleted") : t("favorite.added")}`);
      },
    });
  };

  return { handleToggleFavorite, isPending };
};
