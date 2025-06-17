import MainLayout from "./layouts/MainLayout";
import ProfilePageLayout from "./layouts/ProfilePageLayout";
import CartLayout from "./layouts/CartLayout";
import CartSubLayout from "./layouts/CartSubLayout";

import { OrderProvider } from "./context/orderCtx";
import MessageGiftProvider from "./context/MessageGiftCtx";
import { DeliveryTimeCtxProvider } from "./context/DeliveryTimeCtx";

import { OnlyGuestUser, ProtectedRoute, VerifiedAccount } from "./middleware";

import {
  HomePage,
  ProductPage,
  FilterPage,
  SucessOrder,
  TrackOrderPage,
  InvoicePage,
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
  MyData,
  ChangePhoneNumber,
  ChangePassword,
  Occasions,
  Address,
  Favorite,
  MyOrders,
  Points,
  AddNewAddress,
  EditProfile,
  BalloraBallance
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      // <NotVerifiedAccount>
        <MainLayout />
      // </NotVerifiedAccount>
    ,
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
            path: "mydata",
            element: <MyData />,
            handle: { breadcrumb: "My Data" },
          },
          {
            path: "changePhoneNumber",
            element: <ChangePhoneNumber />,
            handle: { breadcrumb: "Change Phone Number" },
          },
          {
            path: "editProfile",
            element: <EditProfile />,
            handle: { breadcrumb: "Edit Profile" },
          },
          {
            path: "change-password",
            element: <ChangePassword />,
            handle: { breadcrumb: "Change Password" },
          },
          {
            path: "occasions",
            element: <Occasions />,
            handle: { breadcrumb: "Occasions" },
          },
          {
            path: "addresses",
            handle: { breadcrumb: "Address" },
            children: [
              {
                index: true,
                element: <Address />,
              },

              {
                path: "addNewAddress",
                element: <AddNewAddress />,
                handle: { breadcrumb: "Add New Address" },
              },
            ],
          },
          {
            path: "favorites",
            element: <Favorite />,
            handle: { breadcrumb: "Favorite" },
          },
          {
            path: "orders",
            element: <MyOrders />,
            handle: { breadcrumb: "My Orders" },
          },
          {
            path: "points",
            element: <Points />,
            handle: { breadcrumb: "Points" },
          },
          {
            path: "ballance",
            element: <BalloraBallance />,
            handle: { breadcrumb: "Ballora Ballance" },
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
                element: <Payment />,
              },
            ],
          },
        ],
      },
      {
        path: "success-order/:id",
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
