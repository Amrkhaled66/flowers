import Button from "src/components/ui/Button";
import AddressCards from "src/sections/ProfilePage/Address/AddressCards";
import AddAddressForm from "src/sections/ProfilePage/Address/AddAddressForm";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

import AddressType from "src/types/Address";

const Address = () => {
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [editedAddress, setEditedAddress] = useState<AddressType | null>(null);

  const handleEditAddress = (address: AddressType) => setEditedAddress(address);

  if (editedAddress) {
    return (
      <AddAddressForm
        FormData={editedAddress}
        setShowAddAddressForm={setShowAddAddressForm}
      />
    );
  }

  return (
    <div>
      {showAddAddressForm ? (
        <AddAddressForm />
      ) : (
        <div className="space-y-10">
          <div className="dashed-border divide-dashed rounded-xl p-2">
            <Button
              onClick={() => setShowAddAddressForm(true)}
              text="Add a new address"
              icon={<Icon icon="line-md:plus" width="24" height="24" />}
              className="bg-main-100 animate text-main w-full rounded-sm !py-3 text-center font-bold"
            ></Button>
          </div>
          <AddressCards onEditAddress={handleEditAddress} />
        </div>
      )}
    </div>
  );
};

export default Address;
