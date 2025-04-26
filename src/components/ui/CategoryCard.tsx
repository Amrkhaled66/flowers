import bg from "src/assets/categorybg.svg";

interface CategoryCardProps {
  img: string;
  name: string;
  isMenuCard?: boolean;
}

const CategoryCard = ({ img, name, isMenuCard }: CategoryCardProps) => {
  const containerClasses = `
    font-main text-text-main h-fit  space-y-3 font-bold 
    ${isMenuCard ? " w-[74px] h-[74px] sm:w-[80px] text-sm lg:w-[150px] lg:text-lg" : "w-full text-sm  lg:text-lg"}
  `;

  const textClasses = `
    mx-auto w-fit text-center line-clamp-1
    ${isMenuCard ? "text-sm" : ""}
  `;

  return (
    <div className={containerClasses}>
      <div className="relative flex h-[106px] items-center overflow-hidden lg:h-[140px]">
        <div className="absolute  z-[-1]">
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
