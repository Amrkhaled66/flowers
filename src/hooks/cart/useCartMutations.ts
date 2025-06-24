import {
  getCart,
  updateCart,
  deleteCart,
  addToCart,
  applyCoupon,
  clearCart,
} from "src/api/cart";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "src/context/authCtx";
import { useAddToCartModal } from "src/context/AddedToCartModelCtx";
import { useCart } from "src/context/user/cartCtx";
import useDebounce from "../shared/useDebounce";
import { useTranslation } from "react-i18next";
import { showToast } from "src/utils/toast";

const useGetCart = () => {
  const {
    //  isVerified
    isAuthenticated,
  } = useAuth();
  const { storeCart } = useCart();
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await getCart();
      storeCart(data.data);
      return data;
    },
    enabled: isAuthenticated,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
};
const useUpdateCart = () => {
  const { storeCart } = useCart();
  const { t } = useTranslation("toast");
  const { openModal } = useAddToCartModal();

  return useMutation({
    mutationFn: ({ quantity, id }: { quantity: number; id: number }) =>
      updateCart(quantity, id),
    onError: (err: any) => {
      showToast.error(err.response.data.message);
    },
    onSuccess: (data) => {
      storeCart(data.cart);

      const addedProductId = data.cart[data.cart.length - 1]?.product.id;
      if (addedProductId) {
        openModal(addedProductId);
      }

      showToast.success(t("cart.cartUpdated"));
    },
  });
};

const useDebouncedUpdateCart = () => {
  const mutation = useUpdateCart();
  const debouncedMutate = useDebounce(mutation.mutate, 500);
  return { ...mutation, mutate: debouncedMutate };
};

const useAddToCart = () => {
  const { storeCart } = useCart();
  const { t } = useTranslation("toast");
  const { openModal } = useAddToCartModal();
  return useMutation({
    mutationFn: (id: number) => addToCart(id),
    onError: (err: any) => {
      showToast.error(err.response.data.message);
    },
    onSuccess: (data) => {
      storeCart(data.cart);

      showToast.success(t("cart.cartAdded"));

      const addedProductId = data.cart[data.cart.length - 1]?.product.id;
      if (addedProductId) {
        openModal(addedProductId);
      }
    },
  });
};

const useDeleteCart = () => {
  const { storeCart } = useCart();
  const { t } = useTranslation("toast");

  return useMutation({
    mutationFn: (id: number) => deleteCart(id),
    onError: (err: any) => {
      showToast.error(err.response.data.message);
    },
    onSuccess: (data) => {
      storeCart(data.cart);
      showToast.success(t("cart.cartDeleted"));
    },
  });
};

const useClearCart = () => {
  const { storeCart } = useCart();
  const { t } = useTranslation("toast");

  return useMutation({
    mutationFn: () => clearCart(),
    onError: (err: any) => {
      showToast.error(err.response.data.message);
    },
    onSuccess: () => {
      storeCart([]);
      showToast.success(t("cart.cartCleared"));
    },
  });
};

const useApplyCoupon = () => {
  return useMutation({
    mutationFn: (couponCode: string) => applyCoupon(couponCode),
  });
};

export {
  useGetCart,
  useUpdateCart,
  useDeleteCart,
  useAddToCart,
  useApplyCoupon,
  useClearCart,
  useDebouncedUpdateCart,
};
