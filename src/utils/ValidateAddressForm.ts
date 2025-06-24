import { validatePhoneNumber } from "./register";
import Address from "src/types/UserInfo/Address";
import { FormErrors } from "src/types/UserInfo/Address";

const initialFormErrors: FormErrors = {
  recipientName: "",
  phoneNumber: "",
  area: "",
  address: "",
};

const validateAddressForm = (
  formData: Address,
  tProfile: any,
  deliverWithoutAddress?: boolean,
) => {
  const errors = { ...initialFormErrors };
  let isValid = true;

  if (!formData.recipientName.trim()) {
    errors.recipientName = tProfile("address.formErrors.name.required");
    isValid = false;
  } else if (formData.recipientName.length < 3) {
    errors.recipientName = tProfile("address.formErrors.name.minLength");
    isValid = false;
  }

  if (!formData.recipientPhone.trim()) {
    errors.phoneNumber = tProfile("address.formErrors.phoneNumber.required");
    isValid = false;
  } else if (validatePhoneNumber(formData.recipientPhone.replace(/\s+/g, ""))) {
    errors.phoneNumber = tProfile("address.formErrors.phoneNumber.invalid");
    isValid = false;
  }

  if (deliverWithoutAddress) return { errors, isValid };

  if (!formData.area) {
    errors.area = tProfile("address.formErrors.area.required");
    isValid = false;
  }

  if (!formData.address.trim()) {
    errors.address = tProfile("address.formErrors.address.required");
    isValid = false;
  } else if (formData.address.length < 5) {
    errors.address = tProfile("address.formErrors.address.minLength");
    isValid = false;
  }

  return { errors, isValid };
};
export default validateAddressForm;
