import { Outlet } from "react-router";
import NavBar from "src/sections/layout/NavBar";
import Footer from "src/sections/layout/Footer";
import Cart from "src/sections/layout/Cart";
import Menu from "src/sections/layout/Menu";
import Overlay from "src/components/ui/Overlay";
import Search from "./Search";
import ScrollToTop from "src/components/ScroolToTop";
import BalloraLoader from "src/components/ui/BalloraLoader/BalloraLoader";

import { useTranslation } from "react-i18next";
import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { useGetCart } from "src/hooks/cart/useCartMutations";
import { useGetFavorites } from "src/hooks/profile/favorites/FavoritesMutations";
import { useGetProfileMutation } from "src/hooks/profile/useProfileMutation";
import { useGetConfig } from "src/hooks/sharedApi";
import { AxiosProvider } from "src/context/axiosProvider";
import { useConfig } from "src/context/configCtx";
import { useEffect } from "react";
const MainLayout = () => {
  const { openCart, openMenu, openSearch } = useNavBarToggleBtns();
  const { i18n } = useTranslation();

  const { isLoading: cartLoading } = useGetCart();
  const { isLoading: favLoading } = useGetFavorites();
  const { isLoading: profileLoading } = useGetProfileMutation();
  const { isLoading: configLoading } = useGetConfig();

  const { config } = useConfig();
  const { name, description, keywords, favicon } = config || {};

  useEffect(() => {
    if (configLoading) return;
    document.title = name || "Ballora";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description || "Ballora store");
    {
      keywords &&
        document
          .querySelector("meta[name='keywords']")
          ?.setAttribute("content", keywords || "Ballora store");
    }
    {
      keywords &&
        document
          .querySelector("link[rel='icon']")
          ?.setAttribute("href", favicon || "");
    }
  }, [configLoading]);

  return (
    <AxiosProvider>
      <div
        id="mainLayout"
        dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
        className={` ${i18n.language === "ar" ? "font-ar" : "font-en"} `}
      >
        <BalloraLoader
          isOpen={profileLoading || cartLoading || favLoading || configLoading}
        />
        <ScrollToTop />
        <Search />
        <NavBar />
        <Outlet />
        <Footer />
        <Cart />
        <Menu />
        <Overlay show={openCart || openMenu || openSearch} />
      </div>
    </AxiosProvider>
  );
};
export default MainLayout;
