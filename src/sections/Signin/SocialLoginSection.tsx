import { Icon } from "@iconify/react/dist/iconify.js";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const SocialLoginSection = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const access_token = (tokenResponse as any).access_token;
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        );

        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch user info", err);
      }
    },
    onError: (err) => {
      console.error("Login Failed", err);
    },
    flow: "auth-code",
    scope: "openid profile email",
  });
  return (
    <div className="space-y-5">
      <p className="text-text-main text-xl">Continue with one click</p>
      <div className="space-x-4">
        <button
          onClick={() => googleLogin()}
          className="border-stroke rounded-xl border bg-white p-2.5"
        >
          <Icon icon="flat-color-icons:google" width="32" height="32" />
        </button>
        <button className="border-stroke rounded-xl border bg-white p-2.5">
          <Icon icon="logos:apple" width="32" height="32" />
        </button>
      </div>
      <p className="text-subTitle">Or use your account</p>
    </div>
  );
};

export default SocialLoginSection;
