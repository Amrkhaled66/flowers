import { ReactNode } from "react";
import clsx from "clsx";

const DeliveryDateOption = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean | string;
  children: ReactNode;
  onClick?: () => void;
}) => (
  <li className="animate w-full">
    <button
      onClick={onClick}
      className={clsx(
        `border-stroke peer-checked:border-main hover:border-main animate flex w-full cursor-pointer items-center justify-center rounded-xl border py-2 text-center sm:px-9`,
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
