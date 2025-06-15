import { useQuery, useMutation } from "@tanstack/react-query";
import { getPoints, redeemPoints } from "src/api/points";

const useGetPoints = () => {
  return useQuery({
    queryKey: ["points"],
    queryFn: getPoints,
  });
};

const useRedeemPoints = () => {
  return useMutation({
    mutationFn: redeemPoints,
  });
};

export { useGetPoints, useRedeemPoints };
