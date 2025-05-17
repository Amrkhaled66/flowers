import Button from "src/components/ui/Button";
import AddressCards from "src/sections/ProfilePage/Address/AddressCards";
import EditAddressForm from "src/sections/ProfilePage/Address/EditAddressForm";
import AddressType from "src/types/UserInfo/Address";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useTranslation } from "react-i18next";
const Address = () => {
  const [editedAddress, setEditedAddress] = useState<AddressType | null>(null);
  const handleEditAddress = (address: AddressType) => setEditedAddress(address);
  const { t } = useTranslation("profile")

  console.log(editedAddress);
  if (editedAddress) {
    return (
      <EditAddressForm
        editedAddress={editedAddress}
        onClose={() => setEditedAddress(null)}
      />
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-y-10">
        <Link to="addNewAddress">
          <div className="dashed-border divide-dashed rounded-xl p-2">
            <Button
              text={t("address.add")}
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
