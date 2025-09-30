import { useQuery } from "@tanstack/react-query";
import { getVehiclePage } from "../api/get-vehicle-page.api";
import type { VehiclePageFilter } from "../types/vehicle-page-filter.type";

export const useGetVehiclePageQuery = (filter: VehiclePageFilter) => {
  return useQuery({
    queryKey: ["vehicles", filter],
    queryFn: async () => await getVehiclePage(filter),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
