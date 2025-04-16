import FloatingElements from "src/components/HomePage/HeroSection/FloatingElements";
import Content from "src/components/HomePage/HeroSection/Content";
import ImageSection from "src/components/HomePage/HeroSection/ImageSection";
import NavigationBtn from "src/components/ui/NavigationBtn";

import { useState } from "react";

import img1 from "src/assets/Hero/1.webp";
import img2 from "src/assets/Hero/2.webp";
import img3 from "src/assets/Hero/3.webp";
const images = [img1, img2, img3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getNextImg = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getPrevImg = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-hero-color">
      <div className="relative container lg:h-[732px]">
        <div className="relative flex size-full items-center justify-end gap-x-6 overflow-hidden">
          {/* Floating Elements */}
          <FloatingElements />
          <Content />
          <ImageSection images={images} currentIndex={currentIndex} />
        </div>

        {/* Slider Navigation */}
        <NavigationBtn dir="left" onClick={getPrevImg} />
        <NavigationBtn dir="right" onClick={getNextImg} />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 space-x-2">
          {images.map((img, index) => {
            return (
              <button
                key={img}
                onClick={() => goToIndex(index)}
                className={`border-text-main h-3.5 w-3.5 rounded-full border ${currentIndex === index ? "bg-text-main" : ""} `}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
