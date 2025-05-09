import { Icon } from "@iconify/react/dist/iconify.js";

const SearchInput = ({
  onChange,
  value,
  isFullScreen,
  bgColor = "bg-white",
  placeholder = "Search",
  textSize = "text-xs",
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isFullScreen?: boolean;
  bgColor?: string;
  placeholder?: string;
  textSize?: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-y-3">
      <div className={`relative ${bgColor} ${isFullScreen && "p-2"} `}>
        <div className="text-main border-r-stroke pointer-events-none absolute inset-y-0 start-0 top-1/2 flex h-fit -translate-y-1/2 items-center border-r-2 ps-3 pr-1">
          <Icon icon="material-symbols:search-rounded" width="24" height="24" />
        </div>
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`placeholder:text-subTitle border-stroke animate focus:border-main h-full w-full rounded-xl border py-2.5 ps-12 ${textSize} focus:ring-0 focus:outline-none`}
          type="text"
          name={"address"}
        />
      </div>
    </div>
  );
};

export default SearchInput;
