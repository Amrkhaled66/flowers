import BarElement from "src/components/ProfilePage/ProfileSideBar/BarElement";
import Elements from "../../../data/ProfileSideBarElements";

import LogOutButton from "src/components/ui/register/LogOutButton";
import DeleteAccount from "src/components/ui/register/DeleteAccount";
const ProfileSideBar = () => {
  return (
    <div className="hidden w-[22%] space-y-6 lg:block">
      <div className="border-stroke bg-main-50 space-y-1 rounded-xl border p-4">
        {Elements.map((element) => {
          if (element.show === false) return;
          return (
            <BarElement
              name={element.name}
              icon={element.icon}
              link={element.link}
            />
          );
        })}
      </div>
      <LogOutButton />
      <DeleteAccount />
    </div>
  );
};

export default ProfileSideBar;
