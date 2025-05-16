import { axiosPrivate } from "../axios";
import Occasion from "src/types/UserInfo/Occasion";
export const getOccasions = async () => {
  const { data } = await axiosPrivate.get("/api/user-occasions");
  return data;
};

export const addOccasion = async (occasion: Occasion) => {
  const { data } = await axiosPrivate.post("/api/user-occasions", occasion);
  return data;
};

export const deleteOccasion = async (id: number) => {
  const { data } = await axiosPrivate.delete(`/api/user-occasions/${id}`);
  return data;
};

export const updateOccasion = async (occasion: Occasion, id: number) => {
  const { data } = await axiosPrivate.put(
    `/api/user-occasions/${id}`,
    occasion,
  );
  return data;
};
