import Button from "src/components/ui/Button";
import { Link } from "react-router-dom";
import FormInput from "src/components/ui/register/FormInput";
import { useState } from "react";
import { validatePhoneNumber } from "src/utils/register";

import { useSendOtp } from "src/hooks/auth/useForgetPasswordMutation";
import { useNavigate } from "react-router-dom";
import { useReset } from "src/context/resetCtx";
import { useTranslation } from "react-i18next";
const validate = (
  phone: string,
  errorsTranslation: (key: string) => string,
): string => {
  return validatePhoneNumber(phone, errorsTranslation);
};
const SendOtp = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { mutate, isPending } = useSendOtp();
  const navigate = useNavigate();
  const { setPhone: setResetPhone } = useReset();
  const { t: errorsTranslation } = useTranslation("errors");
  const { t: forgetPasswordTranslation } = useTranslation("forgetPassword");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    if (phone.trim().length === 0) return setError("Phone number is required");
    else setError("");
  };

  const onBlur = () => setError(validatePhoneNumber(phone, errorsTranslation));

  const onSubmit = () => {
    const validation = validate(phone, errorsTranslation);
    if (validation.length > 0) return setError(validation);
    mutate(phone, {
      onSuccess: () => {
        setResetPhone(phone);
        navigate("/forgot-password/submit-otp");
      },
      onError: (err: any) => {
        setError(err.response.data.message.errors.phone_number);
      },
    });
  };

  return (
    <div className="flex h-fit items-center justify-center py-10">
      <div className="bg-main-50 border-stroke inline-flex w-[646px] flex-col items-center justify-start gap-5 rounded-xl border p-8">
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="text-text-main justify-start text-center text-xl font-bold">
            {forgetPasswordTranslation("sendOtp.header")}
          </div>
          <div className="text-text-main justify-start text-center text-base font-normal">
            {forgetPasswordTranslation("sendOtp.subHeader")}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-5 self-stretch">
          <div className="flex flex-col items-end justify-start gap-8 self-stretch">
            <div className="flex flex-col items-start justify-start gap-3 self-stretch">
              <FormInput
                onBlur={onBlur}
                label={forgetPasswordTranslation("sendOtp.inputLabel")}
                placeholder={forgetPasswordTranslation(
                  "sendOtp.inputPlaceholder",
                )}
                required
                name="phone"
                onChange={handleChange}
                value={phone}
                error={error}
                type="text"
              />
            </div>
            <div className="inline-flex items-start justify-start gap-5 self-stretch">
              <div
                data-property-1="Default"
                className="bg-Color-Primary flex h-12 flex-1 items-center justify-center gap-2.5 rounded-xl py-3"
              >
                <Button
                  onClick={onSubmit}
                  loading={isPending}
                  text={forgetPasswordTranslation("sendOtp.send")}
                  className="bg-main animate w-full !py-3 !text-lg text-white"
                />
              </div>
            </div>
          </div>
          <Link to="/signin">
            <p className="text-text-main justify-start text-lg font-semibold">
              {forgetPasswordTranslation("sendOtp.back")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SendOtp;
