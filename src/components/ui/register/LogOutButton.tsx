import { Icon } from "@iconify/react/dist/iconify.js";
const LogOutButton = ({ isMenuButton = false }: { isMenuButton?: boolean }) => {
  return (
    <button
      className={`animate w-full rounded-xl ${isMenuButton && "pt-4"} ${!isMenuButton && "hover:lg:bg-main-100 bg-main-50 p-4"} `}
    >
      <div
        className={`text-text-main flex gap-x-2 ${!isMenuButton && "px-3"} font-medium`}
      >
        <span>
          <Icon icon="material-symbols:logout-rounded" width="24" height="24" />
        </span>
        <span> Logout</span>
      </div>
    </button>
  );
};

export default LogOutButton;
