import Button from "src/components/ui/Button";
import useChangePassword from "src/hooks/profile/useChangePassword";
import PasswordInput from "src/components/ProfilePage/ChangePassword/PasswordInput";
import { useTranslation } from "react-i18next";
const ChangePassword = () => {
  const { formData, errors, handleChange, handleSubmit } = useChangePassword();
  const { t } = useTranslation("profile")

  return (
    <form onSubmit={handleSubmit} className="mx-auto lg:p-6">
      <div className="space-y-4 lg:space-y-6">
        <PasswordInput
          label={t("changePassword.currentPass")}
          name="oldPassword"
          value={formData.oldPassword}
          error={errors.oldPassword}
          onChange={handleChange}
        />
        <div className="grid grid-cols-1 gap-5 gap-y-4 lg:grid-cols-2">
          <PasswordInput
            label={t("changePassword.newPass")}
            name="newPassword"
            value={formData.newPassword}
            error={errors.newPassword}
            onChange={handleChange}
          />

          <PasswordInput
            label={t("changePassword.confirmNewPass")}
            name="confirmPassword"
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          text={t("changePassword.update")}
          // type="submit"
          className="bg-main w-full !py-3 text-lg font-bold text-white transition-colors"
        ></Button>
      </div>
    </form>
  );
};

export default ChangePassword;
