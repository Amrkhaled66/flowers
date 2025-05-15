import "./locales/i18n";
import "./App.css";
import Paths from "./paths";
// providers
import NavBarToggleBtnsProvider from "./context/NavBarToggleBtns";
import MessageGiftProvider from "./context/MessageGiftCtx";
import OrderSummaryProvider from "./context/OrderSummaryContext";
import ResetProvider from "./context/resetCtx";
import AuthProvider from "./context/authCtx";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { toast, ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.log(error);
      toast("Error ,please call support", {
        type: "error",
      });
    },
  }),
});
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavBarToggleBtnsProvider>
          <OrderSummaryProvider>
            <MessageGiftProvider>
              <ResetProvider>
                <ToastContainer />
                <Paths />
              </ResetProvider>
            </MessageGiftProvider>
          </OrderSummaryProvider>
        </NavBarToggleBtnsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
