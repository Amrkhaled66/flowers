import { useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useLogOutMutation from "./auth/useLogOutMutation";
import { getToken } from "src/services/authStorage";
import Alert from "src/components/ui/Alert";
import { axiosPrivate } from "src/api/axios";

const EndedSessionModal = () =>
  Alert({
    title: "Session Expired",
    text: "Please login again",
    icon: "warning",
    confirmButtonText: "Ok",
  });

const useAxiosSetup = () => {
  const logoutMutate = useLogOutMutation();
  const navigate = useNavigate();
  const interceptorsRef = useRef<{
    request: number | null;
    response: number | null;
  }>({ request: null, response: null });
  const handleSessionEnd = useCallback(() => {
    logoutMutate.mutate(undefined, {
      onSuccess: () => {
        navigate("/login", { replace: true });
        EndedSessionModal();
      },
      onError: () => {
        console.error("Logout failed");
      },
    });
  }, [logoutMutate, navigate]);

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          const token = getToken();
          console.log(token)
          if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 401) {
          handleSessionEnd();
        }
        return Promise.reject(error);
      },
    );

    interceptorsRef.current = {
      request: requestInterceptor,
      response: responseInterceptor,
    };

    return () => {
      if (interceptorsRef.current.request !== null) {
        axiosPrivate.interceptors.request.eject(
          interceptorsRef.current.request,
        );
      }
      if (interceptorsRef.current.response !== null) {
        axiosPrivate.interceptors.response.eject(
          interceptorsRef.current.response,
        );
      }
    };
  }, [handleSessionEnd]);

  return axiosPrivate;
};

export default useAxiosSetup;
