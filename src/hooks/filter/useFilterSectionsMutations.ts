import { getCategories, getOccasions, getColors } from "src/api/filterSections";
import { useQuery } from "@tanstack/react-query";
import transformCategory from "src/utils/transforms/transformCategory";
import transformOccasions from "src/utils/transforms/transformOccasions";
const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategories();
      const items = response?.data ?? [];
      return items.map(transformCategory);
    },
  });
};

const useGetOccasions = () => {
  return useQuery({
    queryKey: ["occasions"],
    queryFn: async () => {
      const response = await getOccasions();
      const items = response?.data ?? [];
      return items.map(transformOccasions);
    },
  });
};

const useGetColors = () => {
  return useQuery({
    queryKey: ["colors"],
    queryFn: async () => {
      const response = await getColors();
      const items = response?.data ?? [];
      return items;
    },
  });
};

export { useGetCategories, useGetOccasions, useGetColors };
