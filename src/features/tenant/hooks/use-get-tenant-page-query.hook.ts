import { useQuery } from "@tanstack/react-query";
import { getTenantPage, type TenantPageFilter } from "../api/get-tenant-page.api";

export const useGetTenantPageQuery = (filter: TenantPageFilter) => {
  return useQuery({
    queryKey: ["tenants", filter],
    queryFn: async () => await getTenantPage(filter),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};


