import { Icon } from "@iconify/react";
import MenuSection from "src/components/layout/Menu/MenuSection";
import CategoryCard from "src/components/ui/CategoryCard";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { useTranslation } from "react-i18next";
import {
  useGetCategories,
  useGetOccasions,
} from "src/hooks/filter/useFilterSectionsMutations";
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

const Menu = ({}) => {
  const { openMenu, toggleMenu } = useNavBarToggleBtns();
  const { t } = useTranslation("home");

  const { data: categories, isLoading: categoriesLoading } = useGetCategories();
  const { data: occasions, isLoading: occasionsLoading } = useGetOccasions();
  useScrollLock(openMenu);

  return (
    <div
      className={`menu-bar fixed start-0 top-0 z-[80] flex w-full flex-col !overflow-x-hidden bg-white transition-all duration-300 lg:w-[739px] ${
        openMenu ? "start-0" : "start-[-100%]"
      }`}
    >
      <div className="flex h-screen flex-col overflow-hidden">
        {/* Header with close button */}
        <div className="z-10 flex-shrink-0 px-4 py-6 sm:px-8 sm:py-4 lg:px-8 lg:py-10">
          <button
            onClick={toggleMenu}
            className="bg-main animate absolute end-4 top-1 flex h-[44px] w-[44px] items-center justify-center rounded-xl p-1 text-white hover:drop-shadow-xl sm:end-8 sm:top-4 lg:end-8 lg:top-8"
          >
            <Icon icon="ic:outline-close" width="20" height="20" />
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="flex flex-1 flex-col gap-y-6 !overflow-x-hidden overflow-y-auto px-4 pt-2 pb-23 sm:px-8 sm:pb-3 lg:px-8">
          {categoriesLoading || occasionsLoading ? (
            <div className="text-main flex flex-col items-center justify-center space-y-4">
              <Icon icon="solar:calendar-outline" width="56" height="56" />
              <p className="w-full text-center text-[24px] text-nowrap">
                Loading...
              </p>
            </div>
          ) : (
            <>
              <MenuSection title={t("occasionTitle")}>
                <CategoryGrid
                  toggleMenu={toggleMenu}
                  searchQuery="occasion_ids"
                  items={occasions}
                />
              </MenuSection>

              <MenuSection title={t("categoryTitle")}>
                <CategoryGrid
                  toggleMenu={toggleMenu}
                  searchQuery={"category_ids"}
                  items={categories}
                />
              </MenuSection>
            </>
          )}

          <MenuSection title={t("ideas.ideasTitle")}>
            <IdeasCards toggleMenu={toggleMenu} isMenuCard />
          </MenuSection>
        </div>
      </div>
    </div>
  );
};

export default Menu;
