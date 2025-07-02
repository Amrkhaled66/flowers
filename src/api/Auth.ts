import axiosInstance from "./axios";
import { axiosPrivate } from "src/api/axios";
import Login from "src/types/auth/Longin";

const login = async (credentials: Login) => {
  const { data } = await axiosInstance.post("/login", credentials);
  return data;
};

const register = async (credentials:any) => {
  const { data } = await axiosInstance.post("/register", credentials);
  return data;
};

const logout = async () => {
  const { data } = await axiosPrivate.post("/logout");
  return data;
};

const requestOtp = async () => {
  const { data } = await axiosPrivate.get("/request-otp");
  return data;
};

const verifyOtp = async (otp: string) => {
  const { data } = await axiosPrivate.post("/verify-otp", {
    otp,
  });
  return data;
};

const changePassword = async (data: any) => {
  const { data: res } = await axiosPrivate.post("/change-password", data);
  return res;
};

const deactivateAccount = async () => {
  const { data } = await axiosPrivate.delete("/profile/delete-account");
  return data;
};

export {
  login,
  register,
  logout,
  requestOtp,
  verifyOtp,
  deactivateAccount,
  changePassword,
};
