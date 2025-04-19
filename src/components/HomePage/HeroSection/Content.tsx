import Button from "src/components/ui/Button";

const Content = () => {
  return (
    <div className="font-main flex z-40 h-full w-[50%] sm:w-[40%] lg:w-[40%] flex-col justify-center gap-y-4 text-center">
      <h1 className="text-text-main text-xl lg:leading-[51px] sm:text-[26px] font-bold lg:text-[40px]">
        Gift Your Way On Siblings Days
      </h1>
      <div className="space-y-6">
        <p className="text-subTitle mx-auto hidden w-[75%] text-center leading-[20px] lg:block">
          Love what you listen, listen to what you love. Music speaks when words
          don’t. Make it clear. Let music reach your heart.
        </p>
        <Button
          className="mx-auto  transition-all duration-300 hover:brightness-90"
          text="Shop Now"
        />
      </div>
    </div>
  );
};

export default Content;
