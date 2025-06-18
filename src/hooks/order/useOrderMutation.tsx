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
  return useMutation({
    mutationFn: submitOrder,
    onSuccess: (data) => {
      navigate("/success-order", {
        replace: true,
        state: { orderId: data.orderId },
      });
    },
  });
};
export { useGetBusyTimes, useSubmitOrder, useGetOrders, useGetOrderById };
