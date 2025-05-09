import Button from "src/components/ui/Button";
import AddressCards from "src/sections/ProfilePage/Address/AddressCards";
import AddAddressForm from "src/pages/profile/AddNewAddress";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

import AddressType from "src/types/UserInfo/Address";
import { Link } from "react-router-dom";
const Address = () => {
  const [editedAddress, setEditedAddress] = useState<AddressType | null>(null);

  const handleEditAddress = (address: AddressType) => setEditedAddress(address);

  if (editedAddress) {
    return <AddAddressForm FormData={editedAddress} />;
  }

  return (
    <div>
      <div className="flex flex-col gap-y-10">
        <Link to="addNewAddress">
          <div className="dashed-border divide-dashed rounded-xl p-2">
            <Button
              text="Add a new address"
              icon={<Icon icon="line-md:plus" width="24" height="24" />}
              className="bg-main-100 animate text-main w-full rounded-sm !py-3 text-center font-bold"
            ></Button>
          </div>
        </Link>
        <AddressCards onEditAddress={handleEditAddress} />
      </div>
    </div>
  );
};

export default Address;
