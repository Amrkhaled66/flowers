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
import { AxiosProvider } from "src/context/axiosProvider";

const MainLayout = () => {
  const { openCart, openMenu, openSearch } = useNavBarToggleBtns();
  const { i18n } = useTranslation();

  const { isLoading: cartLoading } = useGetCart();
  const { isLoading: favLoading } = useGetFavorites();
  const { isLoading } = useGetProfileMutation()
  return (
    <AxiosProvider>
      <div
        dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
        className={`h-auto pt-[104px] lg:pt-[155px] ${i18n.language === "ar" ? "font-ar" : "font-en"} `}
      >
        {(isLoading || cartLoading || favLoading) && <BalloraLoader />}
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
