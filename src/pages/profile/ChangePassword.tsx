import Button from "src/components/ui/Button";
import useChangePassword from "src/hooks/profileHooks/useChangePassword";
import PasswordInput from "src/components/ProfilePage/ChangePassword/PasswordInput";

const ChangePassword = () => {
  const { formData, errors, handleChange, handleSubmit } = useChangePassword();

  return (
    <form onSubmit={handleSubmit} className="mx-auto lg:p-6">
      <div className="space-y-4 lg:space-y-6">
        <PasswordInput
          label="Current Password"
          name="oldPassword"
          placeholder="Enter old password"
          value={formData.oldPassword}
          error={errors.oldPassword}
          onChange={handleChange}
        />
        <div className="grid grid-cols-1 gap-5 gap-y-4 lg:grid-cols-2">
          <PasswordInput
            label="New Password"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            error={errors.newPassword}
            onChange={handleChange}
          />

          <PasswordInput
            label="Confirm New Password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          text=" Update Password"
          // type="submit"
          className="bg-main w-full !py-3 text-lg font-bold text-white transition-colors"
        ></Button>
      </div>
    </form>
  );
};

export default ChangePassword;
