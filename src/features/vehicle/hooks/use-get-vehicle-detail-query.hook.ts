import { useQuery } from "@tanstack/react-query";
import { getVehicleDetail } from "../api/get-vehicle-detail.api";

export const useGetVehicleDetailQuery = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => getVehicleDetail(id),
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
