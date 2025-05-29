import Description from "src/components/ProductPage/ProductDetails/Description";
import Skeleton from "react-loading-skeleton";

const ProductDetails = ({ loading }: { loading: boolean }) => {
  return (
    <div className="space-y-5 lg:space-y-[36px]">
      <div className="border-b-stroke flex gap-x-6 border-b px-4 pb-4 lg:px-0">
        <h2 className={`text-main relative text-2xl font-bold`}>Description</h2>
      </div>
      {loading ? (
        <div className="flex flex-col gap-y-4">
          <Skeleton height={20}  />
          <Skeleton height={20}  />
          <Skeleton containerClassName="w-[60%]" />
        </div>
      ) : (
        <div className="lg:w-[50%]">{<Description />} </div>
      )}
    </div>
  );
};

export default ProductDetails;
