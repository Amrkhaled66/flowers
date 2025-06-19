import Slider from "src/components/HomePage/Categories/Slider";
import { SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react/dist/iconify.js";
const ProductImagesSlider = ({
  images,
  onClose,
}: {
  images: string[] | [];
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[100000] flex h-screen w-screen items-center justify-center bg-white">
      <button
        onClick={onClose}
        className="animate absolute top-2 right-2 rounded-full bg-gray-100 p-2 hover:drop-shadow-xl lg:right-[25%]"
      >
        <Icon icon="ion:close" width="20" height="20" />
      </button>
      <div className="relative !aspect-square max-h-[90%] w-full overflow-hidden sm:w-[65%] lg:w-[80%] lg:overflow-visible xl:w-[40%]">
        <Slider
          isproductListSlider
          speed={500}
          items={images}
          slidesPerGroup={1}
          notSpaceBetween
        >
          {images &&
            images.map((img: string) => (
              <SwiperSlide className="" key={img}>
                <img
                  className="size-full object-cover object-center lg:rounded-xl"
                  src={img}
                />
              </SwiperSlide>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImagesSlider;
