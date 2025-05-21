import { getCart, updateCart, deleteCart, addToCart } from "src/api/cart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "src/context/authCtx";

import { useCart } from "src/context/user/cartCtx";
const useGetCart = () => {
  const { isAuthenticated } = useAuth();
  const { setCart } = useCart();
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await getCart();
      setCart(data.data); 
      return data;
    },
    enabled: isAuthenticated,
  });
};
const useUpdateCart = () =>
  useMutation({
    mutationFn: ({ quantity, id }: { quantity: number; id: number }) =>
      updateCart(quantity, id),
  });

const useDeleteCart = () =>
  useMutation({
    mutationFn: (id: number) => deleteCart(id),
  });

const useAddToCart = () =>
  useMutation({
    mutationFn: (id: number) => addToCart(id),
  });

export { useGetCart, useUpdateCart, useDeleteCart, useAddToCart };
