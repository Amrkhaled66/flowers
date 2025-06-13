import { Icon } from "@iconify/react";
import MenuSection from "src/components/layout/Menu/MenuSection";
import CategoryCard from "src/components/ui/CategoryCard";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { useTranslation } from "react-i18next";
import {
  useGetCategories,
  useGetOccasions,
} from "src/hooks/category/categoryQueries";
import useScrollLock from "src/hooks/ui/useScrollLock";

import IdeasCards from "src/components/HomePage/Ideas/IdeasCards";
import BaseItem from "src/types/BaseItem";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { Link } from "react-router-dom";
const CategoryGrid = ({
  items,
  searchQuery,
  toggleMenu,
}: {
  items: BaseItem[];
  searchQuery: string;
  toggleMenu: () => void;
}) => (
  <div className="grid grid-cols-4 gap-4 sm:grid-cols-7 sm:gap-5 lg:grid-cols-4 lg:gap-6">
    {items.map((item) => (
      <Link key={item.id} to={`/filter?${searchQuery}=${item.id}`}>
        <button onClick={toggleMenu}>
          <CategoryCard
            isMenuCard
            name={getLocalizedName(item)}
            img={item.image}
          />
        </button>
      </Link>
    ))}
  </div>
);

const Menu = () => {
  const { openMenu, toggleMenu } = useNavBarToggleBtns();
  const { t } = useTranslation("home");

  const { data: categories, isLoading: categoriesLoading } = useGetCategories();
  const { data: occasions, isLoading: occasionsLoading } = useGetOccasions();
  useScrollLock(openMenu);

  return (
    <div
      className={`menu-bar fixed start-0 top-0 z-[80] flex h-screen w-full flex-col gap-y-6 overflow-x-hidden overflow-y-scroll bg-white px-4 py-6 transition-all duration-300 sm:px-8 sm:py-4 lg:w-[739px] lg:px-8 lg:py-10 ${
        openMenu ? "translate-x-0" : "start-[-100%]"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="bg-main absolute end-4 top-4 flex h-[44px] w-[44px] items-center justify-center rounded-xl p-1 text-white sm:end-8 sm:top-4 lg:end-8 lg:top-8"
      >
        <Icon icon="ic:outline-close" width="20" height="20" />
      </button>

      {categoriesLoading || occasionsLoading ? (
        <div className="text-main flex flex-col items-center justify-center space-y-4">
          <Icon icon="solar:calendar-outline" width="56" height="56" />
          <p className="w-full text-center text-[24px] text-nowrap">
            Loading...
          </p>
        </div>
      ) : (
        <>
          <MenuSection title={t("categoryTitle")}>
            <CategoryGrid
              toggleMenu={toggleMenu}
              searchQuery="category_id"
              items={categories}
            />
          </MenuSection>

          <MenuSection title={t("occasionTitle")}>
            <CategoryGrid
              toggleMenu={toggleMenu}
              searchQuery={"occasion_id"}
              items={occasions}
            />
          </MenuSection>
        </>
      )}

      <MenuSection title={t("ideas.ideasTitle")}>
        <IdeasCards isMenuCard />
      </MenuSection>
    </div>
  );
};

export default Menu;
