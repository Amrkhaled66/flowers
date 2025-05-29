import OrderOverViewBar from "src/sections/TrackOrderPage/OrderOverViewBar";
import OrderTimeLine from "src/sections/TrackOrderPage/OrderTimeLine";
import OrderTrackingDetails from "src/sections/TrackOrderPage/OrderTrackingDetails";


const TrackOrderPage = () => {
 
  return (
    <div className="h-auto min-h-dvh py-6 lg:py-10">
      <div className="container space-y-4 lg:space-y-10">
        <OrderOverViewBar  />
        <div className="flex flex-col gap-x-6 gap-y-4 lg:flex-row">
          <OrderTimeLine />
          <OrderTrackingDetails />
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;
