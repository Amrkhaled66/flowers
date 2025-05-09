import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

import profileElements from "src/data/ProfileSideBarElements";
import LogOutButton from "src/components/ui/register/LogOutButton";

import { useTranslation } from "react-i18next";
const ProfileMenuButton = () => {
  const { t } = useTranslation("home");

  const [openMenu, setOpenMenu] = useState(false);
  const name = "Amr";

  const onCloseMenu = () => setOpenMenu(false);
  const onOpenMenu = () => setOpenMenu(true);

  const filteredElements = profileElements.filter(
    (item) => item.name !== "Ballora Points" && item.show !== false,
  );

  return (
    <div
      onMouseEnter={onOpenMenu}
      onMouseLeave={onCloseMenu}
      className="relative hidden lg:block"
    >
      <button className="relative flex items-center gap-x-2">
        <Icon icon="bi:person" width="24" height="24" />
        <span className="text-text-main hidden font-bold lg:block">
          {t("navBar.authWelcome")} {name}
        </span>
      </button>

      {openMenu && (
        <div
          className="absolute top-full right-0 z-50 mt-1 w-[300px] rounded-xl bg-white p-6 drop-shadow-xl"
          onMouseLeave={() => setOpenMenu(false)}
        >
          <div className="space-y-8 pb-4">
            {filteredElements.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={onCloseMenu}
                className="animate flex items-center gap-x-3"
              >
                <span>{item.icon}</span>
                <span className="text-text-main hidden font-medium text-nowrap lg:block">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="border-y-stroke flex items-center justify-between rounded-xl border-y py-4">
            <div className="animate flex items-center gap-x-3">
              <span>
                <Icon
                  icon="fluent:wallet-credit-card-32-regular"
                  width="24"
                  height="24"
                />
              </span>
              <span className="text-text-main hidden font-medium text-nowrap lg:block">
                Ballora Points
              </span>
            </div>
            <div className="bg-main-100 rounded-xl px-6 py-1 font-medium">
              0
            </div>
          </div>

          <LogOutButton isMenuButton />
        </div>
      )}
    </div>
  );
};

export default ProfileMenuButton;
