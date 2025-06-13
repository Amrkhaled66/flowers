import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import { submitOrder, getBusyTimes } from "src/api/order";

const useGetBusyTimes = () =>
  useQuery({
    queryKey: ["busyTimes"],
    queryFn: getBusyTimes,
  });

const useSubmitOrder = () =>
  useMutation({
    mutationFn: submitOrder,
  });

export { useGetBusyTimes, useSubmitOrder };
