import { Icon } from "@iconify/react";
import MenuSection from "src/components/layout/Menu/MenuSection";
import CategoryCard from "src/components/ui/CategoryCard";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";

import categories from "src/data/categories";
import brands from "src/data/brands";

import { SwiperSlide } from "swiper/react";
import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

const CategoryGrid = ({ items }: { items: typeof categories }) => (
  <div className="grid grid-cols-4 gap-5 sm:grid-cols-5 sm:gap-y-6 lg:grid-cols-4 lg:gap-6">
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

const BrandGrid = ({
  brands,
  cols,
}: {
  brands: string[];
  cols: number;
}) => {
  const groupSize = cols === 3 ? 6 : 8;
  const groups = Array.from({ length: Math.ceil(brands.length / groupSize) });

  return (
    <Slider isMenuSlider slidesPerGroup={groupSize} items={brands}>
      {groups.map((_, i) => (
        <SwiperSlide className="!w-full" key={i}>
          <div className={`grid h-full grid-cols-${cols} gap-4 lg:gap-6`}>
            {brands.slice(i * groupSize, i * groupSize + groupSize).map((brand, index) => (
              <div
                className="bg-main-100 h-[50px] lg:h-[77px] w-full cursor-pointer rounded-sm py-2.5"
                key={index}
              >
                <img className="size-full object-cover" src={brand} alt="brand" />
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

const Menu = () => {
  const { openMenu, toggleMenu } = useNavBarToggleBtns();

  return (
    <div
      className={`menu-bar fixed top-0 left-0 z-[60] h-screen space-y-8 overflow-x-hidden overflow-y-scroll bg-white px-4 py-6 transition-all duration-300 sm:px-8 sm:py-4 lg:w-[620px] lg:px-8 lg:py-10 ${
        openMenu ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="bg-main absolute top-6 right-4 sm:top-4 sm:right-8 lg:top-10 lg:right-8 rounded-full p-1"
      >
        <Icon icon="ic:outline-close" width="18" height="18" />
      </button>

      <MenuSection title="Shop Trending Categories">
        <CategoryGrid items={categories.slice(0, 8)} />
      </MenuSection>

      <MenuSection title="Categories">
        <CategoryGrid items={categories.slice(6, 14)} />
      </MenuSection>

      <MenuSection title="Brands">
        <div className="block sm:hidden lg:block">
          <BrandGrid brands={brands} cols={3} />
        </div>
        <div className="hidden sm:block lg:hidden">
          <BrandGrid brands={brands} cols={4} />
        </div>
      </MenuSection>
    </div>
  );
};

export default Menu;
