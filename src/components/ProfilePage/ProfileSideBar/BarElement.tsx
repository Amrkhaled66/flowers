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
        `text-text-main hover:bg-main-100 animate flex w-full items-center gap-x-2 rounded-xl px-3 py-3 text-base font-medium ${
          isActive ? "bg-main-100 !font-bold" : ""
        }`
      }
    >
      <span>{icon}</span>
      <span>{name}</span>
    </NavLink>
  );
};

export default BarElement;
