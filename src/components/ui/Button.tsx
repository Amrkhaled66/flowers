import { ReactNode } from "react";
const Button = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`font-main bg-main text-text-main flex items-center justify-center gap-x-2.5 rounded-sm px-4 py-3 text-sm font-bold lg:px-5 lg:py-2 lg:text-lg ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
