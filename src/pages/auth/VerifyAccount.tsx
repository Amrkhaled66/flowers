import OtpForm from "src/components/ui/register/otp/OtpForm";
import Button from "src/components/ui/Button";

import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "src/context/authCtx";
import { useTranslation } from "react-i18next";

import {
  useRequestOtp,
  useVerifyOtp,
} from "src/hooks/auth/useRegisterMutation";
import Alert from "src/components/ui/Alert";
const VerifyAccount = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { mutate: requestOtp, isPending: isRequestOtpPending } =
    useRequestOtp();
  const { mutate: verifyOtp, isPending: isVerifyOtpPending } = useVerifyOtp();
  const { authData } = useAuth();
  const { t: forgetPasswordTranslation } = useTranslation("forgetPassword");

  const handleChangePhone = () => {
    navigate("/profile/mydata");
  };
  const handleResend = () => {
    requestOtp(undefined,{
      onError: (err: any) => {
        setError(err.response.data.message);
      }
    });
  };

  const handleSubmit = () => {
    if (otp.join("").length !== 4) return setError("Enter valid otp");
    verifyOtp(otp.join(""), {
      onSuccess: () => {
        Alert({
          title: "Success",
          text: "Account verified successfully",
          icon: "success",
          confirmButtonText: "Okay",
        }).then(() => {
          navigate("/");
        });
      },
      onError: (err: any) => {
        setError(err.response.data.message);
      },
    });
  };

  useEffect(() => {
    requestOtp();
  }, []);

  return (
    <OtpForm
      otp={otp}
      handleChangePhone={handleChangePhone}
      setOtp={setOtp}
      error={error}
      onResend={handleResend}
      isSendOtpPending={isRequestOtpPending}
      phone={authData.user?.phone_number || ""}
    >
      <Button
        loading={isVerifyOtpPending}
        text={forgetPasswordTranslation("submitOtp.continue")}
        onClick={handleSubmit}
        className="bg-main hover:bg-main-300 animate w-full rounded-xl !py-3 text-base leading-7 font-bold text-white"
      />
    </OtpForm>
  );
};

export default VerifyAccount;
