import Description from "src/components/ProductPage/ProductDetails/Description";
import CoreTips from "src/components/ProductPage/ProductDetails/CoreTips";
import Reviews from "src/components/ProductPage/ProductDetails/Reviews";

type Section = {
  title: string;
  component: React.ReactNode;
};

const sections: Section[] = [
  {
    title: "Description",
    component: <Description />,
  },
  // {
  //   title: "Core Tips",
  //   component: <CoreTips />,
  // },
  // {
  //   title: "Reviews",
  //   component: <Reviews />,
  // },
];

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
