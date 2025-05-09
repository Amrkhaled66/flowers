import { Outlet } from "react-router";
import ProfileSideBar from "src/sections/ProfilePage/ProfileSideBar/ProfileSideBar";
import { Link } from "react-router-dom";

import ProfileNav from "src/components/layout/ProfileNav/ProfileNav";
const ProfilePage = () => {
  return (
    <div className="font-main text-text-main h-fit py-6 lg:h-auto lg:min-h-dvh lg:py-10">
      <div className="container space-y-5 lg:space-y-6">
        <div className="flex items-center gap-x-1 font-bold lg:text-2xl">
          <Link to={"/profile/mydata"}>
            <h1>My Account</h1>
          </Link>
          <p className="block lg:hidden">
            <ProfileNav />
          </p>
        </div>
        <div className="flex space-x-[37px]">
          <ProfileSideBar />
          <div className="bg-main-50 h-fit flex-1 rounded-xl p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
