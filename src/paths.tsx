import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProfilePageLayout from "./layouts/ProfilePageLayout";

import {
  HomePage,
  ProductPage,
  SignInPage,
  SignUpPage,
  // Profile
  MyData,
  ChangePassword,
  Occasions,
  Address,
} from "./pages";
const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} index></Route>
          <Route path="/product/:id" element={<ProductPage />} index></Route>
          <Route path="/signin" element={<SignInPage />} index></Route>
          <Route path="/signup" element={<SignUpPage />} index></Route>
          <Route path="/profile" element={<ProfilePageLayout />}>
            <Route index path="mydata" element={<MyData />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="occasions" element={<Occasions />} />
            <Route path="addresses" element={<Address />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Paths;
