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
      className={`font-main bg-main text-text-main flex items-center gap-x-2.5 rounded-sm px-5 py-2 text-lg font-bold ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
