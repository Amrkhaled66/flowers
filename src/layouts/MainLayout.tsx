import { Outlet } from "react-router";
import NavBar from "src/sections/layout/NavBar";
import Footer from "src/sections/layout/Footer";
import Cart from "src/sections/layout/Cart";
import Menu from "src/sections/layout/Menu";
import Overlay from "src/components/ui/Overlay";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
const MainLayout = () => {
  const { openCart, openMenu } = useNavBarToggleBtns();
  return (
    <div  className="h-auto pt-[104px] lg:pt-[155px]" >
      <NavBar />
      <Outlet />
      <Footer />
      <Cart />
      <Menu />
      {(openCart || openMenu) && <Overlay />}
    </div>
  );
};
export default MainLayout;
