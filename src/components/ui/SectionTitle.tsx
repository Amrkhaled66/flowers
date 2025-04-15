import { ReactNode } from "react";

const SectionTitle = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-text-main font-bold lg:text-[32px]">{title}</h2>
      {children}
    </div>
  );
};

export default SectionTitle;
