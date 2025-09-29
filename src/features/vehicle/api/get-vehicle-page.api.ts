import { vehicleAxios } from "./vehicle-axios";
import type { VehicleDetailDto } from "../types/vehicle-detail-dto.type";
import type { ResponseBody, ResourcePage } from "@/types/api";
import type { VehiclePageFilter } from "../types/vehicle-page-filter.type";
import { createQueryString } from "@/utils/create-query-string";

export const getVehiclePage = async (
  filter: VehiclePageFilter,
): Promise<ResponseBody<ResourcePage<VehicleDetailDto>>> => {
    const queryString = createQueryString(filter);
  const response = await vehicleAxios.get<ResponseBody<ResourcePage<VehicleDetailDto>>>(
    `/vehicles?${queryString}`,
  );
  return response.data;
};
