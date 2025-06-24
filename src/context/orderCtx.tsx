// OrderContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { Order } from "src/types/order";

const defaultOrder: Order = {
  coupon: "",
  recipientName: "",
  phoneNumber: "",
  area: "",
  fullAddress: "",
  secret: false,
  deliveryDate: "",
  deliveryTime: "",
  paymentMethod: "",
  useBalance: false,
  message: { to: "", from: "", message: "", url: "" },
  withoutAddress: false,
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

  return (
    <OrderContext.Provider
      value={{
        order,
        updateOrder,
        resetOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
