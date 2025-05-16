import FormInput from "src/components/ui/register/FormInput";

import { Link } from "react-router-dom";
import GenderButton from "src/components/SignUp/GenderButton";
import FormFields from "./fields";
import Loader from "src/components/ui/Loader";

import useRegister from "src/hooks/auth/useRegister";
import { UserRegister } from "src/types/auth/User";
import { useTranslation } from "react-i18next";
const SignUpForm = () => {
  const { formData, errors, handleChange, handleSubmit, isPending } =
    useRegister();
  const { i18n,t } = useTranslation("signUp");

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="!text-text-main space-y-5">
        {FormFields.map(({ labelAr, labelEn, type, name, isRequired }) => (
          <FormInput
            key={name}
            required={isRequired}
            label={i18n.language === "en" ? labelEn : labelAr}
            type={type}
            name={name}
            value={formData[name as keyof UserRegister] || ""}
            error={errors[name as keyof UserRegister]}
            onChange={handleChange}
          />
        ))}

        <GenderButton
          label={i18n.language === "en" ? "Gender" : "النوع"}
          name="gender"
          options={[
            { value: "male", labelEn: "Male", labelAr: "ذكر" },
            { value: "female", labelEn: "Female" , labelAr: "انثى"},
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
          {isPending ? <Loader /> : t("header")}
        </button>
        <div className="flex justify-center gap-x-2">
          <p className="text-text-main">{ t("hasAccount")}</p>
          <p className="text-main font-bold">
            <Link to="/signin">{t("signIn")}</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
