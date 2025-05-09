import { Icon } from "@iconify/react/dist/iconify.js";
const DeleteAccount = () => {
  return (
    <button className="hover:lg:bg-main-100 animate bg-main-50 w-full rounded-xl p-4">
      <div className="text-red flex gap-x-2 px-3 font-medium">
        <span>
          <Icon icon="fluent:delete-24-regular" width="24" height="24" />
        </span>
        <span> Delete Account</span>
      </div>
    </button>
  );
};

export default DeleteAccount;
