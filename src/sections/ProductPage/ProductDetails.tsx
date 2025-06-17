import Skeleton from "react-loading-skeleton";
import { useTranslation } from "react-i18next";
const ProductDetails = ({ loading, description }: { loading: boolean, description: string }) => {
  const { t } = useTranslation("productPage");
  return (
    <div className="space-y-5 lg:space-y-[36px]">
      <div className="border-b-stroke flex gap-x-6 border-b  pb-4 lg:px-0">
        <h2 className={`text-main relative text-xl lg:text-2xl font-bold`}>{t("desc")}</h2>
      </div>
      {loading ? (
        <div className="flex flex-col gap-y-4">
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton containerClassName="w-[60%]" />
        </div>
      ) : (
        <div className="lg:w-[50%]"><p>{description}</p> </div>
      )}
    </div>
  );
};

export default ProductDetails;
