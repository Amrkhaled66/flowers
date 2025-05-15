const PaymentWay = ({
  name,
  icon,
  onClick,
  isActive,
}: {
  name: string;
  icon: string;
  onClick?: () => void;
  isActive: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-main-50 hover:border-main animate h-fit w-full cursor-pointer space-y-3 overflow-hidden rounded-xl border ${
        isActive ? "border-main" : "border-transparent"
      }`}
    >
      <div>
        <div className="bg-main-50 flex h-[80px] items-center gap-x-4 px-3 lg:!bg-white">
          <div className="flex gap-x-3">
            <input
              type="radio"
              checked={isActive}
              className="accent-text-main"
              name="payment"
              id=""
            />
            <img src={icon} alt="" className="size-full" />
          </div>
          <div className="font-medium">{name}</div>
        </div>
      </div>
    </div>
  );
};
export default PaymentWay;
