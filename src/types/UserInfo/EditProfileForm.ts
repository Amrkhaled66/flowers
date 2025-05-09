interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

export type { FormDataType, FormErrors };
