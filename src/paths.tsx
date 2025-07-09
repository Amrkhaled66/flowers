import MainLayout from "./layouts/MainLayout";
import ProfilePageLayout from "./layouts/ProfilePageLayout";
import CartLayout from "./layouts/CartLayout";
import CartSubLayout from "./layouts/CartSubLayout";

import { OrderProvider } from "./context/orderCtx";
import MessageGiftProvider from "./context/MessageGiftCtx";
import { DeliveryTimeCtxProvider } from "./context/DeliveryTimeCtx";

import {
  OnlyGuestUser,
  ProtectedRoute,
  VerifiedAccount,
  // NotVerifiedAccount,
} from "./middleware";

import i18n from "i18next";

const getBreadcrumb = (translationKey: string) => {
  return () => i18n.t(`profileBreadcrumbs:${translationKey}`);
};

import {
  HomePage,
  ProductPage,
  FilterPage,
  SucessOrder,
  TrackOrderPage,
  InvoicePage,
  Terms,
  Privacy,
  // auth
  SignUpPage,
  SignInPage,
  VerifyAccount,
  // forget password
  SendOtp,
  SubmitOtp,
  ResetPassword,

  // cart
  ShippingBag,
  DeliveryInfo,
  Payment,

  // Profile
  UserInfo,
  ChangePhoneNumber,
  ChangePassword,
  Occasions,
  Address,
  Favorite,
  MyOrders,
  Points,
  AddNewAddress,
  EditProfile,
  BalloraBallance,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./context/user/cartCtx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <NotVerifiedAccount>
      <MainLayout />
      // </NotVerifiedAccount>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "filter", element: <FilterPage /> },
      // auth
      {
        path: "signin",
        element: (
          <OnlyGuestUser>
            <SignInPage />
          </OnlyGuestUser>
        ),
      },
      {
        path: "signup",
        element: (
          <OnlyGuestUser>
            <SignUpPage />
          </OnlyGuestUser>
        ),
      },
      {
        path: "verify-account",
        element: (
          <ProtectedRoute>
            <VerifiedAccount>
              <VerifyAccount />
            </VerifiedAccount>
          </ProtectedRoute>
        ),
      },
      // forget password
      {
        path: "forgot-password/send-otp",
        element: (
          <OnlyGuestUser>
            <SendOtp />
          </OnlyGuestUser>
        ),
      },
      {
        path: "forgot-password/submit-otp",
        element: (
          <OnlyGuestUser>
            <SubmitOtp />
          </OnlyGuestUser>
        ),
      },
      {
        path: "forgot-password/reset-password",
        element: (
          <OnlyGuestUser>
            <ResetPassword />
          </OnlyGuestUser>
        ),
      },
      // Profile
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePageLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            path: "userInfo",
            element: <UserInfo />,
            handle: { breadcrumb: getBreadcrumb("userInfo") },
          },
          {
            path: "changePhoneNumber",
            element: <ChangePhoneNumber />,
            handle: { breadcrumb: getBreadcrumb("changePhoneNumber") },
          },
          {
            path: "editProfile",
            element: <EditProfile />,
            handle: { breadcrumb: getBreadcrumb("editProfile") },
          },
          {
            path: "change-password",
            element: <ChangePassword />,
            handle: { breadcrumb: getBreadcrumb("changePassword") },
          },
          {
            path: "occasions",
            element: <Occasions />,
            handle: { breadcrumb: getBreadcrumb("occasions") },
          },
          {
            path: "addresses",
            handle: { breadcrumb: getBreadcrumb("addresses") },
            children: [
              {
                index: true,
                element: <Address />,
              },
              {
                path: "addNewAddress",
                element: <AddNewAddress />,
                handle: { breadcrumb: getBreadcrumb("addNewAddress") },
              },
            ],
          },
          {
            path: "favorites",
            element: <Favorite />,
            handle: { breadcrumb: getBreadcrumb("favorites") },
          },
          {
            path: "orders",
            element: <MyOrders />,
            handle: { breadcrumb: getBreadcrumb("orders") },
          },
          {
            path: "points",
            element: <Points />,
            handle: { breadcrumb: getBreadcrumb("points") },
          },
          {
            path: "ballance",
            element: <BalloraBallance />,
            handle: { breadcrumb: getBreadcrumb("balloraBallance") },
          },
        ],
      },
      // cart
      {
        path: "cart",

        element: (
          <OrderProvider>
            <DeliveryTimeCtxProvider>
              <CartLayout />
            </DeliveryTimeCtxProvider>
          </OrderProvider>
        ),
        children: [
          {
            index: true,
            element: (
              <MessageGiftProvider>
                <ShippingBag />
              </MessageGiftProvider>
            ),
          },
          {
            element: <CartSubLayout />,
            children: [
              {
                path: "delivery-info",
                element: <DeliveryInfo />,
              },
              {
                path: "payment",
                element: (
                  <CartProvider>
                    <Payment />
                  </CartProvider>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "success-order",
        element: <SucessOrder />,
      },
      {
        path: "track-order/:id",
        element: <TrackOrderPage />,
      },
      {
        path: "invoice/:id",
        element: <InvoicePage />,
      },
      {
        path: "privacy-policy",
        element: <Privacy />,
      },
      {
        path: "terms-conditions",
        element: <Terms />,
      },
    ],
  },
]);

const Paths = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Paths;
