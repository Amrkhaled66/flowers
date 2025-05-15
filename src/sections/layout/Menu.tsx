import { Icon } from "@iconify/react";
import MenuSection from "src/components/layout/Menu/MenuSection";
import CategoryCard from "src/components/ui/CategoryCard";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getCategories, getOccasions } from "src/api/HomePage";

import IdeasCards from "src/components/HomePage/Ideas/IdeasCards";
import BaseItem from "src/types/BaseItem";
import { getLocalizedName } from "src/utils/getLocalizedName";

const CategoryGrid = ({ items }: { items: BaseItem[] }) => (
  <div className="grid grid-cols-4 gap-4 sm:grid-cols-7 sm:gap-5 lg:grid-cols-4 lg:gap-6">
    {items.map((category, index) => (
      <CategoryCard
        isMenuCard
        key={index}
        name={getLocalizedName(category)}
        img={category.image}
      />
    ))}
  </div>
);

const Menu = () => {
  const { openMenu, toggleMenu } = useNavBarToggleBtns();
  const { t } = useTranslation("home");

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: occasions, isLoading: occasionsLoading } = useQuery({
    queryKey: ["occasions"],
    queryFn: getOccasions,
  });

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
            <CategoryGrid items={categories.data} />
          </MenuSection>

          <MenuSection title={t("occasionTitle")}>
            <CategoryGrid items={occasions.data} />
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
