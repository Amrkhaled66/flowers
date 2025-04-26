import LoginForm from "src/sections/Signin/LoginForm";
import SocialLoginSection from "src/sections/Signin/SocialLoginSection";

import RegisterPage from "src/components/ui/register/RegisterPage";
const SignInPage = () => {
  return (
    <RegisterPage title="Login">
      <SocialLoginSection />
      <LoginForm />
    </RegisterPage>
  );
};

export default SignInPage;
