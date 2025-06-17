import { getProfileData } from "src/api/profile/profileData";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "src/context/authCtx";
const useGetProfileMutation = () => {
  const { updateUser,isAuthenticated } = useAuth();
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const data = await getProfileData();
      updateUser(data.data);
      return data;
    },
    enabled: isAuthenticated,
  });
};

export { useGetProfileMutation };
