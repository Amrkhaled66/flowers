import { ReactNode } from "react";
import Loader from "./Loader";
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
      disabled={loading}
      onClick={onClick}
      className={` ${loading && "animate-pulse"} text-center bg-main text-text-main hover:bg-main-300 flex items-center justify-center gap-x-2.5 rounded-xl p-3 text-sm font-bold sm:px-6 lg:px-5 lg:py-2 lg:text-lg ${className}`}
    >
      {loading ? (
        <span>
          <Loader />
        </span>
      ) : (
        <>
          <span>{text}</span>
          {icon && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
