import { Outlet } from "react-router";
import ProfileSideBar from "src/sections/ProfilePage/ProfileSideBar/ProfileSideBar";
import { Link } from "react-router-dom";

import ProfileNav from "src/components/layout/ProfileNav/ProfileNav";
import { useTranslation } from "react-i18next";
const ProfilePage = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="text-text-main h-fit py-6 lg:h-auto lg:min-h-dvh lg:py-10">
      <div className="container space-y-5 lg:space-y-6">
        <div className="flex items-center gap-x-1 font-bold lg:text-2xl">
          <Link to={"/profile/mydata"}>
            <h1>{t("header")}</h1>
          </Link>
          <div className="block lg:hidden">
            <ProfileNav />
          </div>
        </div>
        <div className="flex space-x-[37px]">
          <ProfileSideBar />
          <div className="bg-main-50 h-fit flex-1 rounded-xl p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
