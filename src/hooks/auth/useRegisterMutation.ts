import { register, requestOtp, verifyOtp } from "src/api/Auth";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  return useMutation({
    mutationFn: (credentials:any) => {
      return register(credentials);
    },
  });
};

const useRequestOtp = () => {
  return useMutation({
    mutationFn: () => requestOtp(),
  });
};

const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (otp: string) => verifyOtp(otp),
  });
};

export { useRegister, useRequestOtp, useVerifyOtp };
