import Button from "src/components/ui/Button";

const Content = () => {
  return (
    <div className="font-main z-40 flex h-full w-[50%]  flex-col items-center justify-center gap-y-4 text-center sm:w-[55%] lg:w-[50%]">
      <h1 className="text-text-main text-xl font-bold sm:w-[80%]   sm:text-[26px] lg:text-[40px] lg:leading-[51px]">
        Gift Your Way On Siblings Days
      </h1>
      <div className="space-y-6">
        <p className="text-subTitle mx-auto hidden w-[78%] text-center leading-[20px] lg:block">
          Love what you listen, listen to what you love. Music speaks when words
          don’t. Make it clear. Let music reach your heart.
        </p>
        <Button
          className="animate hover:bg-main-fade mx-auto text-white lg:h-[60px] lg:w-[200px]"
          text="Shop Now"
        />
      </div>
    </div>
  );
};

export default Content;
