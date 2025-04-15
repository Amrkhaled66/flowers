import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import { HomePage } from "./pages";
const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} index></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Paths;
