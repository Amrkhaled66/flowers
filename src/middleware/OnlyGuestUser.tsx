import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { getToken } from "src/services/authStorage";

const OnlyGuestRoute = ({ children }: { children: ReactNode }) => {
  const authToken = getToken() ? true : false;

  return !authToken ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/" replace />
    </>
  );
};

export default OnlyGuestRoute;
