import { useTranslation } from "react-i18next";
import { useAuth } from "src/context/authCtx";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
const ChangePhoneNumberSection = () => {
  const {
    authData: { user },
  } = useAuth();
  const { t } = useTranslation("profile");
  return (
    <div>
      <div className="flex flex-col gap-y-3 font-bold">
        <h2>{t("info.phone")}</h2>
        <p>+{user?.phone_number}</p>
      </div>
      <Link to="/profile/changePhoneNumber">
        <div className="text-text-main bg-main-100 mt-5 flex w-fit items-center gap-x-2 rounded-xl px-6 py-2 text-xs font-bold">
          <Icon icon="lucide:edit" width="24" height="24" />
          <p>{t("edit")}</p>
        </div>
      </Link>
    </div>
  );
};

export default ChangePhoneNumberSection;
