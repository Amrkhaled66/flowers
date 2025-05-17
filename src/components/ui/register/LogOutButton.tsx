import { Icon } from "@iconify/react/dist/iconify.js";

import { useAuth } from "src/context/authCtx";
import { useNavigate } from "react-router";
import useLogOutMutation from "src/hooks/auth/useLogOutMutation";
import { useTranslation } from "react-i18next";
const LogOutButton = ({ isMenuButton = false }: { isMenuButton?: boolean }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { mutate } = useLogOutMutation();
  const { i18n: { language } } = useTranslation()
  return (
    <button
      onClick={() => {
        mutate(undefined, {
          onSuccess: () => {
            logout();
            navigate("/signin");
          },
          onError: (error) => { console.error(error); },
        });
      }}
      className={`animate w-full rounded-xl ${isMenuButton && "pt-4"} ${!isMenuButton && "hover:lg:bg-main-100 bg-main-50 p-4"} `}
    >
      <div
        className={`text-text-main flex gap-x-2 ${!isMenuButton && "px-3"} font-medium`}
      >
        <span>
          <Icon icon="material-symbols:logout-rounded" width="24" height="24" />
        </span>
        <span>{language === "ar" ? "تسجيل الخروج" : "Logout"}</span>
      </div>
    </button>
  );
};

export default LogOutButton;
