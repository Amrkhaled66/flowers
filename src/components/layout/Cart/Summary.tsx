import Button from "src/components/ui/Button";

const Summary = () => {
  return (
    <div className="space-y-6">
      <div className="border-t-stroke flex justify-between border-t pt-4 text-lg font-bold">
        <p className="text-text-main">Subtotal</p>
        <p className="text-main">3200 EGP</p>
      </div>
      <div className="flex gap-x-6">
        <Button className="!w-[50%] text-white hover:bg-main-300 animate !py-3" text="View Cart" />
        <Button
          className="border-main !text-main !w-[50%] rounded-sm border !bg-transparent !py-3"
          text="Checkout"
        />
      </div>
    </div>
  );
};

export default Summary;
