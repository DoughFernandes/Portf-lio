import { ERROR_MESSAGES } from "@/hooks/err/ErrorHandling";
import fetchData from "@services/routes/fetchData";
import { useQuery } from "@tanstack/react-query";

const getProfile = async <T>(): Promise<T> => {
  const data = await fetchData();
  if (!data) throw new Error(ERROR_MESSAGES.FETCH_FAILED);
  return data as T;
};

export function useProfile<T>() {
  const { data, isLoading, isError } = useQuery<T>({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return { data, isLoading, isError };
}
