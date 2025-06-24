import { Icon } from "@iconify/react";
import { ReactNode } from "react";
const DeliveryOption = ({
  title,
  subtitle,
  icon,
  onClick,
  isButton = false,
  error,
  isSelected,
}: {
  title: string;
  subtitle: ReactNode;
  icon?: string;
  onClick?: () => void;
  isButton?: boolean;
  deliveryTime?: string;
  deliveryDate?: string;
  error?: string;
  isSelected?: boolean | string;
}) => {
  const Wrapper = isButton ? "button" : "div";
  return (
    <div className="space-y-1">
      <Wrapper
        onClick={onClick}
        className={`border-stroke bg-main-50 hover:!border-main animate flex min-h-[130px] w-[170px] cursor-pointer flex-col gap-y-4 rounded-xl border px-2 py-4 text-start lg:bg-white lg:px-4 ${error && "!border-red"} ${isSelected && "!border-main"}`}
      >
        <div className="flex items-center gap-x-3">
          {icon && <Icon icon={icon} width="24" height="24" />}
          <p className="w-full text-sm font-bold">{title}</p>
        </div>
        <div className="space-y-3">{subtitle}</div>
      </Wrapper>
      <p className="text-red px-2 text-xs">{error}</p>
    </div>
  );
};

export default DeliveryOption;
