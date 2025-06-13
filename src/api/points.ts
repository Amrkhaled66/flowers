import { axiosPrivate } from "./axios";

const getPoints = async () => {
    const { data } = await axiosPrivate.get("/api/points");
    return data;
};

export {
    getPoints
}