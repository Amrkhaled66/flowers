import type { Order } from "./order";

export interface ReceivedOrder extends Order {
  id: number;
  paymentStatus: "paid" | "unpaid" | string;
  orderStatus: string;
  shippingCost: string;
  subtotal: string;
  total: string;
  balanceUsed: string;
  createdAt: string;
  updatedAt: string;
  products: ReceivedProduct[];
  tracking: OrderTracking[];
}

export interface ReceivedProduct {
  id: string;
  nameAr: string;
  nameEn: string;
  firstImage: string;
  quantity: number;
  price: string;
}

export interface OrderTracking {
  status: string;
  updatedAt: string;
}
