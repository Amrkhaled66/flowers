import "./locales/i18n";
import "./App.css";
import Paths from "./paths";
// providers
import NavBarToggleBtnsProvider from "./context/NavBarToggleBtns";
import MessageGiftProvider from "./context/MessageGiftCtx";
import OrderSummaryProvider from "./context/OrderSummaryContext";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <NavBarToggleBtnsProvider>
        <OrderSummaryProvider>
          <MessageGiftProvider>
            <Paths />
          </MessageGiftProvider>
        </OrderSummaryProvider>
      </NavBarToggleBtnsProvider>
    </QueryClientProvider>
  );
}

export default App;
