import ballon from "src/assets/ballon.webp";

const balloonBase = "absolute rotate-[-11deg] overflow-hidden";
const balloonImg = "h-full w-full scale-[250%] object-contain object-bottom";

const circleBase = "absolute rounded-full bg-main/80";
const largeCircleBase = "absolute rounded-full bg-main/90";

const FloatingElements = () => {
  return (
    <>
      {/* Top right balloon */}
      <div
        className={`${balloonBase} top-12 right-8 h-[28px] w-[21px] sm:top-7 sm:h-[35px] sm:w-[26px] lg:right-0 lg:h-[95px] lg:w-[70px]`}
      >
        <img src={ballon} alt="ballon" className={balloonImg} />
      </div>

      {/* Center top circle */}
      <div
        className={`${circleBase} -top-[37px] left-1/2 h-[74px] w-[74px] -translate-x-1/2 lg:-top-[125px] lg:h-[250px] lg:w-[250px]`}
      />

      {/* Middle left small circle */}
      <div
        className={`${circleBase} bottom-[45%] left-0 z-10 h-[36px] w-[36px] translate-y-1/2 lg:bottom-[40%] lg:left-5 lg:h-[61px] lg:w-[61px]`}
      />

      {/* Bottom left large circle */}
      <div
        className={`${largeCircleBase} -bottom-[43px] left-[6%] sm:left-[17%] z-10 h-[86px] w-[86px] lg:-bottom-[185px] lg:h-[370px] lg:w-[370px]`}
      />

      {/* Bottom left balloon */}
      <div
        className={`${balloonBase} bottom-6 left-4 h-[54px] sm:left-[16%] w-[40px] lg:bottom-16 lg:left-6 lg:h-[191px] lg:w-[143px]`}
      >
        <img src={ballon} alt="ballon" className={balloonImg} />
      </div>
    </>
  );
};

export default FloatingElements;
