import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

import profileElements from "src/data/ProfileSideBarElements";
import ProfileSideBar from "src/types/ProfileSideBar";

const ProfileMenuButton = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const name = "Amr";

  return (
    <div
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
      onClick={() => setOpenMenu((prev) => !prev)}
    >
      <button className="relative flex gap-x-2">
        <Icon icon="bi:person" width="24" height="24" />
        <span className="text-text-main hidden font-bold lg:block">
          hello {name}
        </span>
        {openMenu && (
          <div className="absolute top-6 right-0 min-w-[300px] space-y-8 rounded-xl bg-white p-6 drop-shadow-xl">
            {profileElements.map((item: ProfileSideBar) => (
              <Link
                onClick={() => setOpenMenu(false)}
                to={item.link}
                className="animate flex items-center gap-x-3 hover:translate-x-4"
              >
                {<span>{item.icon}</span>}
                <span className="text-text-main hidden font-bold text-nowrap lg:block">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default ProfileMenuButton;
