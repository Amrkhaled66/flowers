import { register } from "src/api/Auth";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      register(credentials),
  });
};

export default useRegister;
