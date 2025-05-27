import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const InfoCardSkeleton = () => {
  return (
    <div className="h-full w-full p-6">
      <div className="mb-4 h-full w-full space-y-4">
        <div className="flex w-full items-center gap-x-10">
          <Skeleton width={80} height={20} />
          <Skeleton containerClassName="!w-[50%]" height={20} />
        </div>
        <div className="flex w-full items-center gap-x-10">
          <Skeleton width={80} height={20} />
          <Skeleton containerClassName="!w-[50%]" height={20} />
        </div>
        <div className="flex w-full items-center gap-x-10">
          <Skeleton width={80} height={20} />
          <Skeleton containerClassName="!w-[50%]" height={20} />
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <Skeleton width={100} height={35} borderRadius={12} />
        <Skeleton width={100} height={35} borderRadius={12} />
      </div>
    </div>
  );
};

export default InfoCardSkeleton;
