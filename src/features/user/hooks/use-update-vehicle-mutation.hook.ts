import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVehicle } from "../api/update-vehicle.api";
import type { VehicleUpdate } from "../types/vehicle-update-dto.type";
import type { VehicleDetailDto } from "../types/vehicle-detail-dto.type";

export const useUpdateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: VehicleUpdate }) => 
      updateVehicle(id, data),
    onSuccess: (response, { id }) => {
      // Update the vehicle in cache
      if (response.data) {
        queryClient.setQueryData<VehicleDetailDto>(
          ["vehicle", id],
          response.data
        );
      }
      
      // Invalidate and refetch vehicle list
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (error) => {
      console.error("Failed to update vehicle:", error);
    },
  });
};
