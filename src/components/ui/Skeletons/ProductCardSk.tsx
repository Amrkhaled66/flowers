import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSk = () => {
  return (
    <div className="relative aspect-square w-full">
      <Skeleton className="!mb-2 !h-full !w-full !rounded-xl" />

      <Skeleton className="!absolute !start-0 !bottom-6" width={"90%"} />
      <Skeleton className="!absolute !start-0 !bottom-0" width={"70%"} />
    </div>
  );
};

export default ProductCardSk;
