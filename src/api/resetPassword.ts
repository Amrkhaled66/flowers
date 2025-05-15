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

const changePassword = async (
  new_password: string,
  confirm_password: string,
  token: string,
) => {
  const { data } = await axiosInstance.post(
    "/api/forget-password/change-password",
    {
      new_password,
      confirm_password,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  );
  return data;
};

export { sendOtp, submitOtp, changePassword };
