import CheckboxList from "src/components/FilterPage/FilterBar/CheckboxList";
import ColorSelector from "src/components/FilterPage/FilterBar/ColorSelector";
import PriceRange from "src/components/FilterPage/FilterBar/PriceRange";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  categories: string[];
  colors: { hex: string }[];
};

const FilterBar = ({
  sidebarOpen,
  setSidebarOpen,
  categories,
  colors,
}: SidebarProps) => {
  return (
    <div
      className={`bg-main-50 top-0 left-0 z-50 block h-full w-[25%] space-y-6 overflow-y-scroll rounded-xl p-4 transition-all duration-300 lg:z-40 lg:overflow-y-hidden lg:rounded-2xl ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:!block`}
    >
      <button
        className="text-main-900 absolute top-0 right-0 flex h-[36px] w-[36px] items-center justify-center bg-[#EFEFEF] text-2xl lg:hidden"
        onClick={() => setSidebarOpen(false)}
      >
        ✕
      </button>

      <div className="space-y-4">
        <div className="border-b-stroke space-y-4 border-b pb-3">
          <h2 className="text-main text-xl font-bold">Category</h2>
          <CheckboxList items={categories} />
        </div>

        <PriceRange />
      </div>

      <div className="space-y-3">
        <h2 className="text-main text-xl font-bold">Occasion</h2>
        <CheckboxList items={["dfdf", "dfdfdf"]} />
      </div>

      <div className="space-y-3">
        <h2 className="text-main text-xl font-bold">Color</h2>
        <ColorSelector colors={colors} />
      </div>

      <button className="bg-main animate hover:bg-main-300 h-[43px] w-full rounded-xl text-lg font-semibold text-white lg:h-[60px]">
        Apply Now
      </button>
    </div>
  );
};

export default FilterBar;
