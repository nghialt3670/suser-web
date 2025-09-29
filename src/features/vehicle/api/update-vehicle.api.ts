import type { VehicleUpdate } from "@/features/vehicle/types/vehicle-update-dto.type";
import { vehicleAxios } from "./vehicle-axios";
import type { VehicleDetailDto } from "../types/vehicle-detail-dto.type";
import type { ResponseBody } from "@/types/api";

export const updateVehicle = async (
  id: string,
  data: VehicleUpdate,
): Promise<ResponseBody<VehicleDetailDto>> => {
  const response = await vehicleAxios.put<ResponseBody<VehicleDetailDto>>(
    `/vehicles/${id}`,
    data,
  );
  return response.data;
};
