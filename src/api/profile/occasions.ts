import { axiosPrivate } from "../axios";
import Occasion from "src/types/UserInfo/Occasion";
import { transformOccasionTo } from "src/utils/transforms/transformUserOccasion";
export const getOccasions = async () => {
  const { data } = await axiosPrivate.get("/user-occasions");
  return data;
};

export const addOccasion = async (occasion: Occasion) => {
  const sentOccasion = transformOccasionTo(occasion);
  const { data } = await axiosPrivate.post("/user-occasions", sentOccasion);
  return data;
};

export const deleteOccasion = async (id: number) => {
  const { data } = await axiosPrivate.delete(`/user-occasions/${id}`);
  return data;
};

export const updateOccasion = async (occasion: Occasion, id: number | null) => {
  const sentOccasion = transformOccasionTo(occasion);

  const { data } = await axiosPrivate.put(
    `/user-occasions/${id}`,
    sentOccasion,
  );
  return data;
};
