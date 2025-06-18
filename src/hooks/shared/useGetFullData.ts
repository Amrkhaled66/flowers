import { useQuery } from "@tanstack/react-query";
import { getFullData } from "src/api/HomePage";

const useGetFullData = () =>
  useQuery({
    queryKey: ["full-data"],
    queryFn: async () => {
      const data = await getFullData();
      return data.data
    },
  });

export default useGetFullData;
