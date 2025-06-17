import { getConfig } from "src/api/shared";
import { useQuery } from "@tanstack/react-query";
import { useConfig } from "src/context/configCtx";
const useGetConfig = () => {
  const { storeConfig } = useConfig();
  return useQuery({
    queryKey: ["config"],
    queryFn: async () => {
      const data = await getConfig();
      storeConfig(data.data);
      return data;
    },
  });
};
export { useGetConfig };
