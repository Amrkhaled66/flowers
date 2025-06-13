import { useQuery } from "@tanstack/react-query";
import { getPoints } from "src/api/points";

const useGetPoints = () => {
  return useQuery({
    queryKey: ["points"],
    queryFn: getPoints,
  });
};



export default useGetPoints