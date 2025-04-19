import { Icon } from "@iconify/react/dist/iconify.js";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

import Logo from "src/components/ui/Logo";
const BottomSection = () => {
  const { toggleMenu } = useNavBarToggleBtns();
  return (
    <div className="sticky -top-1 z-50 w-screen bg-white drop-shadow-md">
      <div className="container">
        <div className="flex items-center justify-between pb-3 pt-5">
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
          <div className=" relative">
            <Logo />
          </div>
          <div className="flex gap-x-6">
            <button className="flex gap-x-2">
              <Icon icon="bi:person" width="24" height="24" />
              <span className="text-text-main hidden font-bold lg:block">
                My Account
              </span>
            </button>
            <button className="flex gap-x-2">
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
