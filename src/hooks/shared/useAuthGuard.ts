import Alert from "src/components/ui/Alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/context/authCtx";
import { useTranslation } from "react-i18next";

export const useAuthGuard = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation("errors");
  const navigate = useNavigate();

  const check = async (): Promise<boolean> => {
    if (!isAuthenticated) {
      await Alert({
        title: t("warning"),
        text: t("unauthorized"),
        icon: "warning",
        confirmButtonText: t("login"),
      });
      navigate("/signin");
      return false;
    }
    return true;
  };

  return { check };
};
