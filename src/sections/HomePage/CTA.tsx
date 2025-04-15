import ctaImg from "src/assets/cta.webp";

const CTA = () => {
  return (
    <section className="container !py-[40px]">
      <div
        style={{
          background: `
              linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url(${ctaImg}) lightgray 50% / cover no-repeat`,
        }}
        className="font-main flex flex-col gap-y-3 rounded-sm py-[67px] text-center text-white lg:h-[330px]"
      >
        <p className="text-sm font-bold uppercase">SPECIAL OFFER</p>
        <h1 className="font-bold lg:text-[48px]">Sale 40% Off</h1>
        <p>Home descover accessories</p>
        <button className="mx-auto w-fit border rounded-sm border-white bg-transparent px-3 py-3 font-bold text-white">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
