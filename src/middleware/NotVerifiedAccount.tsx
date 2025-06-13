import { useAuth } from "src/context/authCtx";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

const NotVerifiedAccount = ({ children }: { children: ReactNode }) => {
  const {
    authData: { user },
  } = useAuth();
  const location = useLocation();

  if (user && !user?.verified && location.pathname !== "/verify-account") {
    return <Navigate to="/verify-account" replace />;
  }

  return <>{children}</>;
};

export default NotVerifiedAccount;
