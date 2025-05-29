import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "src/services/authStorage";
import Alert from "src/components/ui/Alert";
import { axiosPrivate } from "src/api/axios";
import { useAuth } from "src/context/authCtx";

const AxiosContext = createContext(axiosPrivate);

const EndedSessionModal = () =>
  Alert({
    title: "Session Expired",
    text: "Please login again",
    icon: "warning",
    confirmButtonText: "Ok",
  });

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

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
        if (error?.response?.status === 401) {
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
