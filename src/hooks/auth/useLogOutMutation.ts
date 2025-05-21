import { logout } from "src/api/Auth";
import { useMutation } from "@tanstack/react-query";

const useLogOutMutation = () =>
  useMutation({
    mutationFn: () => logout(),
    retry: 1,
  });

export default useLogOutMutation;
