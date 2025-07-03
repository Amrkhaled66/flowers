import { useReset } from "src/context/resetCtx";
import { useState } from "react";
import { Navigate } from "react-router";
import { useSubmitOtp } from "src/hooks/auth/useForgetPasswordMutation";
import { useSendOtp } from "src/hooks/auth/useForgetPasswordMutation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import OtpForm from "src/components/ui/register/otp/OtpForm";
import Button from "src/components/ui/Button";

const SubmitOtp = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [error, setError] = useState("");
  const { phone, setToken, setPhone } = useReset();
  const [disabledResend, setDisabledResend] = useState<boolean>(false);
  const { mutate: submitOtp, isPending: submitLoading } = useSubmitOtp();
  const { mutate: sendOtp, isPending: isSendOtpPending } = useSendOtp();
  const { t: forgetPasswordTranslation } = useTranslation("forgetPassword");
  const { t: tErrors } = useTranslation("errors");
  const navigate = useNavigate();

  const handleResend = () => {
    sendOtp(phone, {
      onError: (err: any) => {
        if (err.response.status === 400) setDisabledResend(true);
      },
    });
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
          navigate("/forgot-password/reset-password");
        },
        onError: () => {
          setError(tErrors("invlidOtp"));
        },
      },
    );
  };

  if (!phone) return <Navigate to="/forgot-password/send-otp" />;

  return (
    <OtpForm
      handleChangePhone={handleChangePhone}
      otp={otp}
      setOtp={setOtp}
      phone={phone}
      error={disabledResend ? tErrors("otpLimit") : error}
      onResend={handleResend}
      isSendOtpPending={isSendOtpPending}
      disabledResend={disabledResend}
    >
      <Button
        loading={submitLoading}
        text={forgetPasswordTranslation("submitOtp.continue")}
        onClick={handleSubmit}
        className="bg-main hover:bg-main-300 animate w-full rounded-xl !py-3 text-base leading-7 font-bold text-white"
      />
    </OtpForm>
  );
};

export default SubmitOtp;
