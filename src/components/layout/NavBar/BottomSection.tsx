import { Icon } from "@iconify/react/dist/iconify.js";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { useTranslation } from "react-i18next";

import Logo1 from "src/assets/Logo1.webp";
import { Link } from "react-router-dom";

import ProfileMenuButton from "./ProfileMenuButton";
import ProfileMenuButtonMobile from "./ProfileMenuButtonMobile";

import { useAuth } from "src/context/authCtx";
import { useCart } from "src/context/user/cartCtx";
const BottomSection = () => {
  const { toggleMenu, toggleCart, toggleSearch } = useNavBarToggleBtns();
  const { t } = useTranslation("layout");
  const { isAuthenticated } = useAuth();
  const { cartLength } = useCart();

  return (
    <div className="z-50 w-screen bg-white py-3 drop-shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            <button onClick={toggleMenu} className="flex items-center gap-x-2">
              <Icon
                icon="material-symbols:menu-rounded"
                width="24"
                height="24"
              />
              <span className="text-text-main hidden font-bold lg:block">
                {t("navBar.menu")}
              </span>
            </button>
            <button onClick={toggleSearch} className="flex gap-x-2">
              <Icon icon="ic:baseline-search" width="24" height="24" />
              <span className="text-text-main hidden font-bold lg:block">
                {t("navBar.search")}
              </span>
            </button>
          </div>
          <Link to="/">
            <div className="h-[44px] w-[90px] lg:h-[95px] lg:w-[180px]">
              <img className="size-full object-cover" src={Logo1} alt="" />
            </div>
          </Link>
          <div className="flex items-center gap-x-6">
            {isAuthenticated ? (
              <>
                <ProfileMenuButton />
                <ProfileMenuButtonMobile />
              </>
            ) : (
              <Link to="/signin" className="flex items-center gap-x-2">
                <Icon icon="bi:person" width="24" height="24" />
                <span className="text-text-main hidden font-bold lg:block">
                  {t("navBar.account")}
                </span>
              </Link>
            )}
            <button onClick={toggleCart} className="flex items-center gap-x-2">
              <div className="relative">
                <Icon icon="lineicons:cart-1" width="24" height="24" />
                <span className="bg-main absolute right-0 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-700 text-xs text-white">
                  {cartLength || 0}
                </span>
              </div>
              <span className="text-text-main hidden font-bold lg:block">
                {t("navBar.cart")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
