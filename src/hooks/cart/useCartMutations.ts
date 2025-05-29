import {
  getCart,
  updateCart,
  deleteCart,
  addToCart,
  applyCoupon,
} from "src/api/cart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "src/context/authCtx";

import { useCart } from "src/context/user/cartCtx";
import { toast } from "react-toastify";
import useDebounce from "../shared/useDebounce";

const useGetCart = () => {
  const { isAuthenticated } = useAuth();
  const { storeCart } = useCart();
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await getCart();
      storeCart(data.data);
      return data;
    },
    enabled: isAuthenticated,
  });
};
const useUpdateCart = () => {
  const mutation = useMutation({
    mutationFn: ({ quantity, id }: { quantity: number; id: number }) =>
      updateCart(quantity, id),
    onError: (err: any) => {
      toast(err.response.data.message, {
        type: "error",
      });
    },
    onSuccess: () => {
      toast("Item quantity updated", {
        type: "success",
      });
    },
  });

  // Create a debounced version of mutate
  const debouncedMutate = useDebounce(mutation.mutate, 500);

  return { ...mutation, mutate: debouncedMutate };
};

const useDeleteCart = () =>
  useMutation({
    mutationFn: (id: number) => deleteCart(id),
    onError: (err: any) => {
      toast(err.response.data.message, {
        type: "error",
      });
    },
    onSuccess: () => {
      toast("Item removed from cart", {
        type: "success",
      });
    },
  });

const useAddToCart = () =>
  useMutation({
    mutationFn: (id: number) => addToCart(id),
    onError: (err: any) => {
      toast(err.response.data.message, {
        type: "error",
      });
    },
    onSuccess: () => {
      toast("Item added to cart", {
        type: "success",
      });
    },
  });

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
};
