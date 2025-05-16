import {
  useAddFavorite,
  useRemoveFavorite,
} from "src/hooks/profile/favorites/FavoritesMutations";
import { useAuth } from "src/context/authCtx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Alert from "src/components/ui/Alert";

export const useFavoriteHandler = (productId: string) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { mutate: addFavorite, isPending: isAddPending } = useAddFavorite();
  const { mutate: removeFavorite, isPending: isRemovePending } =
    useRemoveFavorite();

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

    const action = isFavorite(productId) ? removeFavorite : addFavorite;

    action(productId, {
      onSuccess: () => {
        toast(`Favorite ${isFavorite(productId) ? "removed" : "added"}`, {
          type: "success",
        });
      },
    });
  };

  return { handleToggleFavorite, isPending };
};

// Optional helper:
const isFavorite = (productId: string) => {
  // use context or prop
  return true;
};
