import { axiosPrivate } from "src/api/axios";

const getProfileData = async () => {
    const { data } = await axiosPrivate.get("/profile");
    return data;
};

const updateProfileData = async (profileData: any) => {
    const { data } = await axiosPrivate.put("//profile", profileData);
    return data;
};

export { getProfileData, updateProfileData };