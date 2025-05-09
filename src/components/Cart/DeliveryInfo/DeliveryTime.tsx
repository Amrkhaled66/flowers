import { Icon } from "@iconify/react/dist/iconify.js";
const DeliveryTime = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center gap-x-3">
        <Icon icon="carbon:delivery" width="24" height="24" />
        <p className="text-sm font-bold">Keep Delivery</p>
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-5">
        <button className="border-stroke bg-main-50 flex w-[170px] flex-col gap-y-4 rounded-xl border px-2 py-4 text-left lg:bg-white lg:px-4">
          <div className="flex items-center gap-x-3">
            <Icon icon="carbon:delivery" width="24" height="24" />
            <p className="w-full text-sm font-bold">Fasted Delivery</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">Today</p>
            <p className="text-subTitle text-sm">Choose Day</p>
          </div>
        </button>
        <button className="border-stroke bg-main-50 flex w-[170px] flex-col gap-y-4 rounded-xl border px-2 py-4 text-left lg:bg-white lg:px-4">
          <div className="flex items-center gap-x-3">
            <p className="w-full text-sm font-bold">Another Time</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">24/5</p>
            <p className="text-subTitle text-sm">
              {/* Choose another date and time */}
              7-10
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DeliveryTime;
