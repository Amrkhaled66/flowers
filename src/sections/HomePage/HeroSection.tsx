import FloatingElements from "src/components/HomePage/HeroSection/FloatingElements";
import Content from "src/components/HomePage/HeroSection/Content";
import RightSection from "src/components/HomePage/HeroSection/RightSection";
const HeroSection = () => {
  return (
    <section className="bg-hero-color relative">
      <div className="container h-[300px] sm:h-[400px] lg:h-[732px]">
        <div className="relative flex size-full items-center justify-between overflow-hidden ">
          <FloatingElements />
          <Content />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
