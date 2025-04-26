import { Icon } from "@iconify/react";
import MenuSection from "src/components/layout/Menu/MenuSection";
import CategoryCard from "src/components/ui/CategoryCard";

import categories from "src/data/categories";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

import IdeasCards from "src/components/HomePage/Ideas/IdeasCards";
const CategoryGrid = ({ items }: { items: typeof categories }) => (
  <div className="grid grid-cols-4 gap-4 sm:grid-cols-7 sm:gap-5 lg:grid-cols-4 lg:gap-6">
    {items.map((category, index) => (
      <CategoryCard
        isMenuCard
        key={index}
        name={category.name}
        img={category.img}
      />
    ))}
  </div>
);

const Menu = () => {
  const { openMenu, toggleMenu } = useNavBarToggleBtns();

  return (
    <div
      className={`menu-bar fixed top-0 left-0 z-[60] flex h-screen w-full flex-col gap-y-6 overflow-x-hidden overflow-y-scroll bg-white px-4 py-6 transition-all duration-300 sm:px-8 sm:py-4 lg:w-[739px] lg:px-8 lg:py-10 ${
        openMenu ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="bg-main absolute top-4 right-4 flex h-[44px] w-[44px] items-center justify-center rounded-xl p-1 text-white sm:top-4 sm:right-8 lg:top-8 lg:right-8"
      >
        <Icon icon="ic:outline-close" width="20" height="20" />
      </button>

      <MenuSection title="Celebrate Every Moment">
        <CategoryGrid items={categories.slice(0, 8)} />
      </MenuSection>

      <MenuSection title="Every Moment Deserves ab Gift">
        <CategoryGrid items={categories.slice(6, 14)} />
      </MenuSection>

      <MenuSection title="Discover new ideas">
        <IdeasCards isMenuCard />
      </MenuSection>
      {/* <MenuSection title="Discover new ideas">
        <div className="block sm:hidden lg:block">
          <BrandGrid brands={brands} cols={3} />
        </div>
        <div className="hidden sm:block lg:hidden">
          <BrandGrid brands={brands} cols={4} />
        </div>
      </MenuSection> */}
    </div>
  );
};

export default Menu;
