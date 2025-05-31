import axiosInstance from "./axios";
import { axiosPrivate } from "src/api/axios";
import Login from "src/types/auth/Longin";

const login = async (credentials: Login) => {
  const { data } = await axiosInstance.post("/api/login", credentials);
  return data;
};

const register = async (credentials: { email: string; password: string }) => {
  const { data } = await axiosInstance.post("/api/register", credentials);
  return data;
};

const logout = async () => {
  const { data } = await axiosPrivate.post("/api/logout");
  console.log("asdfasdf");
  return data;
};

const requestOtp = async () => {
  const { data } = await axiosPrivate.get("/api/request-otp");
  return data;
};

const verifyOtp = async (otp: string) => {
  const { data } = await axiosPrivate.post("/api/verify-otp", {
    otp,
  });
  return data;
};

export { login, register, logout, requestOtp, verifyOtp };
