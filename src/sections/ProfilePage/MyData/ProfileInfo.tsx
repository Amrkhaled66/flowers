import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
const Row = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex py-2 lg:px-3">
      <p className="w-[50%] font-bold text-nowrap sm:w-[30%] lg:w-[20%]">
        {name}:
      </p>
      <p>{value}</p>
    </div>
  );
};
const ProfileInfo = () => {
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <Row name={"Email"} value={"r8B2o@example.com"} />
        <Row name={"First Name"} value={"Ayman"} />
        <Row name={"Last Name"} value={"Elhadary"} />
        <Row name={"Phone Number"} value={"+971 50 123 4567"} />
      </div>
      <Link to={"/profile/editProfile"}>
        <div className="text-text-main w-fit bg-main-100 flex items-center gap-x-2 rounded-xl px-6 py-2 text-xs font-bold">
          <Icon icon="lucide:edit" width="24" height="24" />
          <p>Edit</p>
        </div>
      </Link>
    </div>
  );
};

export default ProfileInfo;
