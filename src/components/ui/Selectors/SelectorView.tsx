import { Icon } from "@iconify/react/dist/iconify.js";

interface QuantitySelectorViewProps {
  title: string;
  isCartMenu: boolean;
  quantity: number;
  inputValue: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const SelectorView = ({
  title,
  isCartMenu,
  quantity,
  inputValue,
  onIncrease,
  onDecrease,
  onChange,
  onBlur,

}: QuantitySelectorViewProps) => {

  const buttonClass =
    "flex h-full w-full items-center justify-center px-1.5 disabled:cursor-not-allowed";
  const iconClass = "text-text-main h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]";
  const wrapperClass =
    "border-main flex h-[28px] w-fit items-center overflow-hidden rounded-lg border lg:h-[40px] lg:rounded-xl";
  const inputClass =
    "bg-main-100 text-text-main h-full w-[28px] text-center text-sm font-bold sm:w-[34px] lg:w-[46px] lg:text-xl";
  return (
    <div className="space-y-3 rounded-xl">
      {!isCartMenu && (
        <p className="text-text-main font-bold">{title}</p>
      )}
      <div className={wrapperClass}>
        <button
          onClick={onDecrease}
          disabled={quantity <= 1}
          style={{ background: isCartMenu ? "transparent" : "#fff" }}
          className={buttonClass}
        >
          <Icon icon="ic:outline-minus" className={iconClass} />
        </button>

        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass}
        />

        <button
          onClick={onIncrease}
          style={{ background: isCartMenu ? "transparent" : "#fff" }}
          className={buttonClass}
        >
          <Icon icon="ic:round-plus" className={iconClass} />
        </button>
      </div>
    </div>
  );
};

export default SelectorView;
