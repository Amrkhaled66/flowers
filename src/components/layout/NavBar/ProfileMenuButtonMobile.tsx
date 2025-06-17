import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

import profileElements from "src/data/ProfileSideBarElements";
import ProfileSideBar from "src/types/ProfileSideBar";
import LogOutButton from "src/components/ui/register/LogOutButton";
import DeleteAccount from "src/components/ui/register/DeleteAccount";
import priceFormatter from "src/utils/priceFormatter";

import { getLocalizedName } from "src/utils/getLocalizedName";

import { useAuth } from "src/context/authCtx";
import { useTranslation } from "react-i18next";
const ProfileMenuButtonMobile = () => {
  const [open, setOpen] = useState(false);
  const {
    t,
    i18n: { language },
  } = useTranslation("profile");
  const {
    authData: { user },
  } = useAuth();

  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center"
      >
        <Icon icon="bi:person" width="24" height="24" />
      </button>
      <div
        className={`text-text-main fixed inset-0 top-0 z-[1000] space-y-5 lg:hidden ${open ? "translate-x-0" : "-translate-x-[100%]"} animate h-screen w-full rounded-xl bg-white p-6 drop-shadow-xl`}
      >
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">{t("header")}</h1>
          <button
            className="border-stroke flex h-[34px] w-[34px] items-center justify-center border"
            onClick={() => setOpen(false)}
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-main-50 rounded-xl p-4">
            {profileElements.map((item: ProfileSideBar, index: number) => {
              if (item.nameEn === "Ballora Points" || item.show === false)
                return null;
              return (
                <Link
                  key={item.nameEn}
                  onClick={() => setOpen(false)}
                  to={item.link}
                >
                  <div
                    className={`flex ${index !== profileElements.length - 1 && "border-b"} border-b-stroke items-center justify-between py-2`}
                  >
                    <div className="flex gap-x-3">
                      {item.icon}
                      <p className="text-text-main font-medium">
                        {getLocalizedName(item)}
                      </p>
                    </div>
                    <Icon icon="jam:chevron-right" width="24" height="24" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="bg-main-50 rounded-xl p-4">
            <Link onClick={() => setOpen(false)} to={"/profile/points"}>
              <div className="flex items-center justify-between">
                <div className="animate flex items-center gap-x-3 py-2">
                  <span>
                    <Icon
                      icon="fluent:wallet-credit-card-32-regular"
                      width="24"
                      height="24"
                    />
                  </span>
                  <span className="text-text-main font-medium text-nowrap">
                    {language === "en" ? "Ballora Balance" : "رصيد بلورا"}
                  </span>
                </div>
                <div className="bg-main-100 rounded-xl px-2 lg:px-6 py-1 font-medium">
                  {priceFormatter(user?.balance)}
                </div>
              </div>
            </Link>
          </div>
          <LogOutButton />

          <DeleteAccount />
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuButtonMobile;
