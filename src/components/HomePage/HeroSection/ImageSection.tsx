const ImageSection = ({
  currentIndex,
  images,
}: {
  currentIndex: number;
  images: string[];
}) => {
  return (
    <div className="flex h-full  relative items-end overflow-hidden">
      <div className="relative flex size-full h-full items-end">
        <div className="bg-main/80 h-[595px] w-[595px] rounded-full"></div>
        <div className="absolute top-[67%] z-20 bottom-0 left-1/2 size-full -translate-x-1/2 -translate-y-1/2">
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
      <div className="bg-main/80 absolute bottom-3 right-0  h-[60px] w-[60px] -translate-x-1/2 rounded-full"></div>

    </div>
  );
};

export default ImageSection;
