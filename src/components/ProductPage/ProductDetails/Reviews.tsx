import { Icon } from "@iconify/react/dist/iconify.js";

import reviews from "src/data/reviews";
const Review = ({
  name,

  date,
  content,
}: {
  name: string;
  date: string;
  content: string;
}) => {
  return (
    <div className="font-main flex gap-x-4">
      <div className="bg-stroke flex h-[40px] w-[40px] items-center justify-center rounded-full px-2">
        <Icon
          icon="proicons:person"
          width="24"
          height="24"
          className="text-subTitle"
        />
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-text-main font-bold">{name}</p>
          <div className="flex gap-x-2">
            <p className="text-subTitle text-xs">{date}</p>
          </div>
          <p className="text-subTitle text-sm">{date}</p>
        </div>
        <p className="text-subTitle text-sm">{content}</p>
      </div>
    </div>
  );
};

const AddReview = () => {
  return (
    <div className="font-main space-y-6">
      <div className="space-y-3 lg:space-y-0">
        <h2 className="text-text-main lg:text-[32px] font-bold">Add Review</h2>
        <p className="text-subTitle text-sm">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-red-500">*</span>
        </p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className=" space-y-4 lg:space-y-8">
      <div className="space-y-4 lg:space-y-8">
        {reviews.map((review, index: number) => (
          <Review
            key={index}
            name={review.name}
            date={review.date}
            content={review.content}
          />
        ))}
      </div>
      <AddReview />
    </div>
  );
};

export default Reviews;
