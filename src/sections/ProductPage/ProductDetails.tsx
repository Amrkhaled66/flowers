import Description from "src/components/ProductPage/ProductDetails/Description";

const ProductDetails = () => {
  return (
    <div className="space-y-5 lg:space-y-[36px]">
      <div className="border-b-stroke flex gap-x-6 border-b px-4 pb-4 lg:px-0">
        <h2
          className={`relative text-lg font-bold text-main  `}
        >
          Description
        </h2>
      </div>
      <div className="lg:w-[50%]">{<Description />} </div>
    </div>
  );
};

export default ProductDetails;
