import {
  useAddFavorite,
  useRemoveFavorite,
} from "src/hooks/profile/favorites/FavoritesMutations";
import { useAuth } from "src/context/authCtx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Alert from "src/components/ui/Alert";

export const useFavoriteHandler = (isProductFavorite: boolean, productId: number) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { mutate: addFavorite, isPending: isAddPending } = useAddFavorite(productId);
  const { mutate: removeFavorite, isPending: isRemovePending } =
    useRemoveFavorite(productId);

  const isPending = isAddPending || isRemovePending;

  const handleToggleFavorite = async () => {
    if (!isAuthenticated) {
      const result = await Alert({
        title: "Warning",
        text: "Please login first",
        icon: "warning",
        confirmButtonText: "Login",
      });
      if (result.isConfirmed) navigate("/signin");
      return;
    }

    const action = isProductFavorite ? removeFavorite : addFavorite;

    action(undefined, {
      onSuccess: () => {
        toast(`Favorite ${isProductFavorite ? "removed" : "added"}`, {
          type: "success",
        });
      },
    });
  };

  return { handleToggleFavorite, isPending };
};
