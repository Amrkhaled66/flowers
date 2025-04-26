import { Outlet } from "react-router";
import ProfileSideBar from "src/sections/ProfilePage/ProfileSideBar";
const ProfilePage = () => {
  return (
    <div className="font-main text-text-main h-auto min-h-dvh bg-gray-100 py-10">
      <div className="container space-y-6">
        <h1 className="text-2xl font-bold">My Account</h1>
        <div className="flex space-x-[37px]">
          <ProfileSideBar />
          <div className="flex-1 bg-white h-fit p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
