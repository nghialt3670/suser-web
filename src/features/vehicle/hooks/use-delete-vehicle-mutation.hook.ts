import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVehicle } from "../api/delete-vehicle.api";

export const useDeleteVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteVehicle(id),
    onSuccess: (_, deletedId) => {
      // Remove the vehicle from cache
      queryClient.removeQueries({ queryKey: ["vehicle", deletedId] });
      
      // Invalidate and refetch vehicle list
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (error) => {
      console.error("Failed to delete vehicle:", error);
    },
  });
};
