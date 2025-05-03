import { Outlet } from "react-router";
import ProfileSideBar from "src/sections/ProfilePage/ProfileSideBar/ProfileSideBar";
const ProfilePage = () => {
  return (
    <div className="font-main text-text-main h-auto min-h-dvh py-10">
      <div className="container space-y-6">
        <h1 className="text-2xl font-bold">My Account</h1>
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
