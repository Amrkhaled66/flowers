import { Icon } from "@iconify/react/dist/iconify.js";

const BarSection = ({
  title,
  className,
  children,
  onClick,
  isOpen = false,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}) => {
  return (
    <div className={`space-y-3  overflow-hidden `}>
      <button onClick={onClick} className="flex items-center w-full justify-between">
        <h2 className="text-main text-xl font-bold">{title}</h2>
        <Icon
          className={`${isOpen ? "rotate-0" : "rotate-180"} animate`}
          icon="ep:arrow-up-bold"
          width="20"
          height="20"
        />
      </button>
      <div
        className={`${isOpen ? "max-h-200 " : "max-h-0 !p-0 "} overlfow-hidden animate  ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BarSection;
