import ideasArr from "src/data/ideas";
import IdeaCard from "./IdeaCard";
import Idea from "src/types/Idea";
import Slider from "../Categories/Slider";
import ChooseGiftsButton from "src/components/ui/ChooseGiftsButton";
import { SwiperSlide } from "swiper/react";

import useGetPinnedCategories from "src/hooks/shared/useGetPinnedCategories";
import { useTranslation } from "react-i18next";
const IdeasCards = ({
  isMenuCard,
  toggleMenu,
}: {
  isMenuCard?: boolean;
  toggleMenu?: () => void;
}) => {
  const { data: pinnedCategories, isLoading } = useGetPinnedCategories();
  const {
    i18n: { language },
  } = useTranslation("home");
  console.log("pinnedCategories", pinnedCategories);
  return (
    <div className="space-y-5">
      <Slider slidesPerGroup={3}>
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide
                className={` ${isMenuCard ? "!w-[200px]" : "!w-[260px] lg:!w-1/3"} sm:!w-[240px]`}
                key={index}
              >
                <IdeaCard loading />
              </SwiperSlide>
            ))
          : pinnedCategories.map((idea: Idea) => (
              <SwiperSlide
                className={` ${isMenuCard ? "!w-[200px]" : "!w-[260px] lg:!w-1/3"} sm:!w-[240px]`}
                key={idea.id}
              >
                <IdeaCard
                  categoryId={idea.categoryId}
                  isMenuCard={isMenuCard}
                  img={idea.image}
                  title={language === "ar" ? idea.contentAr : idea.contentEn}
                />
              </SwiperSlide>
            ))}
      </Slider>

      <ChooseGiftsButton onClick={toggleMenu} className="block lg:hidden" />
    </div>
  );
};

export default IdeasCards;
