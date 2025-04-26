import ctaImg from "src/assets/cta.png";

const CTA = () => {
  return (
    <section className="container lg:!py-[40px]">
      <div
        style={{
          background: `
             linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${ctaImg}) lightgray -0.551px -39.016px / 100% 147.509% no-repeat`,
        }}
        className="font-main flex h-[200px] flex-col items-start sm:items-center justify-center gap-y-3 rounded-[32px] object-cover p-5 text-left text-white sm:h-[340px] sm:text-center lg:h-[443px] lg:py-[67px]"
      >
        <p className="text-sm font-bold uppercase sm:text-[22px] lg:text-[24px]">
          SPECIAL OFFER
        </p>
        <p className="text-sm sm:text-xl lg:text-[24px]">
          Home descover accessories
        </p>
        <div className="flex w-full flex-row  justify-between gap-y-3  sm:flex-col">
          <h1 className="text-[24px] font-bold sm:text-[40px]  lg:text-[48px]">
            Sale 40% Off
          </h1>
          <button className="shadow- sm:mx-auto w-fit rounded-xl bg-[#C7A31B] px-3 py-2 font-bold text-black shadow-2xl shadow-[#C7A31B]/50 sm:h-[50px] sm:w-[200px] lg:h-[60px] lg:py-3">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
