import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import { submitOrder, getBusyTimes, getOrders } from "src/api/order";

const useGetBusyTimes = () =>
  useQuery({
    queryKey: ["busyTimes"],
    queryFn: getBusyTimes,
  });

const useGetOrders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

const useSubmitOrder = () =>
  useMutation({
    mutationFn: submitOrder,
  });

export { useGetBusyTimes, useSubmitOrder ,useGetOrders};
