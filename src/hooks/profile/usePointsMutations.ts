import { useQuery, useMutation } from "@tanstack/react-query";
import { getPoints, redeemPoints, getBalance } from "src/api/points";
import { useAuth } from "src/context/authCtx";
import { useTranslation } from "react-i18next";
import { showToast } from "src/utils/toast";
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

const useRedeemPoints = ({ confirmRedeem }: { confirmRedeem?: () => void }) => {
  const { updateBalance } = useAuth();
  const { t } = useTranslation("toast");
  return useMutation({
    mutationFn: redeemPoints,
    onSuccess: (data) => {
      showToast.success(t("points.redeemed"));
      confirmRedeem && confirmRedeem();
      updateBalance(String(data.data.new_balance));
    },
  });
};

export { useGetPoints, useRedeemPoints, useGetBalance };
