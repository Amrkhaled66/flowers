const ImageSection = ({
  currentIndex,
  images,
}: {
  currentIndex: number;
  images: string[];
}) => {
  return (
    <div className="relative flex h-full items-end overflow-hidden">
      <div className="relative flex size-full h-full items-end">
        <div className="bg-main/80 h-[160px] w-[160px] sm:w-[224px] sm:h-[224px] -translate-y-5 sm:-translate-y-9 rounded-full lg:h-[595px] lg:w-[595px] lg:-translate-y-10"></div>
        <div className="absolute -bottom-3 sm:-bottom-9 left-1/2 z-20 h-[60%] sm:h-[80%] w-full -translate-x-1/2 lg:top-[67%] lg:size-full lg:-translate-y-1/2">
          {images.map((img, index) => (
            <img
              key={img}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
              className={`absolute size-full object-cover object-center transition-all duration-500`}
              src={img}
              alt="img1"
            />
          ))}
        </div>
      </div>
      <div className="bg-main/80 absolute right-0 bottom-3 hidden h-[60px] w-[60px] -translate-x-1/2 rounded-full lg:block"></div>
    </div>
  );
};

export default ImageSection;
