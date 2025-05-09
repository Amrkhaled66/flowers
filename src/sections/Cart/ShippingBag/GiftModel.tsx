import { useState } from "react";
import Model from "src/components/ui/Model";
import GiftMessageForm from "src/components/Cart/ShippingBag/GiftModel/GiftMessageForm";
import PreviewMessage from "src/components/Cart/ShippingBag/GiftModel/PreviewMessage";
const GiftModel = ({
  isOpen,
  onCloseFun,
}: {
  isOpen: boolean;
  onCloseFun: () => void;
}) => {
  const [isReview, setIsReview] = useState(false);

  const handleReview = () => {
    setIsReview(true);
  };
  const returnToForm = () => setIsReview(false);
  return (
    <Model isOpen={isOpen} onClose={onCloseFun}>
      {isReview ? (
        <PreviewMessage returnToForm={returnToForm} onCloseFun={onCloseFun} />
      ) : (
        <GiftMessageForm  onReview={handleReview} onCloseFun={onCloseFun} />
      )}
    </Model>
  );
};

export default GiftModel;
