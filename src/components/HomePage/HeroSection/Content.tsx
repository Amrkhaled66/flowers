import Button from "src/components/ui/Button";

const Content = () => {
  return (
    <div className="font-main flex h-full w-[40%] flex-col justify-center gap-y-4 text-center">
      <h1 className="text-text-main leading-[51px] font-bold lg:text-[40px]">
        Gift Your Way On Siblings Days
      </h1>
      <div className="space-y-6">
        <p className="text-subTitle mx-auto w-[75%] text-center leading-[20px]">
          Love what you listen, listen to what you love. Music speaks when words
          don’t. Make it clear. Let music reach your heart.
        </p>
        <Button className="mx-auto" text="Shop Now" />
      </div>
    </div>
  );
};

export default Content;
