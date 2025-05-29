import { logout } from "src/api/Auth";
import { useMutation } from "@tanstack/react-query";

const useLogOutMutation = () =>
  useMutation({
    mutationFn: () => logout(),
    retry: false,
  });

export default useLogOutMutation;
