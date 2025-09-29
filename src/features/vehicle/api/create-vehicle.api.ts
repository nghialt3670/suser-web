import type { VehicleCreate } from "@/features/vehicle/types/vehicle-create-dto.type";

import { vehicleAxios } from "./vehicle-axios";
import type { VehicleDetailDto } from "../types/vehicle-detail-dto.type";
import type { ResponseBody } from "@/types/api";

export const createVehicle = async (
  data: VehicleCreate,
): Promise<ResponseBody<VehicleDetailDto>> => {
  const response = await vehicleAxios.post<ResponseBody<VehicleDetailDto>>(
    "/vehicles",
    data,
  );
  return response.data;
};
