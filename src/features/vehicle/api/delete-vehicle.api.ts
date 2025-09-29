import { vehicleAxios } from "./vehicle-axios";
import type { ResponseBody } from "@/types/api";

export const deleteVehicle = async (
  id: string,
): Promise<ResponseBody<void>> => {
  const response = await vehicleAxios.delete<ResponseBody<void>>(
    `/vehicles/${id}`,
  );
  return response.data;
};
