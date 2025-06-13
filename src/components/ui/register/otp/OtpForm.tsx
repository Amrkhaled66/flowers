import { useTranslation } from "react-i18next";
import clsx from "clsx";

import OtpInput from "src/components/ui/register/otp/OtpInput";
import TimerCountDown from "src/components/ui/register/otp/TimerCountDown";

const OtpForm = ({
  children,
  handleChangePhone,
  otp,
  setOtp,
  phone,
  error,
  isSendOtpPending,
  onResend,
  isChangePhoneNumberForm,
}: {
  children?: React.ReactNode;
  handleChangePhone: () => void;
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  phone: string;
  error: string;
  isSendOtpPending: boolean;
  onResend: () => void;
  isChangePhoneNumberForm?: boolean;
}) => {
  const { t: forgetPasswordTranslation } = useTranslation("forgetPassword");

  return (
    <div
      className={clsx("flex items-center  justify-center", {
        "py-10": !isChangePhoneNumberForm,
      })}
    >
      <div
        className={clsx(
          "border-stroke inline-flex flex-col items-center justify-start gap-5 rounded-xl bg-zinc-100 p-4 lg:p-8",
          {
            "border lg:w-[646px] w-[90%]": !isChangePhoneNumberForm,
          },
          {
            "w-full": isChangePhoneNumberForm,
          },
        )}
      >
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
          {children}
          <TimerCountDown
            isSendOtpPending={isSendOtpPending}
            onResend={onResend}
          />
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
