// OrderContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { Order } from "src/types/order";

const defaultOrder: Order = {
  coupon: "",
  recipient_name: "",
  phone_number: "",
  area: "",
  full_address: "",
  secret: false,
  delivery_time: "",
  delivery_date: "",
  payment_method: "",
  points_used: 0,
  message: { to: "", from: "", message: "", url: "" },
};

const OrderContext = createContext<{
  order: Order;
  updateOrder: (updates: Partial<Order>) => void;
  resetOrder: () => void;
}>({
  order: defaultOrder,
  updateOrder: () => {},
  resetOrder: () => {},
});

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<Order>(defaultOrder);

  const updateOrder = (updates: Partial<Order>) => {
    setOrder((prev) => ({ ...prev, ...updates }));
  };
  
  const resetOrder = () => {
    setOrder(defaultOrder);
  };

  console.log(order)
  return (
    <OrderContext.Provider value={{ order, updateOrder, resetOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
