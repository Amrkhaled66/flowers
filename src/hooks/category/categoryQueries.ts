import { getCategories, getOccasions } from "src/api/category";
import { useQuery } from "@tanstack/react-query";
import transformBaseItem from "src/utils/transforms/transformCategory";
const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategories();
      const items = response?.data ?? []; // Fallback to empty array if undefined
      return items.map(transformBaseItem);
    },
  });
};

const useGetOccasions = () => {
  return useQuery({
    queryKey: ["occasions"],
    queryFn: async () => {
      const response = await getOccasions();
      const items = response?.data ?? []; // Fallback to empty array if undefined
      return items.map(transformBaseItem);
    },
  });
};

export { useGetCategories, useGetOccasions };
