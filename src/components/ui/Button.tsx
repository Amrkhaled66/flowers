import { ReactNode } from "react";
const Button = ({
  text,
  icon,
  className,
  onClick,
  loading = false,
}: {
  text: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${loading && "animate-pulse"} font-main bg-main text-text-main hover:bg-main-300 flex items-center justify-center gap-x-2.5 rounded-xl p-3 text-sm font-bold sm:px-6 lg:px-5 lg:py-2 lg:text-lg ${className}`}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
