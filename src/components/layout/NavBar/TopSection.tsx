import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";

const ProsIcon = ({
  icon,
  text,
  className,
}: {
  icon: ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-x-2 font-bold ${className}`}>
      <span className="">{icon}</span>
      <span className="text-main-900 text-xs">{text}</span>
    </div>
  );
};
const TopSection = () => {
  return (
    <div className="bg-text-main">
      <div className="container text-white">
        <div className="flex justify-between py-2">
          <div className="flex w-fit gap-x-6">
            <ProsIcon
              icon={
                <Icon icon="mdi:truck-check-outline" width="20" height="20" />
              }
              text="Express Delivery"
            />
            <ProsIcon
              className="hidden md:flex"
              icon={
                <Icon icon="mdi:truck-check-outline" width="20" height="20" />
              }
              text="Express Delivery"
            />
            <ProsIcon
              className="hidden lg:flex"
              icon={
                <Icon icon="mdi:truck-check-outline" width="20" height="20" />
              }
              text="Express Delivery"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
