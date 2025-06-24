import { getLocalizedName } from "src/utils/getLocalizedName";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  categories: any;
  selectedCategoryId: number | null;
  onSelectCategory: (id: number) => void;
  onSelectRecommended: () => void;
};

const CategoryTabs = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onSelectRecommended,
}: Props) => {
  const { t } = useTranslation("addedToCartModel");
  return (
    <div className="border-b-stroke flex gap-3 overflow-x-hidden border-b  pb-2">
      <Swiper className="!w-full" spaceBetween={10} slidesPerView="auto">
        <SwiperSlide className="!w-fit">
          <button
            className={`hover:border-main animate rounded-xl border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap ${
              !selectedCategoryId
                ? "bg-main text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={onSelectRecommended}
          >
            {t("Recommendations")}
          </button>
        </SwiperSlide>
        {categories.map((cat: any) => {
          const isActive = selectedCategoryId === cat.id;
          return (
            <SwiperSlide className="!w-fit">
              <button
                key={cat.id}
                className={`hover:border-main animate rounded-xl border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap ${
                  isActive ? "bg-main text-white" : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {getLocalizedName(cat)}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryTabs;
