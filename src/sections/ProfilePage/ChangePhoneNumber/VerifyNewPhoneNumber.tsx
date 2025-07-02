import OtpForm from "src/components/ui/register/otp/OtpForm";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
import Button from "src/components/ui/Button";
import Alert from "src/components/ui/Alert";
import { useNavigate } from "react-router";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import {
  useRequestOtp,
  useVerifyOtp,
} from "src/hooks/auth/useRegisterMutation";
const VerifyNewPhoneNumber = ({
  phone,
  onChangePhoneNumber,
}: {
  phone: string;
  onChangePhoneNumber: () => void;
}) => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { mutate: requestOtp, isPending: isRequestOtpPending } =useRequestOtp();
  const { mutate: verifyOtp, isPending: isVerifyOtpPending } = useVerifyOtp();
  const { t: forgetPasswordTranslation } = useTranslation("forgetPassword");

  const handleResend = () => {
    requestOtp(undefined, {
      onError: (err: any) => {
        setError(err.response.data.message);
      },
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
          navigate("/profile/userInfo");
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
    <ProfilePageCompetent>
      <OtpForm
        otp={otp}
        setOtp={setOtp}
        error={error}
        onResend={handleResend}
        isSendOtpPending={isRequestOtpPending}
        handleChangePhone={onChangePhoneNumber}
        phone={phone}
        isChangePhoneNumberForm
      >
        <div className="w-full space-y-4">
          <Button
            loading={isVerifyOtpPending}
            text={forgetPasswordTranslation("submitOtp.continue")}
            onClick={handleSubmit}
            className="bg-main hover:bg-main-300 animate !w-full rounded-xl !py-3 text-base leading-7 font-bold text-white"
          />
          {/* <Link to="/profile/mydata">
            <div className="border-main w-full rounded-xl border py-3 text-center text-lg font-bold">
              {forgetPasswordTranslation("submitOtp.back")}
            </div>
          </Link> */}
        </div>
      </OtpForm>
    </ProfilePageCompetent>
  );
};

export default VerifyNewPhoneNumber;
