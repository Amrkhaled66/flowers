import ballon from "src/assets/ballon.webp";
const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-12 right-0 h-[95px] w-[70px] rotate-[-11deg] overflow-hidden">
        <img
          src={ballon}
          className="h-[100%] w-[100%] scale-[250%] object-contain object-bottom"
          alt="ballon"
        />
      </div>
      <div className="bg-main/80 absolute -top-[125px] left-[43%] h-[250px] w-[250px] -translate-x-1/2 rounded-full"></div>
      <div className="bg-main/80 absolute -bottom-[185px] left-[6%] z-10 h-[370px] w-[370px] rounded-full"></div>
      <div className="bg-main/80 absolute bottom-[40%] left-5 z-10 h-[61px] w-[61px] translate-y-1/2 rounded-full"></div>
      <div className="absolute bottom-16 left-6 h-[191px] w-[143px] rotate-[-11deg] overflow-hidden">
        <img
          src={ballon}
          className="h-[100%] w-[100%] scale-[250%] object-contain object-bottom"
          alt="ballon"
        />
      </div>
    </>
  );
};

export default FloatingElements;
