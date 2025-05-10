import MainLayout from "./layouts/MainLayout";
import ProfilePageLayout from "./layouts/ProfilePageLayout";
import CartLayout from "./layouts/CartLayout";
import CartSubLayout from "./layouts/CartSubLayout";

import { OnlyGuestUser, ProtectedRoute } from "./middleware";

import {
  HomePage,
  ProductPage,
  SignInPage,
  SignUpPage,

  // cart
  ShippingBag,
  DeliveryInfo,
  Payment,

  // Profile
  MyData,
  ChangePassword,
  Occasions,
  Address,
  Favorite,
  MyOrders,
  Points,
  AddNewAddress,
  EditProfile,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product/:id", element: <ProductPage /> },
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
        ],
      },
      // cart
      {
        path: "cart",
        element: <CartLayout />,
        children: [
          {
            index: true,
            element: <ShippingBag />,
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
