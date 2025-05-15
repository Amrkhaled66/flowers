import { Link } from "react-router-dom";
import FormInput from "src/components/ui/register/FormInput";
import Loader from "src/components/ui/Loader";

import useLogin from "src/hooks/auth/useLogin";

const LoginForm = () => {
  const { formData, errors, handleChange, handleSubmit, isPending } =
    useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-5">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <Link to="/forgot-password/send-otp">
          <p className="text-main text-end font-bold"> forgot password?</p>
        </Link>

        <button
          disabled={isPending}
          type="submit"
          className="bg-main text-text-main animate hover:bg-main-300 mt-8 w-full rounded-xl py-3 text-lg font-bold text-white"
        >
          {isPending ? <Loader /> : "Login"}
        </button>
        <div className="mt-4 flex w-full justify-center gap-x-2">
          <p className="text-text-main">Don't have an account?</p>
          <Link to="/signup">
            <p className="text-main font-bold">Create Account?</p>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
