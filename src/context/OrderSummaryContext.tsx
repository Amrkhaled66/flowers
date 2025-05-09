import { createContext, useContext, useState } from "react";
type OrderSummaryConfig = {
  buttonText?: string;
  pathName?: string;
  onClick?: () => void;
};

const OrderSummaryContext = createContext<{
  config: OrderSummaryConfig;
  setConfig: (config: OrderSummaryConfig) => void;
}>({
  config: {},
  setConfig: () => {},
});

export const useOrderSummary = () => useContext(OrderSummaryContext);

const OrderSummaryProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<OrderSummaryConfig>({});
  return (
    <OrderSummaryContext.Provider value={{ config, setConfig }}>
      {children}
    </OrderSummaryContext.Provider>
  );
};

export default OrderSummaryProvider;
