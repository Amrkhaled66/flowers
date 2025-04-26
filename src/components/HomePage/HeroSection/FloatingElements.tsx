import Ballon from "src/assets/ballon.webp";
const circleBase = "absolute rounded-full bg-main";
const largeCircleBase = "absolute rounded-full bg-main-fade";

const FloatingElements = () => {
  return (
    <>
      {/* Center top circle */}
      <div
        className={`${largeCircleBase} -top-[37px] left-[40%] h-[74px] w-[74px] -translate-x-1/2 lg:-top-[125px] lg:h-[250px] lg:w-[250px]`}
      />

      {/* Middle left small circle */}
      <div
        className={`${circleBase} bottom-[38%] left-0 z-10 h-[36px] w-[36px] translate-y-1/2 sm:bottom-[45%] lg:bottom-[40%] lg:left-5 lg:h-[61px] lg:w-[61px]`}
      />

      {/* Bottom left large circle */}
      <div
        className={`${largeCircleBase} -bottom-[43px] left-[16%] z-10 h-[86px] w-[86px] sm:left-[17%] lg:-bottom-[185px] lg:left-[6%] lg:h-[370px] lg:w-[370px]`}
      />

      {/* Center Ballon */}
      <div className="absolute top-[37%] left-[52%] h-[52px] w-[55px] -translate-x-1/2 -translate-y-1/2 sm:left-[55%] lg:left-[50%]  lg:top-[30%] lg:h-[125px] lg:w-[125px] ">
        <img src={Ballon} alt="Ballon" />
      </div>

      {/* Right bottom circle */}
      <div className="bg-main absolute right-0 bottom-2 h-[33px] w-[33px] rounded-full lg:right-5 lg:bottom-22 lg:h-[60px] lg:w-[60px]"></div>
    </>
  );
};

export default FloatingElements;
