import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import {
  submitOrder,
  getBusyTimes,
  getOrders,
  getOrderById,
} from "src/api/order";
import transformReceivedOrder from "src/utils/transforms/transformReceivedOrder";
import { useOrder } from "src/context/orderCtx";
import { useCart } from "src/context/user/cartCtx";
const useGetBusyTimes = () =>
  useQuery({
    queryKey: ["busyTimes"],
    queryFn: getBusyTimes,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

const useGetOrders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const data = await getOrders();
      return data.orders.map(transformReceivedOrder);
    },
  });

const useGetOrderById = (id: number) =>
  useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const data = await getOrderById(id);
      return transformReceivedOrder(data.order);
    },
  });

const useSubmitOrder = () => {
  const navigate = useNavigate();
  const {
    resetOrder,
  } = useOrder();
  const { storeCart } = useCart();
  return useMutation({
    mutationFn: submitOrder,
    onSuccess: (data) => {
      storeCart([]);
      resetOrder();
      if (data.order_id)
        navigate("/success-order", {
          replace: true,
          state: { orderId: data.order_id },
        });
      else window.location.href = data.payment_url;
    },
  });
};
export { useGetBusyTimes, useSubmitOrder, useGetOrders, useGetOrderById };
