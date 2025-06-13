import { deactivateAccount } from "src/api/Auth";
import { useMutation } from "@tanstack/react-query";

const useDeactivateAccount = () => {
  return useMutation({
    mutationFn: () => deactivateAccount(),
  });
};

export default useDeactivateAccount;
