import { logout } from "src/api/Auth";
import { useMutation } from "@tanstack/react-query";

const useLogOutMutation = () =>
  useMutation({
    mutationFn: () => logout(),
  });

export default useLogOutMutation;
