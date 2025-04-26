import SignUpForm from "src/sections/Signup/SignUpForm";

import RegisterPage from "src/components/ui/register/RegisterPage";
const SignUpPage = () => {
  return (
    <RegisterPage title="Create Account">
      <SignUpForm />
    </RegisterPage>
  );
};

export default SignUpPage;
