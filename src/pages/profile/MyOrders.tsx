import SearchInput from "src/components/ui/SearchInput";
import OrdersCards from "src/sections/ProfilePage/MyOrders/OrdersCards";
import { useState } from "react";
const MyOrders = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <SearchInput
          value={searchValue}
          isFullScreen={false}
          placeholder="Find Items"
          textSize="text-lg"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <OrdersCards />
      </div>
    </div>
  );
};

export default MyOrders;
