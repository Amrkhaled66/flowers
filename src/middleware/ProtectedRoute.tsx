import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "src/context/authCtx";
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
