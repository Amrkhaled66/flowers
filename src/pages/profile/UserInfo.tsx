import ProfileInfo from "src/sections/ProfilePage/UserInfo/ProfileInfo";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
// import ChangePhoneNumberSection from "src/sections/ProfilePage/MyData/ChangePhoneNumberSection";

const UserInfo = () => {
  return (
    <div className="flex-1 space-y-[37px]">
      <ProfilePageCompetent>
        <ProfileInfo />
      </ProfilePageCompetent>
      {/* <ProfilePageCompetent>
        <ChangePhoneNumberSection />
      </ProfilePageCompetent> */}
    </div>
  );
};

export default UserInfo;
