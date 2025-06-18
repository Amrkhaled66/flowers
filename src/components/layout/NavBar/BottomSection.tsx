import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { useTranslation } from "react-i18next";
import Logo1 from "src/assets/Logo1.webp";
import { Link } from "react-router-dom";
import ProfileMenuButton from "./ProfileMenuButton";
import ProfileMenuButtonMobile from "./ProfileMenuButtonMobile";
import { useAuth } from "src/context/authCtx";
import { useCart } from "src/context/user/cartCtx";

type NavButtonProps = {
  onClick: () => void;
  icon: string;
  label: string;
  className?: string;
  iconClassName?: string;
  children?: React.ReactNode;
};

const NavButton = ({
  onClick,
  icon,
  label,
  className = "",
  iconClassName = "",
  children,
}: NavButtonProps) => (
  <button
    onClick={onClick}
    className={`hover:bg-main-100 animate relative flex items-center gap-x-2 rounded-xl p-2 ${className}`}
  >
    <div className="relative">
      <Icon icon={icon} width="24" height="24" className={iconClassName} />
      {children}
    </div>
    <span className="text-text-main hidden font-bold lg:block">{label}</span>
  </button>
);

const BottomSection = () => {
  const {
    toggleMenu,
    toggleCart,
    // toggleSearch
  } = useNavBarToggleBtns();
  const { t } = useTranslation("layout");
  const { isAuthenticated } = useAuth();
  const { cartLength } = useCart();

  return (
    <div className="z-50 w-screen bg-white py-3 drop-shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-x-5">
            <NavButton
              onClick={toggleMenu}
              icon="material-symbols:menu-rounded"
              label={t("navBar.menu")}
            />
            {/* <NavButton
              onClick={toggleSearch}
              icon="ic:baseline-search"
              label={t("navBar.search")}
            /> */}
          </div>
          {/* Logo */}
          <Link to="/">
            <div className="h-[44px] w-[90px] lg:h-[95px] lg:w-[180px]">
              <img className="size-full object-cover" src={Logo1} alt="Logo" />
            </div>
          </Link>
          {/* Right Section */}
          <div className="flex items-center gap-x-5">
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
            <NavButton
              onClick={toggleCart}
              icon="lineicons:cart-1"
              label={t("navBar.cart")}
            >
              <span className="bg-main absolute -top-2 left-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-700 text-xs text-white">
                {cartLength || 0}
              </span>
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
