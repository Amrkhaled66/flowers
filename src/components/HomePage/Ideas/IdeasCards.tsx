import ideasArr from "src/data/ideas";
import IdeaCard from "./IdeaCard";
import Idea from "src/types/Idea";
import Slider from "../Categories/Slider";
import Button from "src/components/ui/Button";
import ChooseGiftsButton from "src/components/ui/ChooseGiftsButton";
import { SwiperSlide } from "swiper/react";
import { getLocalizedName } from "src/utils/getLocalizedName";
import { useTranslation } from "react-i18next";
const IdeasCards = ({ isMenuCard }: { isMenuCard?: boolean }) => {
  const { t } = useTranslation("home");
  return (
    <div className="space-y-5">
      <Slider slidesPerGroup={3}>
        {ideasArr.map((idea: Idea, index) => (
          <SwiperSlide
            className={` ${isMenuCard ? "!w-[200px]" : "!w-[260px] lg:!w-1/3"} sm:!w-[213px]`}
            key={index}
          >
            <IdeaCard
              isMenuCard={isMenuCard}
              img={idea.img}
              title={getLocalizedName(idea)}
            />
          </SwiperSlide>
        ))}
      </Slider>
      <ChooseGiftsButton className="block lg:hidden" />
    </div>
  );
};

export default IdeasCards;
