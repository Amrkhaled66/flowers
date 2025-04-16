import { Outlet } from "react-router";
import NavBar from "src/sections/layout/NavBar";
export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
