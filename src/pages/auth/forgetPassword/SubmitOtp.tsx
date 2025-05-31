import { useReset } from "src/context/resetCtx";
import { useState } from "react";
import { Navigate } from "react-router";
import { useSubmitOtp } from "src/hooks/auth/useForgetPasswordMutation";
import { useSendOtp } from "src/hooks/auth/useForgetPasswordMutation";

import OtpForm from "src/components/ui/register/otp/OtpForm";

const SubmitOtp = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [error, setError] = useState("");
  const { phone, token, setToken, setPhone } = useReset();
  const { mutate:submitOtp, isPending:submitLoading } = useSubmitOtp();
  const { mutate: sendOtp, isPending: isSendOtpPending } = useSendOtp();
  if (!phone || token) return <Navigate to="/forgot-password/send-otp" />;

  const handleResend = () => {
    sendOtp(phone);
  };
  const handleChangePhone = () => {
    setToken("");
    setPhone("");
    <Navigate to="/forgot-password/send-otp" />;
  };

  const handleSubmit = () => {
    if (otp.join("").length !== 4) return;
    submitOtp(
      { phone_number: phone, otp: otp.join("") },
      {
        onSuccess: (data) => {
          setToken(data.token);
        },
        onError: (err: any) => {
          setError(err.response.data.message);
        },
      },
    );
  };

  return (
    <OtpForm
      handleChangePhone={handleChangePhone}
      handleSubmit={handleSubmit}
      otp={otp}
      setOtp={setOtp}
      phone={phone}
      error={error}
      submitLoading={submitLoading}
      onResend={handleResend}
      isSendOtpPending={isSendOtpPending}
    />
  );
};

export default SubmitOtp;
