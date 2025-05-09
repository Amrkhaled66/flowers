const circleBase = "absolute rounded-full bg-main";
const largeCircleBase = "absolute rounded-full bg-main-fade";

const FloatingElements = () => {
  return (
    <>
      {/* Center top circle */}
      <div
        className={`${largeCircleBase} start-[25%] -top-[37px] h-[74px] w-[74px] lg:-top-[125px] lg:h-[250px] lg:w-[250px]`}
      />

      {/* Middle small circle */}
      <div
        className={`${circleBase} bottom-[38%] left-3 z-10 h-[36px] w-[36px] translate-y-1/2 sm:bottom-[45%] lg:bottom-[40%] lg:h-[61px] lg:w-[61px]`}
      />

      {/* Bottom large circle */}
      <div
        className={`${largeCircleBase} start-[16%] -bottom-[43px] z-10 h-[86px] w-[86px] sm:start-[17%] lg:start-[15%] lg:-bottom-[185px] lg:h-[370px] lg:w-[370px]`}
      />

      {/* Bottom circle */}
      <div
        className={`${circleBase} right-0 bottom-2 h-[33px] w-[33px] lg:right-5 lg:bottom-22 lg:h-[60px] lg:w-[60px]`}
      ></div>
    </>
  );
};

export default FloatingElements;
