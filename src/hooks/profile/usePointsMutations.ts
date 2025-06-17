import { useQuery, useMutation } from "@tanstack/react-query";
import { getPoints, redeemPoints, getBalance } from "src/api/points";
import { useAuth } from "src/context/authCtx";
import { toast } from "react-toastify";
const useGetPoints = () => {
  return useQuery({
    queryKey: ["points"],
    queryFn: getPoints,
  });
};

const useGetBalance = () => {
  return useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });
};

const useRedeemPoints = () => {
  const { updateBalance } = useAuth();
  return useMutation({
    mutationFn: redeemPoints,
    onSuccess: () => {
      const newBalance = "900";
      toast("Points Redeem Successfully");
      updateBalance(newBalance);
    },
  });
};

export { useGetPoints, useRedeemPoints, useGetBalance };
