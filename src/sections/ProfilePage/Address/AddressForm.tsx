import { useAddressForm } from "src/hooks/profile/addresses/useAddressForm";
import FormInput from "src/components/ui/register/FormInput";
import Button from "src/components/ui/Button";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
import Address from "src/types/UserInfo/Address";
import AreaSelection from "src/components/ui/AddressForm/AreaSelection";
import formatPhoneNumber from "src/utils/formatPhoneNumber";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const initialFormData: Address = {
  recipientName: "",
  recipientPhone: "",
  address: "",
  area: "",
  title: "",
  id: 0,
};
const AddressForm = ({
  FormData = null,
  onSubmit,
  isPending,
}: {
  FormData?: Address | null;
  onSubmit: (formData: Address) => void;
  isPending?: boolean;
}) => {
  const initialData = useMemo(() => FormData || initialFormData, [FormData]);
  const { t } = useTranslation("profile");

  const {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSelectArea,
    validateBaseForm,
  } = useAddressForm(initialData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateBaseForm()) return;
    onSubmit({
      ...formData,
      recipientPhone: formatPhoneNumber(
        formData.recipientPhone.replace(/\s+/g, ""),
      ),
    });
  };

  return (
    <form className="w-full space-y-4 lg:p-4" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="recipientName"
        required
        label={t("address.form.recipientName")}
        value={formData.recipientName}
        onChange={handleInputChange}
        error={formErrors.recipientName}
      />
      <FormInput
        type="tel"
        name="recipientPhone"
        required
        label={t("address.form.recipientPhone")}
        value={formData.recipientPhone}
        onChange={handleInputChange}
        error={formErrors.phoneNumber}
      />

      <MapButton onLocationSelected={handleLocationSelection} />

      <AreaSelection
        error={formErrors.area}
        defaultValue={formData.area}
        isAddressForm
        onAreaSelected={handleSelectArea}
      />
      <FormInput
        type="text"
        name="address"
        required
        label={t("address.form.address")}
        value={formData.address}
        onChange={handleInputChange}
        error={formErrors.address}
      />

      <Button
        loading={isPending}
        text={t("address.form.submit")}
        className="animate w-full !py-3 text-white"
        onClick={undefined}
      />
    </form>
  );
};

export default AddressForm;
