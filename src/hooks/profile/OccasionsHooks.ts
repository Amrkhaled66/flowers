import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getOccasions,
  updateOccasion,
  deleteOccasion,
  addOccasion,
} from "src/api/profile/occasions";
import Occasion from "src/types/UserInfo/Occasion";
const useGetOccasions = () =>
  useQuery({
    queryKey: ["user-occasions"],
    queryFn: () => getOccasions(),
    retry: 2,
  });

const useUpdateOccasion = () =>
  useMutation({
    mutationFn: ({ occasion, id }: { occasion: Occasion; id: number }) =>
      updateOccasion(occasion, id),
  });
const useDeleteOccasion = () =>
  useMutation({
    mutationFn: (id: number) => deleteOccasion(id),
  });
const useAddOccasion = () =>
  useMutation({
    mutationFn: (occasion: Occasion) => addOccasion(occasion),
  });

export {
  useGetOccasions,
  useUpdateOccasion,
  useDeleteOccasion,
  useAddOccasion,
};
