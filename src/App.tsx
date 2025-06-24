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
import { AddToCartModalProvider } from "./context/AddedToCartModelCtx";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { registerToastImpl } from "src/utils/toast";
import { reactHotToastImpl } from "src/lib/toastProvider";
import { Toaster } from "react-hot-toast";

registerToastImpl(reactHotToastImpl);

const queryClient = new QueryClient({
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
      <AddToCartModalProvider>
        <ConfigProvider>
          <FavoritesProvider>
            <AuthProvider>
              <CartProvider>
                <NavBarToggleBtnsProvider>
                  <OrderSummaryProvider>
                    <ResetProvider>
                      <Toaster position="top-center" />
                      <Paths />
                    </ResetProvider>
                  </OrderSummaryProvider>
                </NavBarToggleBtnsProvider>
              </CartProvider>
            </AuthProvider>
          </FavoritesProvider>
        </ConfigProvider>
      </AddToCartModalProvider>
    </QueryClientProvider>
  );
}

export default App;
