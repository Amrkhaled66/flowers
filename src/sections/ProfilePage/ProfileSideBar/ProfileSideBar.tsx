import BarElement from "src/components/ProfilePage/ProfileSideBar/BarElement";
import Elements from "../../../data/ProfileSideBarElements";

import { Icon } from "@iconify/react/dist/iconify.js";
const ProfileSideBar = () => {
  return (
    <div className="w-[22%] space-y-6">
      <div className="border-stroke bg-main-50 space-y-1 rounded-xl border p-4">
        {Elements.map((element) => {
          return (
            <BarElement
              name={element.name}
              icon={element.icon}
              link={element.link}
            />
          );
        })}
      </div>
      <button className="hover:bg-main-100 animate bg-main-50 w-full rounded-xl p-4">
        <div className="text-text-main flex gap-x-2 px-3 font-medium">
          <span>
            <Icon
              icon="material-symbols:logout-rounded"
              width="24"
              height="24"
            />
          </span>
          <span> Logout</span>
        </div>
      </button>
      <button className="hover:bg-main-100 animate bg-main-50 w-full rounded-xl p-4">
        <div className="text-red flex gap-x-2 px-3 font-medium">
          <span>
            <Icon icon="fluent:delete-24-regular" width="24" height="24" />
          </span>
          <span> Delete Account</span>
        </div>
      </button>
    </div>
  );
};

export default ProfileSideBar;
