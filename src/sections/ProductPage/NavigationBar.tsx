import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
const NavigationBar = ({
  name,
  className = " hidden lg:flex",
}: {
  name: string | undefined;
  className?: string;
}) => {
  return (
    <div className={`text-text-main items-center gap-x-1 text-sm ${className}`}>
      <Link to="/">Home</Link>
      <Icon
        icon="iconamoon:arrow-right-2-duotone"
        width="24"
        height="24"
        className=""
      />
      <p className="line-clamp-1 cursor-pointer">{name}</p>
    </div>
  );
};

export default NavigationBar;
