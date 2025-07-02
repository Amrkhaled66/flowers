import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

import profileElements from "src/data/ProfileSideBarElements";
import LogOutButton from "src/components/ui/register/LogOutButton";
import priceFormatter from "src/utils/priceFormatter";

import { useTranslation } from "react-i18next";
import { useAuth } from "src/context/authCtx";

const ProfileMenuButton = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("layout");

  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const {
    authData: { user },
  } = useAuth();
  const onCloseMenu = () => setOpenMenu(false);
  const onOpenMenu = () => setOpenMenu(true);

  const filteredElements = profileElements.filter(
    (item) => item.nameEn !== "Ballora Ballance" && item.show !== false,
  );

  return (
    <div
      onMouseEnter={onOpenMenu}
      onMouseLeave={onCloseMenu}
      className="relative hidden lg:block"
    >
      <Link to="/profile/userInfo">
        <button
          className={`hover:bg-main-100 animate relative flex items-center gap-x-2 rounded-xl p-2 ${openMenu && "bg-main-100"}`}
        >
          <Icon icon="bi:person" width="24" height="24" />
          <span className="text-text-main hidden font-bold lg:block">
            {t("navBar.authWelcome")} {user?.first_name}
          </span>
        </button>
      </Link>

      {(openMenu || isLoggingOut) && (
        <div
          className="absolute end-0 top-full z-50 mt-0 w-[300px] rounded-xl bg-white p-6 drop-shadow-xl"
          onMouseLeave={() => setOpenMenu(false)}
        >
          <div className="space-y-3 pb-4">
            {filteredElements.map((item) => (
              <Link
                key={item.nameEn}
                to={item.link}
                onClick={onCloseMenu}
                className="animate hover:bg-main-100 flex items-center gap-x-3 rounded-xl py-2"
              >
                <span>{item.icon}</span>
                <span className="text-text-main hidden font-medium text-nowrap lg:block">
                  {language === "en" ? item.nameEn : item.nameAr}
                </span>
              </Link>
            ))}
          </div>

          <Link to={"/profile/ballance"}>
            <div className="border-y-stroke flex items-center justify-between rounded-xl border-y py-4">
              <div className="animate flex items-center gap-x-3">
                <span>
                  <Icon icon="majesticons:coins" width="24" height="24" />
                </span>
                <span className="text-text-main hidden font-medium text-nowrap lg:block">
                  {language === "en" ? "Ballora Ballance" : "رصيد بلورا"}
                </span>
              </div>
              <div className="bg-main-100 rounded-xl px-2 py-1 text-sm font-medium">
                {priceFormatter(user?.balance)}
              </div>
            </div>
          </Link>

          <LogOutButton
            handlePresistMenu={() => setIsLoggingOut(true)}
            isMenuButton
          />
        </div>
      )}
    </div>
  );
};

export default ProfileMenuButton;
