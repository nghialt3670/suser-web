import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createVehicle } from "../api/create-vehicle.api";
import type { VehicleCreate } from "../types/vehicle-create-dto.type";
import type { VehicleDetailDto } from "../types/vehicle-detail-dto.type";

export const useCreateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VehicleCreate) => createVehicle(data),
    onSuccess: (response) => {
      // Invalidate and refetch vehicle list
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
      
      // Add the new vehicle to the cache
      if (response.data) {
        queryClient.setQueryData<VehicleDetailDto>(
          ["vehicle", response.data.id],
          response.data
        );
      }
    },
    onError: (error) => {
      console.error("Failed to create vehicle:", error);
    },
  });
};
