import React from "react";
import Logo from "src/assets/logo.svg?react";

import { Icon } from "@iconify/react/dist/iconify.js";

const BottomSection = () => {
  return (
    <div className="container ">
      <div className="flex py-3 justify-between items-center">
        <div className="flex gap-x-6">
          <button className="flex gap-x-2">
            <Icon icon="material-symbols:menu-rounded" width="24" height="24" />{" "}
            <span className="text-text-main font-bold">Menu</span>
          </button>
          <button className="flex gap-x-2">
            <Icon icon="ic:baseline-search" width="24" height="24" />
            <span className="text-text-main font-bold">Search</span>
          </button>
        </div>
        <div>
          <Logo />
        </div>
        <div className="flex gap-x-6">
          <button className="flex gap-x-2">
            <Icon icon="bi:person" width="24" height="24" />
            <span className="text-text-main font-bold">My Account</span>
          </button>
          <button className="flex gap-x-2">
            <Icon icon="carbon:shopping-cart" width="24" height="24" />{" "}
            <span className="text-text-main font-bold">Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
