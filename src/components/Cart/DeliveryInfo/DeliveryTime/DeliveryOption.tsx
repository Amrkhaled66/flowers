import { Icon } from "@iconify/react";
const DeliveryOption = ({
  title,
  subtitle,
  icon,
  onClick,
  isButton = false,
  deliveryTime,
  deliveryDate,
  error
}: {
  title: string;
  subtitle: string;
  icon?: string;
  onClick?: () => void;
  isButton?: boolean;
  deliveryTime?: string;
  deliveryDate?: string;
  error?: string
}) => {
  const Wrapper = isButton ? "button" : "div";
  return (
    <div className="space-y-1">
      <Wrapper
        onClick={onClick}
        className={`border-stroke text-start bg-main-50 flex min-h-[130px] w-[170px] flex-col gap-y-4 rounded-xl border px-2 py-4  hover:!border-main lg:bg-white lg:px-4 animate ${error && "!border-red"}`}
      >
        <div className="flex items-center gap-x-3">
          {icon && <Icon icon={icon} width="24" height="24" />}
          <p className="w-full text-sm font-bold">{title}</p>
        </div>
        <div className="space-y-3">
          {deliveryTime && deliveryDate ? (
            <>
              <p className="text-subTitle text-sm">
                {deliveryDate}
              </p>
              <p className="text-subTitle text-sm">
                {deliveryTime}
              </p>
            </>
          ) : (
            <p className="text-subTitle text-sm">{subtitle}</p>
          )}
        </div>
      </Wrapper>
      <p className="text-red px-2 text-xs">{error}</p>
    </div>
  );
};

export default DeliveryOption;