import { axiosPrivate } from "src/api/axios";

const getProfileData = async () => {
    const { data } = await axiosPrivate.get("/api/profile-data");
    return data;
};

const updateProfileData = async (profileData: any) => {
    const { data } = await axiosPrivate.put("/api/profile", profileData);
    return data;
};

export { getProfileData, updateProfileData };