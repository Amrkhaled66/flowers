import bg from "src/assets/categorybg.webp";

const CategoryCard = ({
  img,
  name,
  isMenuCard,
}: {
  img: string;
  name: string;
  isMenuCard?: boolean;
}) => {
  return (
    <div
      className={`font-main ${isMenuCard ? "w-[80px] sm:w-fit" : "w-[80px]"} text-text-main h-fit space-y-3 text-sm font-bold lg:!w-[149.5px] lg:text-lg`}
    >
      <div
        className={`mx-auto flex ${isMenuCard ? "sm:h-[112px] sm:w-[120px]" : "h-[75px] lg:h-[140px]"} items-center overflow-hidden`}
        style={{
          background: `url(${bg}) 50% /cover no-repeat`,
        }}
      >
        <div className="m-auto flex aspect-square max-h-[85%] w-[90%] justify-center">
          <img
            loading="lazy"
            src={img}
            className={`w-fit object-contain object-center`}
            alt="img"
          />
        </div>
      </div>
      <p
        className={`${isMenuCard ? "text-sm" : ""} mx-auto line-clamp-1 w-fit text-center`}
      >
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
