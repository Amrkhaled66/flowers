interface Address {
  id: number;
  recipientName: string;
  address: string;
  recipientPhone: string;
  area: string;
  title?: string;
}

interface FormErrors {
  recipientName: string;
  phoneNumber: string;
  area: string;
  address: string;
}

export default Address;
export type { FormErrors };
