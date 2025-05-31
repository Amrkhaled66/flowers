import LoginForm from "src/sections/Signin/LoginForm";
import SocialLoginSection from "src/sections/Signin/SocialLoginSection";
import RegisterPage from "src/components/ui/register/RegisterPage";

import { useTranslation } from "react-i18next";

const SignInPage = () => {
  const { t } = useTranslation("signIn");
  return (
    <RegisterPage title={t("header")}>
      <SocialLoginSection />
      <LoginForm />
    </RegisterPage>
  );
};

export default SignInPage;
