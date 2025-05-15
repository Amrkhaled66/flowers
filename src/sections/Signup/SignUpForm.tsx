import FormInput from "src/components/ui/register/FormInput";

import { Link } from "react-router-dom";
import GenderButton from "src/components/SignUp/GenderButton";
import FormFields from "./fields";
import Loader from "src/components/ui/Loader";

import useRegister from "src/hooks/auth/useRegister";
import { UserRegister } from "src/types/auth/User";

const SignUpForm = () => {
  const { formData, errors, handleChange, handleSubmit, isPending } =
    useRegister();
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="!text-text-main space-y-5">
        {FormFields.map(({ label, type, name, isRequired }) => (
          <FormInput
            key={name}
            required={isRequired}
            label={label}
            type={type}
            name={name}
            value={formData[name as keyof UserRegister] || ""}
            error={errors[name as keyof UserRegister]}
            onChange={handleChange}
          />
        ))}

        <GenderButton
          label="Gender"
          name="gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          selectedValue={formData.gender}
          error={errors.gender}
          onChange={handleChange}
        />
      </div>
      <div className="mt-8 flex flex-col justify-center gap-y-4">
        <button
          disabled={isPending}
          type="submit"
          className="bg-main hover:bg-main-300 w-full rounded-xl py-3 font-bold text-white transition-colors"
        >
          {isPending ? <Loader /> : "Create Account"}
        </button>
        <div className="flex justify-center gap-x-2">
          <p className="text-text-main">You have an account?</p>
          <p className="text-main font-bold">
            <Link to="/signin">Login?</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
