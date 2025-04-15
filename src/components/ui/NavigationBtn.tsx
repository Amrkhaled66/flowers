import { Icon } from "@iconify/react/dist/iconify.js";

const NavigationBtn = ({
  onClick,
  dir,
  className = "",
}: {
  onClick: () => void;
  dir: "left" | "right";
  className?: string;
}) => {
  className += dir === "left" ? " left-8  " : " right-8 ";
  return (
    <button
      onClick={onClick}
      className={`border-stroke z-20 hover:border-main absolute top-1/2 h-[52px] w-[52px] -translate-y-1/2 rounded-full border bg-white p-2.5 transition-all duration-300 ${className}`}
    >
      <Icon
        icon="prime:arrow-up"
        color="#000"
        width="24"
        height="24"
        className={`${dir === "left" ? "-rotate-90" : "rotate-90"}`}
      />
    </button>
  );
};

export default NavigationBtn;
