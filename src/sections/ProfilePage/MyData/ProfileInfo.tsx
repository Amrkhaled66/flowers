import { Icon } from "@iconify/react/dist/iconify.js";

const Row = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex px-3 py-2">
      <p className="w-[20%] font-bold">{name}:</p>
      <p>{value}</p>
    </div>
  );
};
const ProfileInfo = ({ onEdit }: { onEdit: () => void }) => {
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <Row name={"Email"} value={"r8B2o@example.com"} />
        <Row name={"First Name"} value={"Ayman"} />
        <Row name={"Last Name"} value={"Elhadary"} />
        <Row name={"Phone Number"} value={"+971 50 123 4567"} />
      </div>
      <button
        onClick={onEdit}
        className="text-text-main bg-main-100 flex items-center gap-x-2 rounded-xl px-6 py-2 text-xs font-bold"
      >
        <Icon icon="lucide:edit" width="24" height="24" />
        <p>Edit</p>
      </button>
    </div>
  );
};

export default ProfileInfo;
