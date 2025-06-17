const PaymentWay = ({
  name,
  icon,
  onClick,
  isActive,
  isSoon,
}: {
  name: string;
  icon?: string;
  onClick?: () => void;
  isActive: boolean;
  isSoon?: boolean;
}) => {
  return (
    <div
      onClick={isSoon ? undefined : onClick}
      className={`bg-main-50 hover:border-main animate h-fit w-full cursor-pointer space-y-3 overflow-hidden rounded-xl border ${isActive ? "border-main" : "border-transparent"
        } ${isSoon ? "opacity-50" : ""}`}
    >
      <div>
        <div className="bg-main-50 flex h-[80px] items-center gap-x-4 px-3 lg:!bg-white">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-x-3  items-center">
              <div className="flex gap-x-3">
                <input
                  disabled={isSoon}
                  type="radio"
                  checked={isActive}
                  className={`accent-text-main`}
                  name="payment"
                  id=""
                />
                {icon && <img src={icon} alt={name} className="size-full" />}
              </div>
              <div className="font-medium">{name}</div>
            </div>
            <p>{isSoon && "Soon"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentWay;
