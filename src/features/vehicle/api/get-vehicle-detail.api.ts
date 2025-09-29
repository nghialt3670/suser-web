import { vehicleAxios } from "./vehicle-axios";
import type { VehicleDetailDto } from "../types/vehicle-detail-dto.type";
import type { ResponseBody } from "@/types/api";

export const getVehicleDetail = async (
  id: string,
): Promise<ResponseBody<VehicleDetailDto>> => {
  const response = await vehicleAxios.get<ResponseBody<VehicleDetailDto>>(
    `/vehicles/${id}`,
  );
  return response.data;
};
