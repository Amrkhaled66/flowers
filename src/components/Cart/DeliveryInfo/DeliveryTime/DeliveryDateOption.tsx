import { ReactNode } from "react";
import clsx from "clsx";

const DeliveryDateOption = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: ReactNode;
  onClick?: () => void;
}) => (
  <li className="animate  w-full ">
    <button
      onClick={onClick}
      className={clsx(
        `border-stroke w-full  peer-checked:border-main hover:border-main animate flex cursor-pointer items-center justify-center rounded-xl border px-9 py-2 text-center`,
        {
          "!border-main": isActive,
        },
      )}
    >
      {children}
    </button>
  </li>
);

export default DeliveryDateOption;