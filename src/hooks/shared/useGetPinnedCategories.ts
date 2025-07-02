import { useQuery } from "@tanstack/react-query";
import { getPinnedCategories } from "src/api/HomePage";
import transformKeysToCamelCase from "src/utils/transformToCamalCase";
const useGetPinnedCategories = () =>
  useQuery({
    queryKey: ["pinned-categories"],
    queryFn: async () => {
      const data = await getPinnedCategories();
      return data.data.map(transformKeysToCamelCase);
    },
  });
export default useGetPinnedCategories;
