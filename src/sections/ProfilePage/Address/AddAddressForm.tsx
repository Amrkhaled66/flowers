import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "src/components/ui/register/FormInput";
import Button from "src/components/ui/Button";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
// import AreaSelection from "src/components/ui/AddressForm/AreaSelection";
import Address from "src/types/Address";


interface FormErrors {
  name: string;
  phoneNumber: string;
  areaId: string;
  address: string;
}

const initialFormData: Address = {
  name: "",
  phoneNumber: "",
  address: "",
  id: 0,
};

const initialFormErrors: FormErrors = {
  name: "",
  phoneNumber: "",
  areaId: "",
  address: "",
};

const AddAddressForm = ({
  FormData,
}: {
  FormData?: Address;
}) => {
  const [formData, setFormData] = useState<Address>(
    FormData || initialFormData,
  );
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  // Handle area selection
  // const handleAreaSelection = useCallback(
  //   (selectedArea: { id: number; name: string }) => {
  //     setFormData({
  //       ...formData,
  //       areaId: selectedArea.id,
  //     });
  //     setFormErrors({
  //       ...formErrors,
  //       areaId: "",
  //     });
  //   },
  //   [],
  // );

  // Handle location selection from map
  const handleLocationSelection = (location: string) => {
    setFormData({
      ...formData,
      address: location,
    });
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: FormErrors = { ...initialFormErrors };
    let isValid = true;

    // Validate recipient name
    if (!formData.name.trim()) {
      errors.name = "Recipient name is required";
      isValid = false;
    } else if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // Validate recipient phone
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Recipient phone is required";
      isValid = false;
    } else if (
      !/^\d{10,15}$/.test(formData.phoneNumber.replace(/\D/g, ""))
    ) {
      errors.phoneNumber = "Please enter a valid phone number";
      isValid = false;
    }

    // // Validate area
    // if (formData.areaId === null) {
    //   errors.areaId = "Please select an area";
    //   isValid = false;
    // }

    // Validate address
    if (!formData.address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    } else if (formData.address.length < 5) {
      errors.address = "Address must be at least 5 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log(formData);
    return;
  };

  return (
    <div className="font-main text-main space-y-5 p-4">
      <h2 className="text-xl font-bold">Add New Address</h2>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          required
          label="Recipient name"
          value={formData.name}
          onChange={handleInputChange}
          error={formErrors.name}
        />
        <FormInput
          type="text"
          name="phoneNumber"
          required
          label="Recipient phone"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={formErrors.phoneNumber}
        />

        <MapButton onLocationSelected={handleLocationSelection} />

        {/* <div>
          <AreaSelection onAreaSelected={handleAreaSelection} />
          {formErrors.areaId && (
            <p className="mt-1 text-left text-xs text-[#D00]">
              {formErrors.areaId}
            </p>
          )}
        </div> */}

        <FormInput
          type="text"
          name="address"
          required
          label="Address"
          value={formData.address}
          onChange={handleInputChange}
          error={formErrors.address}
        />

        <Button
          text="Save"
          className={`animate } w-full !py-3 text-white`}
          onClick={undefined}
        />
      </form>
    </div>
  );
};

export default AddAddressForm;
