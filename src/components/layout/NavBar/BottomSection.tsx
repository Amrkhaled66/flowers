import { Icon } from "@iconify/react/dist/iconify.js";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

import Logo1 from "src/assets/Logo1.webp";
import { Link } from "react-router-dom";
const BottomSection = () => {
  const { toggleMenu, toggleCart } = useNavBarToggleBtns();
  return (
    <div className="z-50 w-screen bg-white py-3 drop-shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-6">
            <button onClick={toggleMenu} className="flex items-center gap-x-2">
              <Icon
                icon="material-symbols:menu-rounded"
                width="24"
                height="24"
              />
              <span className="text-text-main hidden font-bold lg:block">
                Menu
              </span>
            </button>
            <button className="flex gap-x-2">
              <Icon icon="ic:baseline-search" width="24" height="24" />
              <span className="text-text-main hidden font-bold lg:block">
                Search
              </span>
            </button>
          </div>
          <Link to="/">
            <div className="h-[44px] w-[90px] lg:h-[95px] lg:w-[180px]">
              <img className="size-full object-cover" src={Logo1} alt="" />
            </div>
          </Link>
          <div className="flex gap-x-6">
            <Link to="/signin" className="flex gap-x-2">
              <Icon icon="bi:person" width="24" height="24" />
              <span className="text-text-main hidden font-bold lg:block">
                My Account
              </span>
            </Link>
            <button onClick={toggleCart} className="flex gap-x-2">
              <Icon icon="carbon:shopping-cart" width="24" height="24" />{" "}
              <span className="text-text-main hidden font-bold lg:block">
                Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
