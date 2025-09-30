import { useQuery } from "@tanstack/react-query";
import { getUserPage, type UserPageFilter } from "../api/get-user-page.api";

export const useGetUserPageQuery = (filter: UserPageFilter) => {
  return useQuery({
    queryKey: ["users", filter],
    queryFn: async () => await getUserPage(filter),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};


