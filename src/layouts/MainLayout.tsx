import { Outlet } from "react-router";
import NavBar from "src/sections/layout/NavBar";
import Footer from "src/sections/layout/Footer";
import Cart from "src/sections/layout/Cart";
import Menu from "src/sections/layout/Menu";
import Overlay from "src/components/ui/Overlay";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import Search from "./Search";
import ScrollToTop from "src/components/ScroolToTop";

import { useTranslation } from "react-i18next";
import useAxiosPrivate from "src/hooks/shared/useAxiosPrivate";

const MainLayout = () => {
  useAxiosPrivate();
  const { openCart, openMenu, openSearch } = useNavBarToggleBtns();
  const { i18n } = useTranslation();

  return (
    <div
      dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
      className={`h-auto pt-[104px] lg:pt-[155px] ${i18n.language === "ar" ? "font-ar" : "font-en"} `}
    >
      <ScrollToTop />
      <Search />
      <NavBar />
      <Outlet />
      <Footer />
      <Cart />
      <Menu />
      {(openCart || openMenu || openSearch) && <Overlay />}
    </div>
  );
};
export default MainLayout;
