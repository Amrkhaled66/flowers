import Button from "src/components/ui/Button";
import AddressCards from "src/sections/ProfilePage/Address/AddressCards";
import EditAddressForm from "src/sections/ProfilePage/Address/EditAddressForm";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
import AddressType from "src/types/UserInfo/Address";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetAddresses } from "src/hooks/profile/addresses/useAddressMutations";
import { useEffect } from "react";

const Address = () => {
  const [editedAddress, setEditedAddress] = useState<AddressType | null>(null);
  const { data, isLoading, isError, refetch } = useGetAddresses();
  const handleEditAddress = (address: AddressType) => setEditedAddress(address);
  const { t } = useTranslation("profile");

  useEffect(() => {
    refetch();
  }, []);

  if (editedAddress) {
    return (
      <EditAddressForm
      refetch={refetch}
        editedAddress={editedAddress}
        onClose={() => setEditedAddress(null)}
      />
    );
  }

  return (
    <ProfilePageCompetent>
      <div className="flex flex-col gap-y-10">
        <Link to="addNewAddress">
          <div className="dashed-border divide-dashed rounded-xl p-2">
            <Button
              text={t("address.add")}
              icon={<Icon icon="line-md:plus" width="24" height="24" />}
              className="bg-main-100 animate text-main w-full rounded-sm !py-3 text-center font-bold hover:!text-white"
            ></Button>
          </div>
        </Link>
        <AddressCards
          refetch={refetch}
          isLoading={isLoading}
          isError={isError}
          data={isLoading ? null : data}
          onEditAddress={handleEditAddress}
        />
      </div>
    </ProfilePageCompetent>
  );
};

export default Address;
