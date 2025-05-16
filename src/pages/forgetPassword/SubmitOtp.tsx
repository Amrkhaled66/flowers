import { useReset } from "src/context/resetCtx";
import { useState } from "react";
import { Navigate } from "react-router";
import { useSubmitOtp } from "src/hooks/auth/useForgetPasswordMutation";
import { useTranslation } from "react-i18next";

import OtpInput from "src/sections/forgetPassword/SubmitOtp/OtpInput";
import TimerCountDown from "src/sections/forgetPassword/SubmitOtp/TimerCountDown";
import Button from "src/components/ui/Button";

const SubmitOtp = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [error, setError] = useState("");
  const { phone, token, setToken, setPhone } = useReset();
  const { mutate, isPending } = useSubmitOtp();
  const { t: forgetPasswordTranslation } = useTranslation("forgetPassword");
  if (!phone || token) return <Navigate to="/forgot-password/send-otp" />;

  const handleChangePhone = () => {
    setToken("");
    setPhone("");
    <Navigate to="/forgot-password/send-otp" />;
  };

  const handleSubmit = () => {
    if (otp.join("").length !== 4) return;
    mutate(
      { phone_number: phone, otp: otp.join("") },
      {
        onSuccess: (data) => {
          setToken(data.token);
        },
        onError: (err: any) => {
          console.log(err);
          setError(err.response.data.message);
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="border-stroke inline-flex w-[646px] flex-col items-center justify-start gap-5 rounded-xl border bg-zinc-100 p-8">
        <div className="flex flex-col items-center justify-start gap-4 self-stretch">
          <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
            <div className="text-text-main justify-start text-xl leading-7 font-bold">
              {forgetPasswordTranslation("submitOtp.header")}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-2">
            <div className="text-text-main justify-start text-center text-base font-normal">
             {forgetPasswordTranslation("submitOtp.description")}
            </div>
            <div className="relative inline-flex items-start justify-center gap-2">
              <div className="outline-Color-Primary absolute top-[18px] left-[125px] h-0 w-12 outline-offset-[-0.50px]"></div>
              <div className="text-text-main justify-start text-center text-sm font-bold">
                +{phone}
              </div>
              <button
                onClick={handleChangePhone}
                className="text-main justify-start text-center text-sm font-bold hover:underline"
              >
                {forgetPasswordTranslation("submitOtp.change")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-8 self-stretch">
          <OtpInput error={error} otp={otp} setOtp={setOtp} />
          <Button
            loading={isPending}
            text={forgetPasswordTranslation("submitOtp.continue")}
            onClick={handleSubmit}
            className="bg-main hover:bg-main-300 animate w-full rounded-xl !py-3 text-base leading-7 font-bold text-white"
          />
          <TimerCountDown />
        </div>
      </div>
    </div>
  );
};

export default SubmitOtp;
