import { submitOtp, sendOtp, changePassword } from "src/api/resetPassword";

import { useMutation } from "@tanstack/react-query";

const useSendOtp = () =>
  useMutation({
    mutationFn: (phone_number: string) => sendOtp(phone_number),
  });

const useSubmitOtp = () =>
  useMutation({
    mutationFn: ({
      phone_number,
      otp,
    }: {
      phone_number: string;
      otp: string;
    }) => submitOtp(phone_number, otp),
  });

const useChangePassword = () =>
  useMutation({
    mutationFn: ({
      phone_number,
      password,
    }: {
      phone_number: string;
      password: string;
    }) => changePassword(phone_number, password),
  });

export { useSendOtp, useSubmitOtp, useChangePassword };
