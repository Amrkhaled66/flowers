import { Link } from "react-router-dom";
import BaseItem from "src/types/BaseItem";
import { getLocalizedName } from "src/utils/getLocalizedName";
type DynamicSectionLinksProps = {
  items: BaseItem[];
  isActive: boolean;
  searchParam: string;
};

export const DynamicSectionLinks = ({
  items,
  isActive,
  searchParam,
}: DynamicSectionLinksProps) => {
  return (
    <div
      className={`${
        isActive ? "mb-7 max-h-[600px] min-h-full" : "max-h-0"
      } flex flex-col space-y-3 overflow-hidden text-start transition-all duration-300 lg:!max-h-full`}
    >
      {items.map((subLink) => (
        <Link
          key={subLink.id}
          className="hover:text-main-100 animate"
          to={`/filter?${searchParam}=${subLink.id}`}
        >
          <p className="text-sm">{getLocalizedName(subLink)}</p>
        </Link>
      ))}
    </div>
  );
};
