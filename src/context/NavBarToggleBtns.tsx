import { createContext, ReactNode, useContext, useState } from "react";

const NavBarToggleBtns = createContext<
  | {
      openCart: boolean;
      openMenu: boolean;
      openSearch: boolean;
      toggleSearch: () => void;
      toggleCart: () => void;
      toggleMenu: () => void;
      reset: () => void;
    }
  | undefined
>(undefined);

const NavBarToggleBtnsProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const toggleCart = () => setOpenCart((prev) => !prev);
  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const toggleSearch = () => setOpenSearch((prev) => !prev);

  const reset = () => {
    setOpenCart(false);
    setOpenMenu(false);
    setOpenSearch(false);
  };

  const ctxValue = {
    openCart,
    openMenu,
    openSearch,
    toggleSearch,
    toggleCart,
    toggleMenu,
    reset,
  };

  return (
    <NavBarToggleBtns.Provider value={ctxValue}>
      {children}
    </NavBarToggleBtns.Provider>
  );
};

const useNavBarToggleBtns = () => {
  const context = useContext(NavBarToggleBtns);
  if (!context) {
    throw new Error("useNavBarToggleBtns Context");
  }
  return context;
};

export default NavBarToggleBtnsProvider;

export { useNavBarToggleBtns };
