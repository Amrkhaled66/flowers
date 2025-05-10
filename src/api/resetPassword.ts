import axiosInstance from "./axios";

const sendOtp = async (phone_number: string) => {
  const { data } = await axiosInstance.post("/api/forget-password/send-otp", {
    phone_number,
  });
  return data;
};

const submitOtp = async (phone_number: string, otp: string) => {
  const { data } = await axiosInstance.post("/api/forget-password/submit-otp", {
    phone_number,
    otp,
  });
  return data;
};

const changePassword = async (phone_number: string, password: string) => {
  const { data } = await axiosInstance.post(
    "/api/forget-password/change-password",
    {
      phone_number,
      password,
    },
  );
  return data;
};

export { sendOtp, submitOtp, changePassword };
