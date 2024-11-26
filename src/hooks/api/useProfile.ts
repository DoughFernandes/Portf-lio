import { ERROR_MESSAGES } from "@/hooks/err/ErrorHandling";
import { Profile } from "@/interface/profile";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../services/routes/fetchData";

const getProfile = async (): Promise<Profile> => {
  const data = await fetchData();
  if(!data) throw new Error (ERROR_MESSAGES.FETCH_FAILED);
  return data as Profile;
};

export function useProfile() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return { data, isLoading, isError };
}
