import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import SearchInput from "src/components/ui/SearchInput";
import SearchOption from "src/components/layout/Search/SearchOption";
import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

const headerClasses =
  "border-b-stroke flex justify-between border-b pb-5 lg:pb-10";
const optionsContainerClasses = "max-h-[200px] space-y-4 overflow-y-scroll";
const closeButtonClasses =
  "border-stroke flex h-[34px] w-[34px] items-center justify-center rounded-sm border";

const Search = () => {
  const { toggleSearch, openSearch } = useNavBarToggleBtns();
  const [searchOptions, setSearchOptions] = useState<string[]>([
    "Flowers",
    "flowers",
    "sdfsdf",
    "sdfsdf",
    "sdfsdf",
    "sdfsdf",
    "sdfsdf",
    "sdfsdf",
  ]);

  const searchContainerClasses = clsx(
    "animate fixed top-0 left-0 z-[20000] flex w-screen translate-y-[-100%] flex-col justify-between gap-y-4 bg-white px-3 py-5 sm:gap-y-5 lg:gap-y-6 lg:px-[120px] lg:py-[50px]",
    {
      "!translate-y-0": openSearch,
    },
  );

  return (
    <div className={searchContainerClasses}>
      {/* Search Header */}
      <div className={headerClasses}>
        <div className="w-[90%] lg:w-[70%]">
          <SearchInput
            placeholder="Find Items"
            bgColor="bg-main-50"
            textSize="text-lg"
          />
        </div>
        <button
          onClick={toggleSearch}
          className={closeButtonClasses}
          aria-label="Close search"
        >
          <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        </button>
      </div>

      {/* Search Options */}
      <div className={optionsContainerClasses}>
        {searchOptions.map((option) => (
          <SearchOption key={option} value={option} onClick={toggleSearch} />
        ))}
      </div>
    </div>
  );
};

export default Search;
