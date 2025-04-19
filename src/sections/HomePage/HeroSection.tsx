import FloatingElements from "src/components/HomePage/HeroSection/FloatingElements";
import Content from "src/components/HomePage/HeroSection/Content";
import ImageSection from "src/components/HomePage/HeroSection/ImageSection";
import NavigationBtn from "src/components/ui/NavigationBtn";

import { useState, useEffect } from "react";

import img1 from "src/assets/Hero/1.webp";
import img2 from "src/assets/Hero/2.webp";
import img3 from "src/assets/Hero/3.webp";
const images = [img1, img2, img3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [currentIndex]);
  const getNextImg = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getPrevImg = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    console.log(index);
    setCurrentIndex(index);
  };

  return (
    <section className="bg-hero-color relative">
      <div className="relative container h-[300px] lg:h-[732px]">
        <div className="relative flex size-full items-center justify-end sm:gap-x-28 overflow-hidden lg:gap-x-6">
          {/* Floating Elements */}
          <FloatingElements />
          <Content />
          <ImageSection images={images} currentIndex={currentIndex} />
        </div>

        {/* Slider Navigation */}
        <NavigationBtn dir="left" onClick={getPrevImg} />
        <NavigationBtn dir="right" onClick={getNextImg} />
        <div className="absolute bottom-2 left-1/2 z-40 -translate-x-1/2 space-x-2">
          {images.map((img, index) => {
            return (
              <button
                key={img}
                onClick={() => goToIndex(index)}
                className={`border-text-main h-1.5 w-1.5 rounded-full border lg:h-3.5 lg:w-3.5 ${currentIndex === index ? "bg-text-main outline-text-main outline-1 outline-offset-2 lg:!outline-none" : ""} `}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
