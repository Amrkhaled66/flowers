import bg from "src/assets/categorybg.svg";

interface CategoryCardProps {
  img: string;
  name: string;
  isMenuCard?: boolean;
}

const CategoryCard = ({ img, name, isMenuCard }: CategoryCardProps) => {
  const containerClasses = `
     text-text-main  space-y-3  !h-auto
    ${isMenuCard ? "w-[84px] lg:w-[150px]" : " w-[104px]  sm:w-[80px]  lg:w-[150px]"} 
  `;

  const textClasses = `
    mx-auto w-full text-center font-bold line-clamp-1
    whitespace-normal break-words overflow-hidden
    ${isMenuCard ? "text-sm lg:text-lg" : "text-sm lg:text-lg"}
  `;

  return (
    <div className={containerClasses}>
      <div
        className={`relative mx-auto flex items-center ${isMenuCard ? "h-[84px] lg:h-[140px]" : "h-[97px] sm:h-[80px] lg:h-[140px]"} `}
      >
        <div className="absolute z-[-1]">
          <img src={bg} alt="bg" />
        </div>
        <div className="m-auto flex aspect-square max-h-[80%] w-[75%] justify-center">
          <img
            loading="lazy"
            src={img}
            className="w-fit object-contain object-center"
            alt="img"
          />
        </div>
      </div>
      <p className={textClasses}>{name}</p>
    </div>
  );
};

export default CategoryCard;
