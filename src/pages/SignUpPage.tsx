import SignUpForm from "src/sections/Signup/SignUpForm";

import RegisterPage from "src/components/ui/register/RegisterPage";
import { useTranslation } from "react-i18next";
const SignUpPage = () => {
  const { t } = useTranslation("signUp");
  return (
    <RegisterPage title={t("header")}>
      <SignUpForm />
    </RegisterPage>
  );
};

export default SignUpPage;
