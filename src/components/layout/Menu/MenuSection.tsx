import { ReactNode } from "react";

const MenuSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="text-text-main flex flex-col gap-y-5 lg:gap-y-6">
      <p className="text-[22px] font-bold">{title}</p>
      {children}
    </div>
  );
};

export default MenuSection;
