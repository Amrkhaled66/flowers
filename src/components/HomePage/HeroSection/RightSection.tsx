import HeroImg from "src/assets/HeroImg.webp";

const RightSection = () => {
  return (
    <div className="flex h-full items-end sm:w-[40%] lg:w-fit">
      <div className="absolute -end-9 -bottom-4 z-20 h-[186px] w-[243px] sm:-bottom-6 sm:h-[261px] sm:w-[341px] lg:-bottom-16 lg:h-[900px] lg:w-[741px]">
        <img
          src={HeroImg}
          className="size-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div className="relative flex size-full h-full items-end justify-center">
        <div className="bg-main h-[160px] w-[160px] -translate-y-5 rounded-full sm:h-[224px] sm:w-[224px] sm:-translate-y-9 lg:h-[595px] lg:w-[595px] lg:-translate-y-16"></div>
      </div>
    </div>
  );
};

export default RightSection;
