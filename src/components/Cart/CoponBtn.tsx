const CoponBtn = () => {
  return (
    <div className="relative w-full flex pe-1.5 bg-main-50 items-center rounded-xl border border-stroke h-[60px] font-main ">
      <input
        placeholder="Coupon Code"
        className="placeholder:text-subTitle flex-1 px-4"
        type="text"
      />
      <button className="bg-main  font-bold h-[50px] w-[100px] rounded-xl text-sm text-white">
        Apply
      </button>
    </div>
  );
};

export default CoponBtn;
