import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useAuth } from "src/context/authCtx";
const Row = ({ name, value }: { name: string; value: string | undefined }) => {
  return (
    <div className="flex py-2 lg:px-3">
      <p className="w-[50%] font-bold text-nowrap sm:w-[30%] lg:w-[20%]">
        {name}:
      </p>
      <p>{value}</p>
    </div>
  );
};
const ProfileInfo = () => {
  const { authData: { user } } = useAuth();
  const { t } = useTranslation("profile");
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <Row name={t("info.email")} value={user?.email} />
        <Row name={t("info.firstName")} value={user?.first_name} />
        <Row name={t("info.lastName")} value={user?.last_name} />
        <Row name={t("info.phone")} value={user?.phone_number} />
      </div>
      <Link to={"/profile/editProfile"}>
        <div className="text-text-main w-fit bg-main-100 flex items-center gap-x-2 rounded-xl px-6 py-2 text-xs font-bold">
          <Icon icon="lucide:edit" width="24" height="24" />
          <p>{t("edit")}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProfileInfo;
