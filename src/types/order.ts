export interface Order {
  coupon: string | null;
  recipientName: string;
  phoneNumber: string;
  area: string;
  fullAddress: string;
  secret: boolean;
  deliveryTime: string;
  deliveryDate: string;
  paymentMethod: string;
  useBalance?: boolean;
  message: Message;
  withoutAddress?: boolean;
}

export interface Message {
  to: string;
  from: string;
  message: string;
  url: string;
}
