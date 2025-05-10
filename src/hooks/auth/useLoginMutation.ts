import { login } from "src/api/Auth";
import { useMutation } from "@tanstack/react-query";
import Login from "src/types/auth/Longin";
const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: Login) =>
      login(credentials),
  });
};

export default useLogin;
