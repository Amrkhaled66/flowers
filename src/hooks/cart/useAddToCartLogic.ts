import { useAddToCart, useDebouncedUpdateCart } from "src/hooks/cart/useCartMutations";

import { useAuthGuard } from "src/hooks/shared/useAuthGuard";
import { useCart } from "src/context/user/cartCtx"; // or your cart logic location

export const useAddToCartLogic = () => {
  const { mutate: addToCart, isPending: isAddPending } = useAddToCart();
  const { mutate: updateCart, isPending: isUpdatePending } = useDebouncedUpdateCart();
  const { check } = useAuthGuard();
  const { isProductInCart } = useCart();
  const AddToCart = async (
    productId: number,
    quantity = 1,
    onSuccess?: () => void,
  ) => {
    const isAuthenticated = await check();
    if (!isAuthenticated) return;
    if (isProductInCart(productId)) {
      const id = Number(isProductInCart(productId));
      updateCart({ quantity, id });
    } else {
      addToCart(productId, {
        onSuccess: () => onSuccess && onSuccess(),
      });
    }
  };

  return {
    AddToCart,
    isAddPending,
    isUpdatePending,
    isLoading: isAddPending || isUpdatePending,
  };
};
