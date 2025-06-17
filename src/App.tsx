import "./locales/i18n";
import "./App.css";
import Paths from "./paths";
// providers
import NavBarToggleBtnsProvider from "./context/NavBarToggleBtns";
import OrderSummaryProvider from "./context/OrderSummaryContext";
import ResetProvider from "./context/resetCtx";
import AuthProvider from "./context/authCtx";
import { FavoritesProvider } from "./context/user/favoritesCtx";
import { CartProvider } from "./context/user/cartCtx";
import { ConfigProvider } from "./context/configCtx";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // onError: () => {
    //   toast("Error ,please call support", {
    //     type: "error",
    //   });
    // },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
      retry: 2,
    },
  },
});
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <FavoritesProvider>
          <CartProvider>
            <AuthProvider>
              <NavBarToggleBtnsProvider>
                <OrderSummaryProvider>
                  <ResetProvider>
                    <ToastContainer />
                    <Paths />
                  </ResetProvider>
                </OrderSummaryProvider>
              </NavBarToggleBtnsProvider>
            </AuthProvider>
          </CartProvider>
        </FavoritesProvider>
      </ConfigProvider>
    </QueryClientProvider >
  );
}

export default App;
