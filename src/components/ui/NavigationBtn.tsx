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
      className={`border-stroke hover:border-main absolute top-1/2 z-20 hidden h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border bg-white p-2.5 transition-all duration-300 lg:flex ${className}`}
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
