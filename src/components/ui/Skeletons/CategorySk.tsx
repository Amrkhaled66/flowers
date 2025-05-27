import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategorySk = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-4 gap-x-4 sm:grid-cols-7 sm:gap-5 lg:gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="aspect-square w-full">
          <Skeleton circle className="!h-full !w-full" />
          <Skeleton className="!w-[50%]" />
        </div>
      ))}
    </div>
  );
};

export default CategorySk;
