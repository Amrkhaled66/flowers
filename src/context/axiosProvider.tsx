import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLogOutMutation from "src/hooks/auth/useLogOutMutation";
import { getToken } from "src/services/authStorage";
import Alert from "src/components/ui/Alert";
import { axiosPrivate } from "src/api/axios";

const AxiosContext = createContext(axiosPrivate);

const EndedSessionModal = () =>
  Alert({
    title: "Session Expired",
    text: "Please login again",
    icon: "warning",
    confirmButtonText: "Ok",
  });

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const logoutMutate = useLogOutMutation();
  const navigate = useNavigate();

  useMemo(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        const token = getToken();
        if (token && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 401) {
          logoutMutate.mutate(undefined, {
            onSuccess: () => {
              navigate("/login", { replace: true });
              EndedSessionModal();
            },
          });
        }
        return Promise.reject(error);
      }
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
