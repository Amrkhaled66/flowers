import { createContext, ReactNode, useContext, useState } from "react";

const NavBarToggleBtns = createContext<
  | {
      openCart: boolean;
      openMenu: boolean;
      toggleCart: () => void;
      toggleMenu: () => void;
      reset: () => void;
    }
  | undefined
>(undefined);

const NavBarToggleBtnsProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleCart = () => setOpenCart((prev) => !prev);
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const reset = () => {
    setOpenCart(false);
    setOpenMenu(false);
  };

  const ctxValue = {
    openCart,
    openMenu,
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
