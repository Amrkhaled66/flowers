import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "src/services/authStorage";
import Alert from "src/components/ui/Alert";
import { axiosPrivate } from "src/api/axios";
import { useAuth } from "src/context/authCtx";
import { useLocation } from "react-router";
// import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const AxiosContext = createContext(axiosPrivate);

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();
  // const location = useLocation();
  const { t } = useTranslation("shared");

  // useEffect(() => {
  //   if (
  //     location.pathname === "/verify-account" ||
  //     location.pathname === "/signup"
  //   ) {
  //     isNotVerified.current = true;
  //   } else {
  //     isNotVerified.current = false;
  //   }
  // }, [location.pathname]);

  const EndedSessionModal = () =>
    Alert({
      title: t("sessionExpired.title"),
      text: t("sessionExpired.text"),
      icon: "warning",
      confirmButtonText: t("sessionExpired.btnText"),
    });

  useMemo(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        const token = getToken();
        if (token && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        // if (error?.response?.status === 403 && !isNotVerified.current) {
        //   isNotVerified.current = true;
        //   await Alert({
        //     title: t("verificationOtp.title"),
        //     text: t("verificationOtp.text"),
        //     icon: "warning",
        //     confirmButtonText: t("verificationOtp.btnText"),
        //   });

        //   navigate("/verify-account", { replace: true });
        // }
        if (error?.response?.status === 401 && isAuthenticated) {
          logout();
          navigate("/signin", { replace: true });
          EndedSessionModal();
        }
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <AxiosContext.Provider value={axiosPrivate}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxiosPrivate = () => {
  return useContext(AxiosContext);
};
