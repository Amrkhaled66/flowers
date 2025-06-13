import { ReactNode } from "react";
import Loader from "./Loader";
const Button = ({
  text,
  icon,
  className,
  onClick,
  type,
  loading = false,
  disabled = false,
}: {
  text: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className={` ${loading && "animate-pulse"} animate bg-main text-text-main hover:bg-main-700 focus:bg-main-900 flex items-center justify-center gap-x-2.5 rounded-xl p-3 text-center text-sm font-bold disabled:cursor-not-allowed sm:px-6 lg:px-5 lg:py-2 lg:text-lg ${className}`}
    >
      {loading ? (
        <span>
          <Loader />
        </span>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

export default Button;
