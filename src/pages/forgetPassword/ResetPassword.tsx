import Button from "src/components/ui/Button";
import PasswordInput from "src/components/ProfilePage/ChangePassword/PasswordInput";
import Alert from "src/components/ui/Alert";

import { FormEvent, useState } from "react";
import { useReset } from "src/context/resetCtx";
import { Navigate } from "react-router";
import { useChangePassword } from "src/hooks/auth/useForgetPasswordMutation";
import { useTranslation } from "react-i18next";
const ResetPassword = () => {
  const { token } = useReset();
  const { mutate, isPending } = useChangePassword();
  const [error, setError] = useState("");
  const [form, setForm] = useState<{
    password: string;
    confirm_password: string;
  }>({ password: "", confirm_password: "" });
  const { t: tError } = useTranslation("errors");
  const { t: tForget } = useTranslation("forgetPassword");

  // if (!token) return <Navigate to="/forgot-password/send-otp" />;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.password) return setError(tError("register.requiredPassword"));
    if (form.password !== form.confirm_password)
      return setError(tError("register.passwordMismatch"));

    mutate(
      {
        new_password: form.password,
        confirm_password: form.password,
        token,
      },
      {
        onSuccess: () => {
          Alert({
            title: "Success",
            text: "Password Reset Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          return <Navigate to="/signin" />;
        },
        onError: (err: any) => setError(err.response.data.message),
      },
    );
  };

  return (
    <div className="flex items-center justify-center py-8">
      <div className="border-stroke bg-main-50 w-[90%] lg:w-[600px] rounded-xl border  p-4 lg:p-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-2">
            <h1 className="text-text-main text-2xl font-bold">
              {tForget("resetPassword.header")}
            </h1>
            <p className="text-text-main w-84 text-base font-normal">
              {tForget("resetPassword.description")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-8">
            <div className="space-y-4">
              <PasswordInput
                error={error}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                label={tForget("resetPassword.password")}
                name="password"
                placeholder={tForget("resetPassword.password")}
                value={form.password}
              />

              <PasswordInput
                onChange={(e) =>
                  setForm({ ...form, confirm_password: e.target.value })
                }
                value={form.confirm_password}
                name="confirm_password"
                label={tForget("resetPassword.confirmPassword")}
                placeholder={tForget("resetPassword.confirmPassword")}
              />
            </div>

            <Button
              loading={isPending}
              text={tForget("resetPassword.continue")}
              className="animate hover:bg-main-100 bg-main w-full rounded-xl !py-3 text-base font-bold text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
