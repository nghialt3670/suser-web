import { useQuery } from "@tanstack/react-query";
import { getApplicationPage, type ApplicationPageFilter } from "../api/get-application-page.api";

export const useGetApplicationPageQuery = (filter: ApplicationPageFilter) => {
  return useQuery({
    queryKey: ["applications", filter],
    queryFn: async () => await getApplicationPage(filter),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};


