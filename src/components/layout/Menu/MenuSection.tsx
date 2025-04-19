import { ReactNode } from "react";

const MenuSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="text-text-main font-main space-y-6">
      <p className="text-lg font-bold">{title}</p>
      {children}
    </div>
  );
};

export default MenuSection;
