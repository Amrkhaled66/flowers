import bg from "src/assets/categorybg.svg";

interface CategoryCardProps {
  img: string;
  name: string;
  isMenuCard?: boolean;
}

const CategoryCard = ({ img, name, isMenuCard }: CategoryCardProps) => {
  const containerClasses = `
    font-main text-text-main  space-y-3  
    ${isMenuCard ? "  text-sm  lg:text-lg" : "text-sm   lg:text-lg"}
  `;

  const textClasses = `
    mx-auto w-fit text-center font-bold  line-clamp-1
    ${isMenuCard ? " text-sm lg:text-xl" : " "}
  `;

  return (
    <div className={containerClasses}>
      <div
        className={`relative flex items-center overflow-hidden ${isMenuCard ? "h-[74px] w-[74px] lg:h-[140px] lg:w-[150px]" : "h-[97px] w-[104px] sm:h-[80px] sm:w-[80px] lg:h-[140px] lg:w-[150px]"} `}
      >
        <div className="absolute z-[-1]">
          <img src={bg} alt="bg" />
        </div>
        <div className="m-auto flex aspect-square max-h-[85%] w-[80%] justify-center">
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
