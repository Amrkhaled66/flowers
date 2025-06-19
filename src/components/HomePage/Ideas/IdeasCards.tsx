import ideasArr from "src/data/ideas";
import IdeaCard from "./IdeaCard";
import Idea from "src/types/Idea";
import Slider from "../Categories/Slider";
import ChooseGiftsButton from "src/components/ui/ChooseGiftsButton";
import { SwiperSlide } from "swiper/react";
import { getLocalizedName } from "src/utils/getLocalizedName";

const IdeasCards = ({ isMenuCard ,toggleMenu}: { isMenuCard?: boolean,toggleMenu?: () => void }) => {
  return (
    <div className="space-y-5">
      <Slider slidesPerGroup={3}>
        {ideasArr.map((idea: Idea, index) => (
          <SwiperSlide
            className={` ${isMenuCard ? "!w-[200px]" : "!w-[260px] lg:!w-1/3"} sm:!w-[240px]`}
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
      
      <ChooseGiftsButton onClick={toggleMenu} className="block lg:hidden" />
    </div>
  );
};

export default IdeasCards;
