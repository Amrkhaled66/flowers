import Button from "src/components/ui/Button";
import PasswordInput from "src/components/ProfilePage/ChangePassword/PasswordInput";

import { useState } from "react";
import { useReset } from "src/context/resetCtx";
import { Navigate } from "react-router";
import { useChangePassword } from "src/hooks/auth/useForgetPasswordMutation";
const ResetPassword = () => {
  const { token } = useReset();
  const { mutate, isPending } = useChangePassword();
  const [form, setForm] = useState<{
    password: string;
    confirm_password: string;
  }>({ password: "", confirm_password: "" });
  if (!token) return <Navigate to="/forgot-password/send-otp" />;

  const handleSubmit = () => {
    console.log(form);
  };
  return (
    <div className="flex items-center justify-center py-8">
      <div className="border-stroke bg-main-50 w-[600px] rounded-xl border p-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-2">
            <h1 className="text-text-main text-2xl font-bold">
              Reset The Password
            </h1>
            <p className="text-text-main w-84 text-base font-normal">
              New password must be different from previously used password
            </p>
          </div>

          <form className="w-full space-y-8">
            <div className="space-y-4">
              <PasswordInput
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                label="New password"
                name="password"
                placeholder="New password"
                value={form.password}
              />

              <PasswordInput
                onChange={(e) =>
                  setForm({ ...form, confirm_password: e.target.value })
                }
                value={form.confirm_password}
                name="confirm_password"
                label="Confirm new password"
                placeholder="Confirm new password"
              />
            </div>

            <Button
              text="Continue"
              className="animate hover:bg-main-100 bg-main w-full rounded-xl !py-3 text-base font-bold text-white"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
