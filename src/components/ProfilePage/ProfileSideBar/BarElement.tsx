import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
const BarElement = ({
  name,
  icon,
  link,
}: {
  name: string;
  icon: ReactNode;
  link: string;
}) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `text-text-main hover:bg-main-300 animate flex w-full items-center gap-x-2 rounded-sm px-3 py-3 text-base font-medium ${
          isActive ? "bg-main-300 !font-bold" : ""
        }`
      }
    >
      <span>{icon}</span>
      <span>{name}</span>
    </NavLink>
  );
};

export default BarElement;
