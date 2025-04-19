import ideasArr from "src/data/ideas";
import IdeaCard from "./IdeaCard";
import Idea from "src/types/Idea";
import Slider from "../CategoriesSlider/Slider";
import { SwiperSlide } from "swiper/react";

import Button from "src/components/ui/Button";
const IdeasCards = () => {
  return (
    <div className="space-y-5">
      <Slider  slidesPerGroup={3}>
        {ideasArr.map((idea: Idea, index) => (
          <SwiperSlide className="!w-[260px] !pl-1 lg:!w-1/3" key={index}>
            <IdeaCard img={idea.img} title={idea.title} />
          </SwiperSlide>
        ))}
      </Slider>
      <Button
        text="Choose Gifts Now"
        className="bg-main-100 mx-auto block w-full !py-2.5 !text-base lg:hidden"
      />
    </div>
  );
};

export default IdeasCards;
