import ideasArr from "src/data/ideas";
import IdeaCard from "./IdeaCard";
import Idea from "src/types/Idea";
import Slider from "../CategoriesSlider/Slider";
import { SwiperSlide } from "swiper/react";

import Button from "src/components/ui/Button";
const IdeasCards = ({ isMenuCard }: { isMenuCard?: boolean }) => {
  return (
    <div className="space-y-5">
      <Slider slidesPerGroup={3}>
        {ideasArr.map((idea: Idea, index) => (
          <SwiperSlide
            className={` ${isMenuCard ? "!w-[200px] " : "!w-[260px] lg:!w-1/3"} sm:!w-[213px] `}
            key={index}
          >
            <IdeaCard
              isMenuCard={isMenuCard}
              img={idea.img}
              title={idea.title}
            />
          </SwiperSlide>
        ))}
      </Slider>
      <Button
        text="Choose Gifts Now"
        className="bg-main-300 mx-auto  text-white block w-full !py-2.5 !text-base lg:hidden"
      />
    </div>
  );
};

export default IdeasCards;
