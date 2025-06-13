import { useContext, createContext, useState } from "react";

const DeliveryTimeCtx = createContext<{
  updateDeliveryTime: (key: string, value: string) => void;
  deliveryTime: { deliverTime: string; deliveryDate: string };
}>({
  updateDeliveryTime: () => {},
  deliveryTime: { deliverTime: "", deliveryDate: "" },
});

export const DeliveryTimeCtxProvider = ({ children }: any) => {
  const [deliveryTime, setDeliveryTime] = useState<{
    deliverTime: string;
    deliveryDate: string;
  }>({ deliverTime: "", deliveryDate: "" });

  const updateDeliveryTime = (key: string, value: string) => {
    setDeliveryTime((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <DeliveryTimeCtx.Provider value={{ updateDeliveryTime, deliveryTime }}>
      {children}
    </DeliveryTimeCtx.Provider>
  );
};
export const useDeliveryTime = () => useContext(DeliveryTimeCtx);
