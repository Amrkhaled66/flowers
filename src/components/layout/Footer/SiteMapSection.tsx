import { ReactNode } from "react";
import { Icon } from "@iconify/react";

type SectionProps = {
  title: string;
  isActive: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export const SiteMapSection = ({
  title,
  isActive,
  onToggle,
  children,
}: SectionProps) => {
  return (
    <div className="space-y-4 lg:space-y-7" key={title}>
      <div
        onClick={onToggle}
        className={`flex justify-between border-b border-white lg:border-none ${isActive && "border-none"}`}
      >
        <p className="pb-3 font-bold">{title}</p>
        <div className="block lg:hidden">
          <Icon icon="iconamoon:arrow-down-2-bold" width="24" height="24" />
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
};
