import OtpForm from "src/components/ui/register/otp/OtpForm";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "src/context/authCtx";

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
      handleSubmit={handleSubmit}
      onResend={handleResend}
      submitLoading={isVerifyOtpPending}
      isSendOtpPending={isRequestOtpPending}
      phone={authData.user?.phone_number || ""}
    />
  );
};

export default VerifyAccount;
