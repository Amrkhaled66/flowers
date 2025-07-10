import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import profileElements from "src/data/ProfileSideBarElements";
import LogOutButton from "src/components/ui/register/LogOutButton";
import DeleteAccount from "src/components/ui/register/DeleteAccount";
import priceFormatter from "src/utils/priceFormatter";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { useAuth } from "src/context/authCtx";
import { useTranslation } from "react-i18next";
import useScrollLock from "src/hooks/ui/useScrollLock";

// ─────────────────────────────────────────
// Reusable Components
// ─────────────────────────────────────────

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="bg-main animate flex h-[34px] w-[34px] items-center justify-center rounded-lg border text-white hover:drop-shadow-xl"
    onClick={onClick}
  >
    <Icon icon="material-symbols:close-rounded" width="24" height="24" />
  </button>
);

const ProfileUserCard = ({
  user,
  onClick,
}: {
  user: any;
  onClick: () => void;
}) => (
  <Link to="/profile/userInfo" onClick={onClick}>
    <div className="bg-main-50 border-b-stroke flex items-start justify-between rounded-xl p-3">
      <div className="flex items-start gap-x-3">
        <div className="text-main flex size-[54px] items-center justify-center rounded-full bg-white">
          <Icon icon="lsicon:user-filled" width="36" height="36" />
        </div>
        <div>
          <p className="text-lg font-bold">
            {user?.first_name + " " + user?.last_name}
          </p>
          <p className="text-subTitle text-sm">{user?.phone_number}</p>
        </div>
      </div>
    </div>
  </Link>
);

const ProfileLinkCard = ({
  icon,
  label,
  link,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  link: string;
  onClick: () => void;
}) => (
  <Link to={link} onClick={onClick}>
    <div className="bg-main-50 border-b-stroke flex items-start justify-between rounded-xl px-3 py-2">
      <div className="flex flex-col gap-y-2">
        {icon}
        <p className="text-text-main text-sm font-medium text-nowrap">
          {label}
        </p>
      </div>
      <Icon icon="jam:chevron-right" width="24" height="24" />
    </div>
  </Link>
);

const BalloraBalanceCard = ({
  balance,
  language,
  onClick,
}: {
  balance: number | string;
  language: string;
  onClick: () => void;
}) => (
  <Link to="/profile/ballance" onClick={onClick}>
    <div className="bg-main-50 border-b-stroke flex items-start justify-between rounded-xl px-3 py-2">
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col gap-y-2">
          <Icon
            icon="fluent:wallet-credit-card-32-regular"
            width="24"
            height="24"
          />
          <p className="text-text-main text-sm font-medium text-nowrap">
            {language === "en" ? "Ballora Ballance" : "رصيد بلورا"}
          </p>
        </div>
        <div className="bg-main-100 rounded-lg px-2 py-1 text-xs font-medium lg:px-6">
          {priceFormatter(balance)}
        </div>
      </div>
    </div>
  </Link>
);

// ─────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────

const ProfileMenuButtonMobile = () => {
  const [open, setOpen] = useState(false);
  const {
    t,
    i18n: { language },
  } = useTranslation("profile");
  const { t: tLayout } = useTranslation("layout");
  const {
    authData: { user },
  } = useAuth();

  useScrollLock(open);

  const closeMenu = () => setOpen(false);

  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center"
      >
        <Icon icon="bi:person" width="24" height="24" />
      </button>

      <div
        className={`text-text-main fixed end-0 top-0 z-[1000]   lg:hidden ${open ? "end-0" : "end-full"
          } animate h-screen w-full rounded-xl bg-white  drop-shadow-xl`}
      >
        <div className="h-[85vh] overflow-auto space-y-5 p-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">{t("header")}</h1>
            <CloseButton onClick={closeMenu} />
          </div>

          <div className="flex flex-col gap-y-4">
            <ProfileUserCard user={user} onClick={closeMenu} />

            <div className="grid grid-cols-2 gap-4 rounded-xl">
              {profileElements.map((item) => {
                if (item.nameEn === "Ballora Ballance" || item.show === false)
                  return null;

                return (
                  <ProfileLinkCard
                    key={item.nameEn}
                    icon={item.icon}
                    label={getLocalizedName(item)}
                    link={item.link}
                    onClick={closeMenu}
                  />
                );
              })}
              <BalloraBalanceCard
                balance={user?.balance || 0}
                language={language}
                onClick={closeMenu}
              />
            </div>

            <Link onClick={closeMenu} to={`privacy-policy`}>
              <div className="animate bg-main-50 flex w-full items-center gap-x-3 rounded-xl p-4">
                <Icon
                  icon="material-symbols-light:privacy-tip-rounded"
                  width="32"
                  height="32"
                />
                {tLayout("footer.privacy")}
              </div>
            </Link>

            <Link onClick={closeMenu} to={`terms-conditions`}>
              <div className="animate bg-main-50 flex w-full items-center gap-x-3 rounded-xl p-4">
                <Icon icon="carbon:document" width="32" height="32" />
                {tLayout("footer.terms")}
              </div>
            </Link>

            <LogOutButton />
            <DeleteAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuButtonMobile;
