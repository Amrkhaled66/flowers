import SearchInput from "src/components/ui/SearchInput";
import OrdersCards from "src/sections/ProfilePage/MyOrders/OrdersCards";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";

import { useState } from "react";
import { useTranslation } from "react-i18next";
const MyOrders = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { t: profileTranslation } = useTranslation("profile");
  return (
    <ProfilePageCompetent>
      <div className="flex flex-col gap-y-4">
        <SearchInput
          value={searchValue}
          isFullScreen={false}
          placeholder={profileTranslation("orders.searchPlaceholder")}
          textSize="text-lg"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <OrdersCards />
      </div>
    </ProfilePageCompetent>
  );
};

export default MyOrders;
