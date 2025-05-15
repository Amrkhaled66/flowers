import { sendOtp, changePassword, submitOtp } from "src/api/resetPassword";
import { useMutation } from "@tanstack/react-query";

const useSendOtp = () =>
  useMutation({ mutationFn: (phone_number: string) => sendOtp(phone_number) });
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
      new_password,
      confirm_password,
      token,
    }: {
      new_password: string;
      confirm_password: string;
      token: string;
    }) => changePassword(new_password, confirm_password, token),
  });

export { useSendOtp, useSubmitOtp, useChangePassword };
